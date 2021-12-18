let introSection = document.getElementById("quizIntro");
let quizSection = document.getElementById("questionaire");

let questionIndex = 0;
let currentTime = 120000;
let currentScore = 0;

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
  let currentQuestion = questionArr[questionIndex].question;
  let currentOptA = questionArr[questionIndex].optionsList[0];
  let currentOptB = questionArr[questionIndex].optionsList[1];
  let currentOptC = questionArr[questionIndex].optionsList[2];
  let currentOptD = questionArr[questionIndex].optionsList[3];

  let valueOptA = document.getElementById("ansLiA").value;
  let valueOptB = document.getElementById("ansLiB").value;
  let valueOptC = document.getElementById("ansLiC").value;
  let valueOptD = document.getElementById("ansLiD").value;

  quizQuestion.textContent = currentQuestion;

  quizOptA.textContent = currentOptA;
  quizOptB.textContent = currentOptB;
  quizOptC.textContent = currentOptC;
  quizOptD.textContent = currentOptD;
}

// console.log(currentQuestion)
$(".answer").on("click", answerCheck);

function answerCheck() {
  // debugger;
  let userSelection = $(this).val();
  let rightOpt = questionArr[questionIndex].answer;
  let questionBox = $("#questionaire");

  if (userSelection == rightOpt) {
    questionBox.addClass("rightAns");
    currentScore = currentScore + 10;
    console.log(currentScore);
  } else {
    questionBox.addClass("wrongAns");
    currentTime = currentTime - 6000;
  }
  if (questionIndex > 9) {
    displayHS();
  }
  setTimeout(function () {
    questionBox.attr("class", "");
    questionIndex = questionIndex + 1;
    goThroughQuestion();
  }, 1000);
}

// setTimeout(, currentTime);
function displayHS() {
  var hSDisplay = document.createElement("p");
  $("hScoreDisplay").append(hSDisplay);
  hSDisplay.textContent = "Your score out of 100" + currentScore;
}

// store and display highscore
// function storeHScore() {
//   localStorage.setItem("score", "currentScore");
// }
// function displayHScore(){
//   $('hScoreBox').append('')
//   let hScoreBox = document.createElement('p')
// }

// // function to initate quiz
function startQuiz() {
  // debugger;
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
  $("#timer").textContent = currentTime;

  goThroughQuestion();

  // timer();
}

// // Event listener to activate start function
startButton.onclick = startQuiz;
