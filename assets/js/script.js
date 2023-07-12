const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a')
const option2 = document.getElementById('b')
const option3 = document.getElementById('c')
const option4 = document.getElementById('d')
const nextBtn = document.getElementById('next-btn')
const scoreCounter = document.getElementById('scoreCounter');
let runningQuestion = 0
let score = 0

// to keep track of question number
var q = 0

function displayQuestion(clicked_option = "") {
    console.log(questions.length)
    // add the value of each question to the questionText tag
    if (clicked_option != "") {
        clicked_option.style.backgroundColor = ""
    }
    questionText.innerHTML = questions[q].question
    option1.innerHTML = questions[q].choice1
    option2.innerHTML = questions[q].choice2
    option3.innerHTML = questions[q].choice3
    option4.innerHTML = questions[q].choice4
}

// nextBtn.addEventListener('click', function () {

// })

displayQuestion()

function checkAnswer(selected_answer) {
    clicked_option = document.getElementById(selected_answer).parentNode
    if (selected_answer === questions[q].answer) {
        clicked_option.style.backgroundColor = 'green';
        score++;
        console.log("Score: ", score);
        scoreCounter.innerHTML = score;
    } else {
        clicked_option.style.backgroundColor = 'red';
    }
    q++;
    setTimeout(function () {
        displayQuestion(clicked_option);
    }, 2000)



}