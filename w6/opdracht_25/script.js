const message = document.querySelector('h1');

let intervalId;

startLoop()

function generateRandomHex() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}

function renderColor() {
    const hex = generateRandomHex();
    message.textContent = hex;

    document.body.style.setProperty('--random-color', hex);
}

function startLoop() {
    intervalId = setInterval(renderColor, 500);
}

