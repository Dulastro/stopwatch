let timeBegan = null;
let timeStopped = null;
let stopperDuration = 0;
let startInterval = null;
let flag = false;

const timerConatainer = document.getElementsByClassName("time-container")[0];

timerConatainer.addEventListener("click", function () {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});
timerConatainer.addEventListener('dblclick',function(){
    resetTimer()
})
function startTimer() {
  if (timeBegan === null) timeBegan = new Date();
  if (timeStopped !== null) stopperDuration += new Date() - timeStopped;
  startInterval = setInterval(clockRunning, 10)
}

function stopTimer() {
    timeStopped =null
    clearInterval(startInterval)
}


function clockRunning(){
    let currentTime = new Date()
    let timeElapsed = new Date(currentTime - timeBegan - stopperDuration)

    let minutes = timeElapsed.getUTCMinutes()
    let seconds = timeElapsed.getUTCSeconds()
    let milliseconds = timeElapsed.getUTCMilliseconds()

    milliseconds = Math.floor(milliseconds/10)

    document.getElementById('timer-display').innerHTML = (minutes =minutes <10 ? '0' + minutes:minutes) + ':' +
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ':' +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds)
}

function resetTimer(){
    clearInterval(startInterval)
    timeBegan = null
    timeStopped = null
    stopperDuration = 0
    document.getElementById('timer-display').innerHTML = '00:00:00'

    flag = false
}