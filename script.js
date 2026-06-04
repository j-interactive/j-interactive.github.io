const subtitleEl = document.querySelector('.subtitle');
const subtitleText = subtitleEl.textContent.trimEnd().replace(/▌$/, '').trimEnd();
subtitleEl.innerHTML = '<span class="tw"></span><span class="typewriter-cursor">▌</span>';
const twEl = subtitleEl.querySelector('.tw');
let i = 0;
(function type() {
    if (i <= subtitleText.length) {
        twEl.textContent = subtitleText.slice(0, i++);
        setTimeout(type, 50);
    }
})();

const toggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

function applyTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
}

// Default dark; respect saved preference
const saved = localStorage.getItem('theme');
applyTheme(saved !== 'light');

toggleBtn.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
});
