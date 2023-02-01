let questions = document.querySelector("#questions");
let question = document.querySelector("#question-title");
let choices = document.querySelector("#choices");

let allQuestions = [
    {    
    givenQuestion: "Which operator is used to assign a value to a variable?",    
    givenChoices: ["*", "=", "-", "+"],
    correct: "="
},
{
    givenQuestion: "Which event occurs when the user clicks on an HTML element?",
    givenChoices: [
        "onclick",
        "onmouseover",
        "onchange",
        "onmouseclick" 
    ],
    correct: "onclick"
},
{
    givenQuestion: "How does a FOR loop start?",
    givenChoices: [
        "for i = 1 to 5",
        "for (i <= 5; i++)",
        "for i = 1 to 5",
        "for (i = 0; i <= 5; i++)"
    ],
    correct: "for (i = 0; i <= 5; i++)"

}

];




