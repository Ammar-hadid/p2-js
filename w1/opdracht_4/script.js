const userAge = 2025 - prompt('Welke jaar ben je geboren?');
const userAgeMessage = document.getElementById('birth-year');


userAgeMessage.innerHTML = `Je bent ongeveer ${userAge} jaar oud`;

console.log(userAge)