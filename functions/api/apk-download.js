export async function onRequestPost(context) {
    const { request, env } = context;

    let body;
    try {
        body = await request.json();
    } catch {
        return new Response(JSON.stringify({ error: 'Bad request' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (!body.password || body.password !== env.APK_PASSWORD) {
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
