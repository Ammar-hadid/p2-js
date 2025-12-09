const ageMessage = document.getElementById('age-message');

let age = 20

if (age >= 18 && age < 65 ) {
    ageMessage.textContent = 'Welkom, volwassen bezoeker!';
    ageMessage.style.color = 'green';
} else if (age >= 65) {
    ageMessage.textContent = 'Welkom, senior bezoeker!';
    ageMessage.style.color = 'blue';
} else {
    ageMessage.textContent = 'Je mag hier nog niet naar binnen.';
    ageMessage.style.color = 'red';
}