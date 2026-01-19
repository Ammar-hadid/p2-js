const message = document.getElementById('message');

const emojiArr = ['😎', '👍', '🙏', '😭', '💀', '👌'];

let index = 0;
let interval = null;

startLoop()
function startLoop() {
    interval = setInterval(renderEmoji, 500);
}

function renderEmoji() {
  message.textContent = emojiArr[index];
  message.classList.remove('animate');
  void message.offsetHeight;
  message.classList.add('animate');
  index++;

  if (index === emojiArr.length) {
    clearInterval(interval);

    setTimeout(() => {
      index = 0;
      startLoop();
    }, 500);
  }
}
