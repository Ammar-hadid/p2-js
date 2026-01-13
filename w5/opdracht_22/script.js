const snackList = document.getElementById('snack-list');
const totalSnacks = document.getElementById('total-snacks');
const input = document.querySelector('input[type="text"]');

const snacks = [];

document.addEventListener('click', e => {
    if (e.target.id === 'add-button') {
        addSnack();
    } else if (e.target.id === 'remove-button') {
        removeLastAddedSnack();
    }
})

function addSnack() {
    const value = input.value.trim();

    if (!value) return

    snacks.unshift(value);

    renderList();
    
    input.value = '';
}

function removeLastAddedSnack() {
    
    if (snacks.length < 1) return

    snacks.shift();
    renderList()
}

function renderList() {
    let snackListHtml = '';

    for (const snack of snacks) {
        snackListHtml += `<li>${snack}</li>`
    }

    snackList.innerHTML = snackListHtml;
}