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

//start quiz function
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
    console.log(finalScore);
    endScreen.addEventListener("click", function (event) {
        // if the target of the click is submit button only and the initials input field is not empty, then execute below code
        if (event.target.id === "submit" && initials.value !== "") {
            // get the stored high scores from local storage
            var storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

            // Stores both the user and score together as one object.
            var userScore = {
                user: initials.value,
                score: finalScore.textContent
            };

            // Check if the same score already exists in the stored array
            var scoreExists = false;
            for (var i = 0; i < storedHighScores.length; i++) {
                if (storedHighScores[i].score === userScore.score) {
                    scoreExists = true;
                    break;
                }
            }

            // Add the new user score to the stored high scores array if it doesn't already exist
            if (!scoreExists) {
                storedHighScores.push(userScore);
            }

            // Store the updated high scores in local storage
            localStorage.setItem("highScores", JSON.stringify(storedHighScores));

            // directs to highscores.html page.
            window.location.href = "highscores.html";
        }
    });
}

// countdown function with the time left variable.
var timeLeft = 11;
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

// creates an ol and buttons for the questions, then appends them.
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

    // adds click event
    choices.addEventListener("click", firstGameClick);
}

function firstGameClick(event) {
    // if the clicked is not li2 then take 10 seconds off
    if (event.target !== li2) {
        timeLeft = timeLeft - 10;
    }
    // removes above click event as only needed once
    choices.removeEventListener("click", firstGameClick);
    // finalscore is whatever the time is left in this case it would be zero if times out.
    finalScore.textContent = timeLeft;
    // calls the next game
    secondGame();
}

// second Game function
function secondGame() {
    question.textContent = allQuestions[1].givenQuestion;
    li.textContent = allQuestions[1].givenChoices[0]; // correct answer.
    li2.textContent = allQuestions[1].givenChoices[1];
    li3.textContent = allQuestions[1].givenChoices[2];
    li4.textContent = allQuestions[1].givenChoices[3];

    choices.addEventListener("click", secondGameClick);
}

function secondGameClick(event) {
    if (event.target !== li) {
        timeLeft = timeLeft - 10;
    }
    choices.removeEventListener("click", secondGameClick);
    finalScore.textContent = timeLeft;
    thirdGame();
}

// third Game function
function thirdGame() {
    question.textContent = allQuestions[2].givenQuestion;
    li.textContent = allQuestions[2].givenChoices[0];
    li2.textContent = allQuestions[2].givenChoices[1];
    li3.textContent = allQuestions[2].givenChoices[2];
    li4.textContent = allQuestions[2].givenChoices[3]; // correct answer.


    choices.addEventListener("click", thirdGameClick);
}

function thirdGameClick(event) {
    if (event.target !== li4) {
        timeLeft = timeLeft - 10;
    }
    choices.removeEventListener("click", thirdGameClick);
    finalScore.textContent = timeLeft;
    fourthGame();
}

// fourth Game function
function fourthGame() {
    question.textContent = allQuestions[3].givenQuestion;
    li.textContent = allQuestions[3].givenChoices[0];
    li2.textContent = allQuestions[3].givenChoices[1];
    li3.textContent = allQuestions[3].givenChoices[2]; // correct answer.
    li4.textContent = allQuestions[3].givenChoices[3];


    choices.addEventListener("click", fourthGameClick);
}

function fourthGameClick(event) {
    if (event.target !== li3) {
        timeLeft = timeLeft - 10;
    }
    choices.removeEventListener("click", fourthGameClick);
    finalScore.textContent = timeLeft;
    // calls the end of the game function
    endGame();
}

