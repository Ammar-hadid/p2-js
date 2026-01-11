const originalArr = document.getElementById('original-arr');
const updatedArr = document.getElementById('updated-arr');

const favorites = ['Eten', 'Slapen', 'Programmeren', 'Sporten', 'Lezen'];

originalArr.innerHTML = `
                        <li><strong>Eerste Item: </strong>${favorites[0]}</li>
                        <li><strong>Laatste Item: </strong>${favorites[favorites.length - 1]}</li>
                        <li><strong>Totale Items: </strong>${favorites.length}</li>
                        `;

favorites[0] = 'Gamen'

updatedArr.innerHTML = `
                        <li><strong>Eerste Item: </strong>${favorites[0]}</li>
                        <li><strong>Laatste Item: </strong>${favorites[favorites.length - 1]}</li>
                        <li><strong>Totale Items: </strong>${favorites.length}</li>
                        `;