var highScoresList = document.getElementById("highscores");
var clearBtn = document.querySelector("#clear");

function clearLocalStorage() {
    //clear scores from local storage on a button press
    localStorage.clear();
    // sets highscores text content to empty.
    highscores.textContent = ""
};

// event listener to clear local storage upon a Clear Highscores click.
clearBtn.addEventListener("click", clearLocalStorage);

// Get the high scores stored in local storage
var storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];


// For Loop that goes through the local storage high scores array
for (var i = 0; i < storedHighScores.length; i++) {
  // Creates a list item for each high score
  var highScoreItem = document.createElement("li");
//each list items text content is set to the locally stored user + ": " and the score.
  highScoreItem.textContent = storedHighScores[i].user + ": " + storedHighScores[i].score;
  console.log(storedHighScores[i].user + ": " + storedHighScores[i].score);
  // Append each of the created list item to the highscores ordered list
  highScoresList.appendChild(highScoreItem);
}


