const greeting = document.getElementById('greeting')
isMorning = true;

greeting.addEventListener('click', () => {
    isMorning = !isMorning
    greeting.textContent = isMorning ? 'Goedemorgen' : 'Goedemiddag';
    document.body.style.backgroundColor = isMorning ? '#FFF4CC' : '#b9c9e2ff';
})

