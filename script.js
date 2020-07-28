//grab selectors from html file
var TimerEL = document.querySelector("#timer");
var quizScreen = document.querySelector("#questions-page");
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen");
var answerButton = document.querySelector("#answer-button");
var totalScore = document.querySelector("#score-total");
var initials = document.querySelector("#initials-input");
var submitButton = document.querySelector("#submit-button");
var goBack = document.querySelector("#go-back");
var questionIndex = 0;
var submitHighScores = document.querySelector("#submit-high-scores");
var questionsDiv = document.querySelector("#questions")
var timerDisplay = document.querySelector("#timer-display")
var highScorePage = document.querySelector("#high-scores")



//event listener for start game button
startButton.addEventListener("click", startGame)


//set timer to start at 75 second
var secondsLeft = 75;

//make function called setTimer
function setTimer() {
  var timerInterval = setInterval(function() {
    //decrement the seconds
    secondsLeft--;
    //set the text content of timerEl 
    timerDisplay.textContent = secondsLeft;
    
if(secondsLeft <=0) {
    clearInterval(setTimer);
    scorePage();
} else {
    time--;  
}
  }, 1000);
}

function startGame() {
    startScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "start");
    nextQuestion();
    setTimer();
}


//create function to show questions
function nextQuestion() {
    var question = questionsArr[questionIndex]
    questionIndex++;
    questionsDiv.textContent = questionsArr.question
//loop through answers and answer create buttons
question.answers.forEach(function(answer) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("vlaue", answer.correct);
    button.textContent = answer.text;
    answersDiv.appendChild(button);
    button.addEventListener("click", selectAnswer)
    answerButton.appendChild(button);
});
questionIndex++


    //questions array
questionsArr = [
    {
        question: "What does the DOM stand for?",
        answers: {
            text: "1. Document Object Method", correct: false,
            text: "2. Docment Object Material", correct: false,
            text: "3. Document Object Model", correct: true,
            text: "4. Document Open Model", correct: false,
        }
    },
    {
        question: "Which of these keywords is not a correct way of defining a variable?",
        answers: {
            text: "1. let", correct: false,
            text: "2. var", correct: false,
            text: "3. const", correct: false,
            text: "4. object", correct: true,
        }
    },

    {
        question: "Function are called using which symbol?",
        answers: {
            text: "1. brackets", correct: false,
            text: "2. curly braces", correct: false,
            text: "3. parentheses", correct: true,
            text: "4. caret", correct: false,
        }
    },

    {
        question: "If/else statements are categorized as:",
        answers: {
            text: "1. an array", correct: false,
            text: "2. a loop", correct: false,
            text: "3. conditionals", correct: true,
            text: "4. objects", correct: false,
        }
    }      
]

//hide questions page and show results page
function scorePage(){
quizScreen.setAttribute("class", "hide");
highScorePage.setAttribute("class", "start");
}

//create event function and event listener for correct and incorrect questions
function correctAnswer() {
    
}


//text content for "your final score is"

//event listener for submit initials button

//event listeners for go back + clear highscore buttons

//add ten seconds to timer when there's a wrong answer
