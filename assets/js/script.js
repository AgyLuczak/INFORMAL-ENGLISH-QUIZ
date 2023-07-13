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
clicked = {};

function displayQuestion(clicked_option = "") {
    console.log(questions.length)
    // add the value of each question to the questionText tag
    let all_options = document.getElementsByClassName('answer-container');

    for (let i = 0; i < all_options.length; i++) {
        console.log(all_options[i]);
        all_options[i].style.backgroundColor = 'coral';
    }

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

function disableOptions() {
    let options = document.getElementsByClassName('answer-container')
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}

function checkAnswer(selected_answer) {
    clickedQuestion = document.getElementById('question-text').innerHTML
    if (clickedQuestion in clicked) {
        clicked[clickedQuestion] += 1
    } else {
        clicked[clickedQuestion] = 1;
    }
    console.log(clicked);
    console.log("Question Number: ", q);
    clicked_option = document.getElementById(selected_answer).parentNode
    console.log("clicked[clickedQuestion]", clicked[clickedQuestion]);
    if (selected_answer === questions[q].answer && clicked[clickedQuestion] == 1) {

        clicked_option.style.backgroundColor = 'green';
        score++;
        console.log("Score: ", score);
        scoreCounter.innerHTML = score;
    } else if (selected_answer != questions[q].answer && clicked[clickedQuestion] == 1) {
        clicked_option.style.backgroundColor = 'red';

    }
    if (clicked[clickedQuestion] === 1) {
        q++;
    }

    setTimeout(function () {
        displayQuestion(clicked_option);

    }, 2000)
}