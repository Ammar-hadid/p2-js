const heading = document.getElementById('heading');
const button = document.getElementById('switch-theme');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    toggleTheme()
})

function toggleTheme() {
    body.classList.toggle('dark-theme');
    
    const isDark = body.classList.contains('dark-theme');

    heading.textContent = isDark ? 'Good night 🌙' : 'Good Morning ☀️';
    button.textContent = isDark ? 'Switch to light theme' : 'Switch to dark theme';

}