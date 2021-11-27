const questionIndex = 0;
const currentTime = 120000;
const currentScore = 0;

let introSection = document.getElementById("quizIntro");
let  quizSection = document.getElementById("questionaire");
let  startButton = document.getElementById("sartBtn");
let timerSelector = document.getElementById("timer");

let  quizQuestion = document.getElementById("quizH1");
let  quizOptA = document.getElementById("questLiA");
let  quizOptB = document.getElementById("questLiB");
let  quizOptC = document.getElementById("questLiC");
let  quizOptD = document.getElementById("questLiD");

let currentQuestion = questionArray[questionIndex].question;
let currentOptA = questionArray[questionIndex].optionsList[0];
let currentOptB = questionArray[questionIndex].optionsList[1];
let currentOptC = questionArray[questionIndex].optionsList[2];
let currentOptD = questionArray[questionIndex].optionsList[3];
let rightOpt = questionArray[questionIndex].answer;

// Function removing intro and populating questions
function generateQuestion() {
    //debugger
    introSection.toggleAttribute("visible");
    quizSection.toggleAttribute("invisibile");

    goThroughQuestion()
}

// Function to run through questions array
function goThroughQuestion() {
    for( let i = questionIndex; i < questionArray.length; i++){
        quizQuestion.textContent= currentQuestion;

        
        quizOptA.textContent= currentOptA;
        quizOptB.textContent= currentOptB;
        quizOptC.textContent= currentOptC;
        quizOptD.textContent= currentOptD;
        
    }

console.log(currentQuestion)
}

// Function to check if right answer selected
function rightAnswer() {
    if( rightOpt == true){
        let newScore = currentScore + 5;
        return
    } else {
       let newTime = currentTime - 10000;
       return
    }

}
// timer function
 function timer() {
     timerSelector.textContent = 'Timer: ' + newTime;
     
 }

// function to initate quiz
function startQuiz() {
    debugger;
    function generateQuestion()
    setInterval(timer, 120000);
}

// Event listener to activate start function
startButton.addEventListener("click", startQuiz() );