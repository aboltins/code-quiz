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
    firstGame();
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

// create an ol and buttons for the questions.
var ol = document.createElement("ol");
var li = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");

ol.appendChild(li);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);

choices.appendChild(ol);

// first Game function
function firstGame() {
    question.textContent = allQuestions[0].givenQuestion; 
    li.textContent = allQuestions[0].givenChoices[0];
    li2.textContent = allQuestions[0].givenChoices[1];
    li3.textContent = allQuestions[0].givenChoices[2];
    li4.textContent = allQuestions[0].givenChoices[3];
    choices.addEventListener("click", function(event){
        secondGame();
        if(event.target = li2){
        }
    });
}
// second Game function
function secondGame() {
    question.textContent = allQuestions[1].givenQuestion; 
    li.textContent = allQuestions[1].givenChoices[0];
    li2.textContent = allQuestions[1].givenChoices[1];
    li3.textContent = allQuestions[1].givenChoices[2];
    li4.textContent = allQuestions[1].givenChoices[3];
    choices.addEventListener("click", function(event){
        thirdGame();
        if(event.target = li2){
        }
    });
}
// third Game function
function thirdGame() {
    question.textContent = allQuestions[2].givenQuestion; 
    li.textContent = allQuestions[2].givenChoices[0];
    li2.textContent = allQuestions[2].givenChoices[1];
    li3.textContent = allQuestions[2].givenChoices[2];
    li4.textContent = allQuestions[2].givenChoices[3];
}

