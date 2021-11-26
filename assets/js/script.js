const questionIndex = 0;
const currentTime = 75000;
const currentScore = 0;
var currentQuestion = questionArray[index].question;
var startBtn = document.getElementById("startBtn");
var opAll = document.querySelector("ul");
var opA = document.querySelector("#A");
var opB = document.querySelector("#B");
var opC = document.querySelector("#C");
var opD = document.querySelector("#D");
var quizH1 = document.querySelector("h1");
var quizIntro = document.querySelector("p");
var quizQuestion = document.querySelector("h2");
var questionOpt = document.querySelector("ul");

function generatQuest() {
  debugger;

  quizH1.style.visibility = "hidden";
  quizIntro.style.visibility = "hidden";

  // for (let i = 0; i < questionArray.length; i++) {
  //   document.getElementById("quizQuestions").textContent = currentQuestion;
  // }
  // console.log(currentQuestion);
}

// function checksAnswer(event) {
//   var rightAns= questionArray[index].answer;

// }

// function initiateTimer() {

// }

// function

// function startQuiz() {
//   debugger;
//   askQuestion();
//   // initiateTimer();
// }
document.getElementById("generate").addEventListener("mousedown", generatQuest);
