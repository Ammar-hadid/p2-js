import {
    ramenBroth,
    ramenNoodles,
    ramenToppings,
    ramenSpiceLevel

} from './ramen.js';

document.addEventListener('click', e => {
    const ctaBtn = e.target.closest('#cta');

    if (ctaBtn) {
        renderBowl();
    }
})

function renderBowl(number) {
    const message = document.querySelector('p');

    if (!message) return;

    message.textContent = returnCompleteBowl();
}

function returnCompleteBowl() {
    const broth = pickRandomElement(ramenBroth);
    const noodles = pickRandomElement(ramenNoodles);
    const toppings = pickRandomElement(ramenToppings);
    const spiceLevel = pickRandomElement(ramenSpiceLevel);

    if (!broth || !noodles || !toppings || !spiceLevel) return;

    

    return `This bowl combines ${broth.emoji}${broth.name}(${broth.rating}) with ${noodles.emoji}${noodles.name}(${noodles.rating}), topped with ${toppings.emoji}${toppings.name}(${toppings.rating}) and finished with a ${spiceLevel.emoji}${spiceLevel.name}(${spiceLevel.rating}) spice level.`
}

function pickRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

