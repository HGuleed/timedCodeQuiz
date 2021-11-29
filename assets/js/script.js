let introSection = document.getElementById("quizIntro");
let quizSection = document.getElementById("questionaire");

const questionIndex = 0;
const currentTime = 120000;
const currentScore = 0;

let startButton = document.getElementById("startBtn");
let timerSelector = document.getElementById("timer");
let questionArr = questionArray;

let quizQuestion = document.getElementById("quizH2");
let quizOptA = document.getElementById("ansLiA");
let quizOptB = document.getElementById("ansLiB");
let quizOptC = document.getElementById("ansLiC");
let quizOptD = document.getElementById("ansLiD");

// Function to run through questions array
function goThroughQuestion() {
  debugger;
  for (let i = 0; i < questionArr.length; i++) {
    let currentQuestion = questionArr[i].question;
    let currentOptA = questionArr[i].optionsList[0];
    let currentOptB = questionArr[i].optionsList[1];
    let currentOptC = questionArr[i].optionsList[2];
    let currentOptD = questionArr[i].optionsList[3];
    let rightOpt = questionArr[i].answer;

    quizQuestion.textContent = currentQuestion;

    quizOptA.textContent = currentOptA;
    quizOptB.textContent = currentOptB;
    quizOptC.textContent = currentOptC;
    quizOptD.textContent = currentOptD;
    console.log(currentOptA);
  }
}

// console.log(currentQuestion)
// }

// // Function to check if right answer selected
// function rightAnswer() {
//     if( rightOpt == true){
//         let newScore = currentScore + 5;
//         return
//     } else {
//        let newTime = currentTime - 10000;
//        return
//     }

// }

function timer() {
  timerSelector.textContent = "Timer: " + newTime;
  set;
}

// function to initate quiz
function startQuiz() {
  // debugger;
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");

  goThroughQuestion();

  timer();
}

// Event listener to activate start function
startButton.onclick = startQuiz;
