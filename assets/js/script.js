const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a');
const option2 = document.getElementById('b');
const option3 = document.getElementById('c');
const option4 = document.getElementById('d');
const scoreCounter = document.getElementById('scoreCounter');
const questionNumber = document.getElementById('questionCounter');
const endScreen = document.getElementById('end-screen')
const quizContainer = document.getElementById('quiz-container')
const submitBtn = document.getElementById('submit-btn')

let runningQuestion = 0
let score = 0

//Shuffle the questions
function shuffleQuestions(quests) {
    for (let i = quests.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swapping values with random index
        [quests[i], quests[j]] = [quests[j], quests[i]]
    };
    return quests
}

questions = shuffleQuestions(questions)


// to keep track of question number
var q = 0
clicked = {};

function displayQuestion() {
    try {
        questionNumber.innerHTML = `${q + 1}/10`
        // add the value of each question to the questionText tag
        let all_options = document.getElementsByClassName('answer-container');
        for (let i = 0; i < all_options.length; i++) {
            all_options[i].style.backgroundColor = 'coral';
        }
        questionText.innerHTML = questions[q].question
        option1.innerHTML = questions[q].choice1
        option2.innerHTML = questions[q].choice2
        option3.innerHTML = questions[q].choice3
        option4.innerHTML = questions[q].choice4
    } catch (error) {
        console.error("An error occurred while displaying the question", error);
    }

}


if (questions.length > 0) {
    displayQuestion()
}

function disableOptions() {
    let options = document.getElementsByClassName('answer-container')
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}

function endQuiz() {
    console.log("Adding hide class to quiz container");
    console.log(quizContainer);
    quizContainer.classList.add("hide");
    console.log("Removing hide class from end screens");
    endScreen.classList.remove("hide");
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
    console.log("Q: ", q, "Questions.length: ", questions.length)
    if (q == questions.length) {
        endQuiz()
        return;
    }
    setTimeout(function () {

        if (q < questions.length) {
            displayQuestion();
        }
    }, 1000)
}

function saveScore(newScore) {
    localStorage.setItem('entry', JSON.stringify(newScore))
}


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const playerName = document.getElementById('fullname').value.trim();
    let newScore = {
        player: playerName,
        score: score
    }
    console.log(newScore);
    saveScore(newScore)
})