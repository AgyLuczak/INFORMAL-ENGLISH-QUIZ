const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a')
const option2 = document.getElementById('b')
const option3 = document.getElementById('c')
const option4 = document.getElementById('d')
const nextBtn = document.getElementById('next-btn')
let runningQuestion = 0

// to keep track of question number
var q = 0

function displayQuestion() {
    console.log(questions.length)
    // add the value of each question to the questionText tag

    questionText.innerHTML = questions[q].question
    option1.innerHTML = questions[q].choice1
    option2.innerHTML = questions[q].choice2
    option3.innerHTML = questions[q].choice3
    option4.innerHTML = questions[q].choice4
}

nextBtn.addEventListener('click', function () {
    q++;
    displayQuestion();
})

displayQuestion()

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundfColor = green;
}

function answerIsWrong(option) {
    document.getElementById(runningQuestion).style.backgroundColor = red;
}

function checkAnswer(selected_answer) {

    if (selected_answer === questions[q].answer) {
        document.getElementById(selected_answer).style.backgroundColor = 'green';
    } else {
        document.getElementById(selected_answer).style.backgroundColor = 'red';
    }
}