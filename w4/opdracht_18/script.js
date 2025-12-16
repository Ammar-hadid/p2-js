const feedbackEl = document.getElementById('feedback');
const inputEl = document.getElementById('pswd');

inputEl.addEventListener('input', renderFeedback);

function renderFeedback() {
    const feedback = getPasswordFeedback();
    feedbackEl.textContent = feedback.text;
    feedbackEl.className = feedback.className;
}

function getPasswordFeedback() {
    if (inputEl.value.length === 0) {
        return {text: '', className: ''};
    }
    else if (inputEl.value.length < 6) {
        return {text: `Wachtwoord te kort (${inputEl.value.length})`, className: 'error'};

    } else if (inputEl.value.length >= 6) {
        return {text: `Sterk wachtwoord! (${inputEl.value.length})`, className: 'valid'};
    }
}

