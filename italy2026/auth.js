// Authentication check - include this script on all protected pages
(function() {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('italy2026_auth') === 'true';
    
    // If not authenticated and not on login page, redirect to login
    if (!isAuthenticated && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
})();
