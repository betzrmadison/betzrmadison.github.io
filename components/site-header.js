document.addEventListener('DOMContentLoaded', function () {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    fetch('../components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header component');
            }
            return response.text();
        })
        .then(html => {
            mount.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            mount.innerHTML = '<header class="site-header"><a href="home.html" class="logo-link"><img src="../images/logo.svg" alt="Madison Betz logo" class="header-logo" /></a><nav class="site-nav"><a href="projects.html">Projects</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a></nav></header>';
        });
});
