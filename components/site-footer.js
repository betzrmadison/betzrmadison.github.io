document.addEventListener('DOMContentLoaded', function () {
    const mount = document.getElementById('site-footer');
    if (!mount) return;

    fetch('../components/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer component');
            }
            return response.text();
        })
        .then(html => {
            mount.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
            mount.innerHTML = '<footer class="site-footer"><div class="site-footer-inner"><a href="home.html" class="site-footer-brand"><img src="../images/logo.svg" alt="Madison Betz logo" class="header-logo" /><span>Madison Betz</span></a><nav class="site-footer-nav"><a href="projects.html">Projects</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a></nav><a href="https://www.linkedin.com/in/madison-betz/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visit Madison\'s LinkedIn profile"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.9h2.9V18H5.5V9.9Zm4.7 0h2.78v1.12h.04c.39-.74 1.34-1.52 2.75-1.52 2.94 0 3.48 1.94 3.48 4.46V18h-2.9v-16c0-1.43-.03-3.27-1.99-3.27-2 0-2.31 1.56-2.31 3.16V18h-2.9V9.9Z"/></svg></a></div></footer>';
        });
});
