const safetyMessage = document.getElementById('safety-message');

let count = 0;

document.addEventListener('click', e => {
    if (e.target.id === 'increment') {
        increment();
    } else if (e.target.id === 'decrement') {
        decrement()
    } else if (e.target.id === 'reset') {
        reset();
    }
})

function increment() {
    count ++;
    updateMessage()
}

function decrement() {
    if (count > 0) {
        count--;
        updateMessage()
    } else {
        alert('Getal kan niet negatief zijn')
    }
}

function reset() {
    count = 0;
    updateMessage()
}

function updateMessage() {
    const status = messageStatus();
    safetyMessage.textContent = `${count} ${status.text}`;
    safetyMessage.style.color = status.color;
}

function messageStatus() {
    if (count < 3) {
        return {text: 'Het is nog veilig', color: 'green'};

    } else if (count >= 3 && count <= 5) {
        return {text: 'Dat zijn er best veel…', color: 'orange'};
        
    } else {
        return {text: 'Pauze? Water is ook lekker', color: 'red'};
    }
}
