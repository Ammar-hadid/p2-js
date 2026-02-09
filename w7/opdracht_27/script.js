import {poke} from './poke.js'
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const screens = [startScreen, endScreen];


document.addEventListener('click', e => {
    const startBtn = e.target.closest('#cta');
    const endScreenBtn = e.target.closest('#return-btn');

    if (startBtn) {
        renderPoke(poke)
    }

    else if (endScreenBtn) {
        showScreen(startScreen)
    }
})

function showScreen(screen) {
    screens.forEach (s => {
        s.classList.add('hidden');
    })

    screen.classList.remove('hidden');
}


function pickRandomPoke(arr) {
    if (!arr) return;

    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function returnCardHTML(arr) {
    const pokeObj = pickRandomPoke(arr);

    if (!pokeObj) return;



    return {
            html: `<img src="${pokeObj.image}">

                    <div class="pokedata">
                        <p>${pokeObj.name}</p>
                        <ul>
                            <li><span>Type:</span> ${pokeObj.type}</li>
                            <li><span>power level:</span> ${pokeObj.powerLevel}</li>
                        </ul>
                    </div>`,

            pokeColor: pokeObj.color
            };
}

function renderPoke(arr) {
    const pokeCard = document.querySelector('.card');
    const pokeObj = returnCardHTML(arr);
    const pokeHTML = pokeObj.html;
    const pokeColor = pokeObj.pokeColor;

    pokeCard.innerHTML = pokeHTML;
    showScreen(endScreen);
    pokeCard.classList.add('animate');

    document.documentElement.style.setProperty('--poke-color', pokeColor)
}

