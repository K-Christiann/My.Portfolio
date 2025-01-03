// State management
const state = {
    fontSize: 16,
    isDarkMode: false,
    isReading: false
};

const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const voiceAssistant = document.getElementById('voiceAssistant');
const statusMessage = document.getElementById('statusMessage');

function updateFontSize(direction) {
    const change = direction === 'increase' ? 2 : -2;
    state.fontSize = Math.min(Math.max(12, state.fontSize + change), 24);
    document.documentElement.style.setProperty('--base-font-size', `${state.fontSize}px`);
    showStatus(`${direction === 'increase' ? 'Increased' : 'Decreased'} font size to ${state.fontSize}px.`);
}

increaseFontBtn.addEventListener('click', () => updateFontSize('increase'));
decreaseFontBtn.addEventListener('click', () => updateFontSize('decrease'));

toggleThemeBtn.addEventListener('click', () => {
    state.isDarkMode = !state.isDarkMode;
    if (state.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        showStatus("Dark mode enabled.");
    } else {
        document.documentElement.removeAttribute('data-theme');
        showStatus("Light mode enabled.");
    }
});

function showStatus(message) {
    statusMessage.textContent = message;
    statusMessage.style.display = 'block';
    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 2000);
}
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const voiceAssistant = document.getElementById('voiceAssistant');
    if (voiceAssistant) {
        voiceAssistant.addEventListener('click', () => {
            if (state.isReading) {
                window.speechSynthesis.cancel();
                state.isReading = false;
                showStatus('Voice assistant stopped');
            } else {
                state.isReading = true;
                showStatus('Reading page content...');
                const content = document.querySelector('.main-content').textContent;
                speak(content);
            }
        });
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.speechSynthesis.cancel();
        state.isReading = false;
        showStatus('Voice assistant stopped');
    }
});
document.querySelectorAll('.workout-card').forEach(card => {
    card.addEventListener('click', () => {
        const workout = card.dataset.workout;
        speak(`Selected ${workout} workout program. ${card.textContent}`);
    });
});