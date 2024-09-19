document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Verifica a preferência de tema do usuário e define o tema padrão
    const preferredTheme = localStorage.getItem('theme') || 'light';
    if (preferredTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleThemeButton.textContent = '🌙'; 
    } else {
        body.classList.remove('dark-mode');
        toggleThemeButton.textContent = '☀️';
    }

    // Alterna o tema ao clicar no botão
    toggleThemeButton.addEventListener('click', function () {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggleThemeButton.textContent = isDarkMode ? '🌙' : '☀️';
    });

    // Observador de interseção
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

    // Rolagem suave
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
