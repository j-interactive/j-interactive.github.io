const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

function updateIcons(isDark) {
    if (isDark) {
        // In Dark Mode, show Sun to go back to Light
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        // In Light Mode, show Moon to go to Dark
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateIcons(true);
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons(isDark);
});
