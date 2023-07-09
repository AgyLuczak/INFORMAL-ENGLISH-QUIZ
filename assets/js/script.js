/* const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a')
const option2 = document.getElementById('b')
const option3 = document.getElementById('c')
const option4 = document.getElementById('d')
const nextBtn = document.getElementById('next-btn')
// to keep track of question number
var q = 0

function displayQuestion() {
    console.log(questions.length)
    console.log("q=", q)
    // add the value of each question to the questionText tag

    questionText.textContent = questions[q].question
    option1.textContent = questions[q].choice1
    option2.textContent = questions[q].choice2
    option3.textContent = questions[q].choice3
    option4.textContent = questions[q].choice4
}

nextBtn.addEventListener('click', function () {
    q++;
    displayQuestion();
})

// displayQuestion()*/

const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a')
const option2 = document.getElementById('b')
const option3 = document.getElementById('c')
const option4 = document.getElementById('d')
const nextBtn = document.getElementById('next-btn')

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