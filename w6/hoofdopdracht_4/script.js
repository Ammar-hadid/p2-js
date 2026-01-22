const timer = document.getElementById('timer');
const finishedSessionsMessage = document.getElementById('finished-sessions');
const loadingBar = document.querySelector('.loading-bar');
const AlarmSound = new Audio('./clock-alarm-8761.mp3')

let remainingSeconds = 25 * 60;
let totalSeconds = remainingSeconds;

let intervalId;
let isRunning = false;
let finishedSessions = 0;

document.addEventListener('click', e => {
    if (e.target.closest('.start')) startTimer()

    if (e.target.closest('.reset')) resetTimer()

    if (e.target.closest('.pause')) pauseTimer();

    if (e.target.closest('.s-break')) setBreak(5);

    if (e.target.closest('.m-break')) setBreak(10);

    if (e.target.closest('.l-break')) setBreak(15);

})

function formatTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const mm = String(minutes).padStart(2, '0');
    const ss = String(secs).padStart(2, '0');

    return `${mm}:${ss}`

}

function tick() {

    if (remainingSeconds <= 0) {
        stopTimer()
        showFinishScreen();
        return
    }

    remainingSeconds--
    render();
}

function startTimer() {
    if (isRunning) return
    
    if (remainingSeconds <= 0) {
        remainingSeconds = 25 * 60;
        totalSeconds = remainingSeconds;
        render();
    }

    isRunning = true;
    intervalId = setInterval(() => {
        tick();
        startLoadingBar(totalSeconds);
    }, 1000)
}

function pauseTimer() {
    stopTimer()
}

function resetTimer() {
    stopTimer();
    remainingSeconds = 60 * 25;
    totalSeconds = remainingSeconds;
    resetBar();
    render();
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
}

function render() {
    timer.textContent = formatTimer(remainingSeconds);
}



function showFinishScreen() {
    finishedSessions++
    finishedSessionsMessage.textContent = `${finishedSessions} finished sessions`;
    if(AlarmSound.currentTime !== 0) AlarmSound.currentTime = 0;
    AlarmSound.play();

    alert('finished')
}

function setBreak(minutes) {
    stopTimer();
    remainingSeconds = minutes * 60;
    totalSeconds = remainingSeconds;
    resetBar();
    render();
}


function startLoadingBar(totalTime) {
    const timeInPercentages = remainingSeconds * 100 / totalTime;

    loadingBar.style.setProperty('--progress', timeInPercentages);
}

function resetBar() {
    loadingBar.style.setProperty('--progress', 100);
}