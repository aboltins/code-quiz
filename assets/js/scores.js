var highScores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

function clearLocalStorage() {
    //clear scores from local storage on a button press
    localStorage.clear();
    // sets highscores text content to empty.
    highscores.textContent = ""
};

// event listener to clear local storage upon a Clear Highscores click.
clearBtn.addEventListener("click", clearLocalStorage);


