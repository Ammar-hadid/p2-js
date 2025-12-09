const heading = document.getElementById('budget-message');
const productValue = Number(prompt('Hoeveel kost het product dat je wilt kopen?'));

let budget = 100;

if (productValue > budget) {
    heading.textContent = 'Helaas, niet genoeg geld!';
    heading.style.color = 'red';
} else {
    heading.textContent = 'U hebt genoeg geld!';
    heading.style.color = 'green';
}