var startBtn = document.querySelector("#start");
var btn = document.querySelector("button");
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.getElementById("questions").style.display = "block";
questions.style.display = "none";

//start function
startBtn.addEventListener("click", function () {
    startGame();
    countdown();
});

//start the game function
function startGame() {
    startScreen.style.display = "none";
    questions.style.display = "inherit";
    // questionsScreen.style.display = "block";
    getQuestions();
}

//end the game function
function endGame() {

}

// countdown function with the time left var.
var timeLeft = 76;
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            // stops execution of action at set interval
            clearInterval(timeInterval);
            // calls the end game function.
            endGame();
        }
    }, 1000);
}

// // Get questions function with a for loop to iterate over questions.
// function getQuestions (){
function getQuestions(){
    for (var i = 0; i < allQuestions.length; i++) {
        var currentQuestion = allQuestions[i];
    
        question.textContent = currentQuestion.givenQuestion;
    
        var currentChoices = currentQuestion.givenChoices;
        choices.innerHTML = "";
        for (var j = 0; j < currentChoices.length; j++) {
            var choice = currentChoices[j];
            var choiceButton = document.createElement("button");
            choiceButton.textContent = choice;
            choices.appendChild(choiceButton);
        }
    }
}


