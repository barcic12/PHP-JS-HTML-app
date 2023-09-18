var minutes = 0;
var seconds = 0;
var intervalId;
var isPlay = false;
function startTimer() {
  if (!isPlay) {
    isPlay = true;
    intervalId = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  if (isPlay) {
    clearInterval(intervalId);
    isPlay = false;
  }
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  document.getElementById("time").textContent = "00:00";
}

function updateTimer() {
  seconds += 1;
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  var timerDisplay =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
  document.getElementById("time").textContent = timerDisplay;
}
