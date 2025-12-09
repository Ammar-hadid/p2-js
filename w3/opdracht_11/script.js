const budgetMessage = document.getElementById('budget-message')

let budget = 110;
const product = 60;

if (budget >= product) {
    budgetMessage.textContent = 'Je hebt genoeg geld';
    budgetMessage.style.color = 'green';
} else {
    budgetMessage.textContent = 'Helaas, te weinig geld';
    budgetMessage.style.color = 'red';
}