const loadingBar = document.querySelector('.loading-bar');
const emojiStatus = document.getElementById('emoji');

let progress = 0;
let intervalId = null;

startLoading()
function visualiseBar() {
    loadingBar.style.setProperty('--progress', progress);
    progress++
    updateEmoji()

    if (progress === 100) {
        clearInterval(intervalId);
    }
}

function startLoading() {
    intervalId = setInterval(visualiseBar, 100);
}

function updateEmoji() {

    if (!emojiStatus) return;

    if (progress >= 0 && progress <= 25) {
        emojiStatus.textContent = '•';
    }

    else if (progress > 25 && progress <= 50) {
        emojiStatus.textContent = '••';
    }

    else if (progress > 50 && progress <= 99) {
        emojiStatus.textContent = '•••';
    }

    else if (progress >= 100){
        emojiStatus.textContent = '✔';
    }
}