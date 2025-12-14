let count = 0;

const dialog = document.querySelector('dialog');
const counter = document.getElementById('counter');
document.addEventListener('click', e => {

    if (e.target.id === 'increment') {        
        increment();

    } else if (e.target.id === 'reset' || e.target.id === 'play-again') {
    reset();
    }

    else if (e.target.closest('#close-btn')) {
        dialog.close();
    }
})

function increment() {
    if (count >= 0) {
        count ++;
        counter.textContent = count.toString().padStart(2, '0');
    }

    if (count === 10) {
        dialog.showModal()
    }

    renderMessage();
}

function reset() {
    count = 0;
    counter.textContent = count.toString().padStart(2, '0');

    if (dialog.open) {
        dialog.close()
    }

    renderMessage();
}

function renderMessage() {
    const message = document.getElementById('message');
    const result = getResult(count);

    message.className = 'hidden'

    if (result) {
        message.textContent = result.text;
        message.className = `${result.className} visible`
    }
    
}

function getResult(number) {
    if (number > 0 && number <= 2) {
        return {
                text: 'Hey, a pizza! That’s a start.',
                className: 'level-1'
            }

    } else if (number >= 3 && number <= 4) {
        return {
                text: 'This is starting to smell good.',
                className: 'level-2'
            }

    } else if (number >= 5 && number <= 6) {
        return {
                text: 'This is getting serious....',
                className: 'level-3'
        }

    } else if (number >= 6 && number <= 8) {
        return {
                text: 'That’s a solid pizza count.',
                className: 'level-4'
        }

    } else if (number === 9) {
        return {
                text: 'One more and something big might happen...',
                className: 'level-5'
        }

    } else if (number >= 11 && number <= 15) {
        return {
                text: 'Still going? I respect the dedication...',
                className: 'level-6'
        }

    } else if (number >= 25 && number <= 30) {
        return {
                text: 'At this point you should open a pizzeria',
                className: 'level-7'
        }

    } else if (number >= 50 && number <= 55) {
        return {
                text: 'You’re still clicking, hoping I’ll say something new. I won’t.',
                className: 'level-8'
        }

    } else if ( number >= 100 && number <= 105) {
        return {
                text: '100 pizzas. I’m genuinely impressed. Also slightly concerned.',
                className: 'level-9'
        }

    } else if (number >= 1000) {
        return {
                text: '1000 pizzas… alright. There is no secret ending. Congrats on wasting 5 minutes of your life..',
                className: 'level-10'
        }
    }
        
}

console.log(getResult(5))