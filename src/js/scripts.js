document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    toggleThemeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = body.classList.contains('dark-mode') ? '🌟' : '☀️';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        observer.observe(container);
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll('#topbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('#topbar').offsetHeight, 
                    behavior: 'smooth'
                });
            }
        });
    });
});
