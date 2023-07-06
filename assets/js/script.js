const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
console.log(answers);

let currentQuestion = {};
let correctAnswers = true;
let availableQuestions = [];
const scorePoints = 100;
const maxQuestions = 10;