const drinkMessage = document.getElementById('drink-message');
const drink = prompt('Wat wil je drinken? cola, water of koffie');

if (drink === 'cola') {

    drinkMessage.textContent = 'Je krijgt een blikje cola 🥤';
    drinkMessage.style.color = 'red';

} else if (drink === 'koffie') {

    drinkMessage.textContent = 'Energie incoming ☕';
    drinkMessage.style.color = 'brown';

} else if (drink === 'water') {

    drinkMessage.textContent = 'Goed bezig, lekker gezond 💧';
    drinkMessage.style.color = 'blue';
} else {

    drinkMessage.textContent = 'Dat drankje is helaas op';
}