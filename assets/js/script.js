var index = 0;
var currentTime = 75000;
var currentScore = 0;

function startQuiz() {
  askQuestion();
  initiateTimer();
}
document.getElementById("generate").addEventListener("mousedown", startQuiz);

function askQuestion() {
  var currentQuestion = questionArray[index];
  document.getElementById("quizQuestions").textContent = getQuestion.question;

}
function checksAnswer(event) {
  var rightAns= questionArray[index].answer;
  if ( ==rightAns )

}

function initiateTimer() {

}

function 
