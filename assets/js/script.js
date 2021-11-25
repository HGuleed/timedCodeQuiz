var index = 0;
var questionIndex = 0;
var currentTime = 75000;
var currentScore = 0;
var currentQuestion = questionArray[index].question;
var 

function askQuestion() {
  debugger;
  // var optionA = questionArray[index].optionsList[0];
  // var optionB = questionArray[index].optionsList[1];
  // var optionC = questionArray[index].optionsList[2];
  // var optionD = questionArray[index].optionsList[3];
  // var startButton = document.getElementById("startBtn");
  // var options = document.createElement("li");
  // var populateOp = document.createTextNode();
  document.getElementById("title").textContent = "";

  document.getElementById("intro").textContent = "";

  for (let i = index; i < questionArray.length; i++) {
    document.getElementById("quizQuestions").textContent = currentQuestion;
  }
  console.log(currentQuestion);
}

// function checksAnswer(event) {
//   var rightAns= questionArray[index].answer;

// }

// function initiateTimer() {

// }

// function

function startQuiz() {
  debugger;
  askQuestion();
  // initiateTimer();
}
document.getElementById("generate").addEventListener("mousedown", askQuestion);
