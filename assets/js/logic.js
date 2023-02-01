var startBtn = document.querySelector("#start");
var btn = document.querySelector("button");
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.getElementById("questions").style.display = "block";
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var highScores = [];
var initials = document.getElementById("initials");
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

    firstGame();
}

//end the game function
function endGame() {
    questions.style.display = "none";
    endScreen.style.display = "block";
    timeLeft = 1;
    endScreen.addEventListener("click", function (event) {
        if (event.target.id === "submit") {
            window.location.href = "highscores.html";
        }
    })
}

// countdown function with the time left var.
var timeLeft = 76;
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0 || timeLeft < 0) {
            // stops execution of action at set interval
            clearInterval(timeInterval);
            // calls the end game function.
            endGame();
        }
    }, 1000);
}

// create an ol and buttons for the questions, then append them.
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
    li2.textContent = allQuestions[0].givenChoices[1]; // correct answer.
    li3.textContent = allQuestions[0].givenChoices[2];
    li4.textContent = allQuestions[0].givenChoices[3];

    choices.addEventListener("click", function (event) {
        if (event.target !== li2) {
            timeLeft = timeLeft - 10;
        }
        secondGame();
    });
}
// second Game function
function secondGame() {
    question.textContent = allQuestions[1].givenQuestion;
    li.textContent = allQuestions[1].givenChoices[0]; // correct answer.
    li2.textContent = allQuestions[1].givenChoices[1];
    li3.textContent = allQuestions[1].givenChoices[2];
    li4.textContent = allQuestions[1].givenChoices[3];

    choices.addEventListener("click", function (event) {
        if (event.target !== li) {
            timeLeft = timeLeft - 10;
        }
        thirdGame();

    });
}
// third Game function
function thirdGame() {
    question.textContent = allQuestions[2].givenQuestion;
    li.textContent = allQuestions[2].givenChoices[0];
    li2.textContent = allQuestions[2].givenChoices[1];
    li3.textContent = allQuestions[2].givenChoices[2];
    li4.textContent = allQuestions[2].givenChoices[3]; // correct answer.

    finalScore.textContent = timeLeft;
    choices.addEventListener("click", function (event) {
        if (event.target !== li4) {
            timeLeft = timeLeft - 10;
        }
        endGame();
    });

}

