export async function onRequestPost(context) {
    const { request, env } = context;

    // Read raw body once and try to extract password robustly
    const bodyText = await request.text();
    let password;

    if (bodyText) {
        try {
            const parsed = JSON.parse(bodyText);
            if (parsed && typeof parsed.password === 'string') {
                password = parsed.password;
            }
        } catch {
            const params = new URLSearchParams(bodyText);
            password = params.get('password');
        }
    }

    if (!password || password !== env.APK_PASSWORD) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const object = await env.APK_BUCKET.get('app-prod-release.apk');
    if (!object) {
        return new Response(JSON.stringify({ error: 'File not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const headers = new Headers();
    headers.set('Content-Type', 'application/vnd.android.package-archive');
    headers.set('Content-Disposition', 'attachment; filename="Mindrive.apk"');
    if (object.size) {
        headers.set('Content-Length', object.size.toString());
    }

    return new Response(object.body, { headers });
}
