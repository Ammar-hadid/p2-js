const message = document.getElementById('emoji-message');

const emojiArr = ['😎', '🫡', '👍', '🙏', '🙌', '👌'];

document.addEventListener('click', e => {
    if (e.target.id =='displayEmojiBtn') {
        renderEmoji()
    }
})

function randomElementPicker(arr) {
    const index =  Math.floor( Math.random() * arr.length );
    return {emoji: arr[index], index: index}
}

function renderEmoji() {
    const result = randomElementPicker(emojiArr);
    message.classList.remove('animate');

    void message.offsetHeight;
    
    message.textContent = `${result.emoji} (${result.index})`
    message.classList.add('animate')
}