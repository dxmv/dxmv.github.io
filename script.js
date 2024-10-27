document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        themeToggle.textContent = isLightMode ? 'Toggle Dark Mode' : 'Toggle Light Mode';
    });
});

