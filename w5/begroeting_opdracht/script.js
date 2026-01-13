const input = document.querySelector('input[type="text"]');
const message = document.getElementById('message')

document.addEventListener('click', e => {
    if (e.target.id === 'btn') {
        generateGreeting();
    }
})

function generateGreeting() {
    
    const value = input.value.trim()
    message.className = '';

    if (value === '') {
        message.textContent = 'Typ eerst je naam!';
        message.classList.add('error')
        return
    }

    message.textContent = `Hallo, ${value}`;

    input.value = '';
}