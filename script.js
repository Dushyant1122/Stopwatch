var timerBegan = null;
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null;
var flag = false;

document.querySelector('#start').addEventListener('click', () => {
    if(!flag){
        startTimer();
        flag = true;
    }else{
        stopTimer();
        flag = false;
    }
})

document.querySelector('#reset').addEventListener('click',()=>{
    resetTimer();
})

startTimer = ()=> {
    if(timerBegan === null)
    timerBegan = new Date();

    if(timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);

        startInterval = setInterval(clockRunning, 10);
}

stopTimer = () => {
    timeStopped = new Date();
    clearInterval(startInterval);
}

clockRunning = () => {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timerBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);

    document.querySelector('#timer_display').textContent = 
    (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds : seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

resetTimer = () => {
    clearInterval(startInterval);
    timerBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.querySelector('#timer_display').innerHTML = "00:00:00"
    flag = false;
}