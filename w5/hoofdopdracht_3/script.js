import {outcomes} from './outcomes.js';

const mainScreen = document.querySelector('.main-screen');
const resultScreen = document.querySelector('.result-screen');
const screens = [mainScreen, resultScreen];

const input = document.getElementById('question')

const resultMessage = document.getElementById('message');

const resultCard = document.getElementById('result-card');
const resultHeading = document.getElementById('result-heading');

let remainingOutcomes = [...outcomes];

document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');


    if (btn) {
        const action = btn.dataset.action;

        if (action === 'reveal') {
            renderOutcome();
        } 

        else if (action === 'reset') {
            returnToMain();
        }
    }

})

function showScreen(screen) {
    screens.forEach(s => {
        s.classList.add('hidden');
    })

    screen.classList.remove('hidden')
}



function pickOutcome() {

    if (remainingOutcomes.length === 0) {
        remainingOutcomes = [...outcomes];
    }


    const index = Math.floor( Math.random() * remainingOutcomes.length);

    const outcome = remainingOutcomes[index];

    remainingOutcomes.splice(index, 1);

    return outcome
}


function renderOutcome() {

    if (input.value.trim() === '') {
        alert('Take a moment and enter a question.');
        return;
    }

    const outcomeObj = pickOutcome();

    if (!outcomeObj) return;

    resultMessage.textContent = outcomeObj.text;
    updateStatus(outcomeObj.status);

    showScreen(resultScreen);

}

function updateStatus(status) {
    resultCard.className = 'card';
    resultHeading.className = '';

    if (status === 'positive') {
        resultCard.classList.add('positive');
        resultHeading.classList.add('positive')
    }

    else if (status === 'negative') {
        resultCard.classList.add('negative');
        resultHeading.classList.add('negative')
    }
}

function returnToMain() {
    input.value = '';
    showScreen(mainScreen);
}