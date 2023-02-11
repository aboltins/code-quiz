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
var feedback = document.getElementById("feedback");

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

// countdown function with the time left variable.
var timeLeft = 76;
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0 || timeLeft < 0) {
            // stops execution of action at set interval
            clearInterval(timeInterval);
            // calls the end game function
            endGame();
        }
        // interval at how many miliseconds timer counting down
    }, 1000);
}

// function that displays the feedback bar for 1.2 seconds, the argument is filled at
// each game function and its either "correct!" or "wrong!" .

function feedbackPopUp(correctOrWrong) {
    feedback.style.display = "block";
    feedback.textContent = correctOrWrong;
    setTimeout(function () {
        feedback.style.display = "none";
        feedback.textContent = "";
    }, 1200);
}

function correctAudio() {
    var audio = new Audio("assets/sfx/correct.wav");
    audio.play();
}

function incorrectAudio() {
    var audio = new Audio("assets/sfx/incorrect.wav");
    audio.play();
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


// ALL 5 GAME FUNCTIONS BELOW


// first Game function
function firstGame() {
    question.textContent = allQuestions[0].givenQuestion;
    li.textContent = allQuestions[0].givenChoices[0];
    li2.textContent = allQuestions[0].givenChoices[1]; // correct answer.
    li3.textContent = allQuestions[0].givenChoices[2];
    li4.textContent = allQuestions[0].givenChoices[3];

    // finalscore will be 0 unless user makes it to game 4 and submits
    // where finalscore will be the time left.
    finalScore.textContent = 0;

    // adds click event
    choices.addEventListener("click", firstGameClick);
}

function firstGameClick(event) {
    // if the clicked is not li2 then take 10 seconds off
    if (event.target !== li2) {
        timeLeft = timeLeft - 10;
        feedbackPopUp("Wrong!");
        incorrectAudio();
    } else {
        feedbackPopUp("Correct!");
        correctAudio();
    }
    // removes above click event from executing again
    choices.removeEventListener("click", firstGameClick);
    // calls the next game
    secondGame();
}

// second Game function
function secondGame() {
    // feedback.style.display = "none";
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
        feedbackPopUp("Wrong!");
        incorrectAudio();
    } else {
        feedbackPopUp("Correct!");
        correctAudio();
    }
    choices.removeEventListener("click", secondGameClick);
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
        feedbackPopUp("Wrong!");
        incorrectAudio();
    } else {
        feedbackPopUp("Correct!");
        correctAudio();
    }
    choices.removeEventListener("click", thirdGameClick);
    fourthGame();
}

// fourth Game function
function fourthGame() {
    question.textContent = allQuestions[3].givenQuestion;
    li.textContent = allQuestions[3].givenChoices[0]; // correct answer.
    li2.textContent = allQuestions[3].givenChoices[1];
    li3.textContent = allQuestions[3].givenChoices[2];
    li4.textContent = allQuestions[3].givenChoices[3];

    choices.addEventListener("click", fourthGameClick);
}

function fourthGameClick(event) {
    if (event.target !== li) {
        timeLeft = timeLeft - 10;
        feedbackPopUp("Wrong!");
        incorrectAudio();
    } else {
        feedbackPopUp("Correct!");
        correctAudio();
    }
    choices.removeEventListener("click", fourthGameClick);
    fifthGame();
}

// fourth Game function
function fifthGame() {
    question.textContent = allQuestions[4].givenQuestion;
    li.textContent = allQuestions[4].givenChoices[0];
    li2.textContent = allQuestions[4].givenChoices[1];
    li3.textContent = allQuestions[4].givenChoices[2]; // correct answer.
    li4.textContent = allQuestions[4].givenChoices[3];

    choices.addEventListener("click", fifthGameClick);
}

function fifthGameClick(event) {
    if (event.target !== li3) {
        timeLeft = timeLeft - 10;
        feedbackPopUp("Wrong!");
        incorrectAudio();
    } else {
        feedbackPopUp("Correct!");
        correctAudio();
    }
    choices.removeEventListener("click", fifthGameClick);

    // if time left is less than 0 (in situation where there are less than 10 seconds
    // remaining and the user selects the wrong answer) then the finalscore is 0, otherwise
    // finalscore is the time left)
    if (timeLeft < 0) {
        finalScore.textContent = 0;
    } else {
        finalScore.textContent = timeLeft;
    }
    // calls the end of the game function
    endGame();
}

//end the game function
function endGame() {
    // irrespective of what time was left at the end of the game, the timer will show 0.
    timeLeft = 1;
    // hides questions and shows the endScreen
    questions.style.display = "none";
    endScreen.style.display = "block";
    endScreen.addEventListener("click", function (event) {
        // if the target of the click is submit button only and the initials input field is not empty
        // and also The /^[a-zA-Z]{1,4}$/ regular expression checks if the value of initials contains only
        //  letters and is between 1 and 4 characters in length. The .test() method returns a boolean 
        // indicating whether the regular expression matches the string. (Found the /^[a-zA-Z]{1,4}$/ and test method on stackoverflow). 
        if (event.target.id === "submit" && initials.value !== "" && /^[a-zA-Z]{1,4}$/.test(initials.value)) {
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

