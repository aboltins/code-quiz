var startBtn = document.querySelector("#start");
var time = document.querySelector("#time");

startBtn.addEventListener("click", function () {
    countdown();
});

var timeLeft = 76;

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;

   if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      // Calls function to create and append image
  }
  }, 1000);
}
