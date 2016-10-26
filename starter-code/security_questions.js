console.log("security_questions.js loaded");
var securityQuestions = [
  {question: "What was the name of your first pet?",
   expectedAnswer: "Casper"},
  {question: "What is your mother's maiden name?",
   expectedAnswer: "Kim"},
  {question: "Who is your favorite sports team?",
   expectedAnswer: "Warriors"}
]

for (i=0; i<securityQuestions.length; i++){
  var userAnswer = prompt(securityQuestions[i].question);
  if (securityQuestions[i].expectedAnswer !== userAnswer){
    window.alert('You have answered incorrectly');
    break;
  }
}
