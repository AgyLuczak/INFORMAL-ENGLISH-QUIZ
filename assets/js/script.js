const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a');
const option2 = document.getElementById('b');
const option3 = document.getElementById('c');
const option4 = document.getElementById('d');
const scoreCounter = document.getElementById('scoreCounter');
const questionNumber = document.getElementById('questionCounter');
const endScreen = document.getElementById('end-screen');
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');

let runningQuestion = 0;
let score = 0;
let scoreList = [];
//Shuffle the questions
function shuffleQuestions(quests) {
    for (let i = quests.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swapping values with random index
        [quests[i], quests[j]] = [quests[j], quests[i]];
    };
    return quests;
}

questions = shuffleQuestions(questions);

// to keep track of question number
var q = 0;
clicked = {};

function displayQuestion() {
    try {
        questionNumber.innerHTML = `${q + 1}/10`;
        // add the value of each question to the questionText tag
        let all_options = document.getElementsByClassName('answer-container');
        options_array = [questions[q].choice1, questions[q].choice2, questions[q].choice3, questions[q].choice4];
        shuffled_options = shuffleQuestions(options_array);

        for (let i = 0; i < all_options.length; i++) {
            all_options[i].style.backgroundColor = 'coral';
        }
        questionText.innerHTML = questions[q].question;
        option1.innerHTML = shuffled_options[0];
        option2.innerHTML = shuffled_options[1];
        option3.innerHTML = shuffled_options[2];
        option4.innerHTML = shuffled_options[3];
    } catch (error) {
        console.error("An error occurred while displaying the question", error);
    }

}


if (questions.length > 0) {
    displayQuestion();
}

function disableOptions() {
    let options = document.getElementsByClassName('answer-container');
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}

function endQuiz() {
    quizContainer.classList.add("hide");

    endScreen.classList.remove("hide");
}

function checkAnswer(selected_answer) {
    clickedQuestion = document.getElementById('question-text').innerHTML;
    if (clickedQuestion in clicked) {
        clicked[clickedQuestion] += 1;
    } else {
        clicked[clickedQuestion] = 1;
    }

    clicked_option = document.getElementById(selected_answer).parentNode;
    select_answer_text = document.getElementById(selected_answer).innerText;

    if (select_answer_text === questions[q].answer && clicked[clickedQuestion] == 1) {

        clicked_option.style.backgroundColor = 'green';
        score++;
        console.log("Score: ", score);
        scoreCounter.innerHTML = score;
    } else if (select_answer_text != questions[q].answer && clicked[clickedQuestion] == 1) {
        clicked_option.style.backgroundColor = 'red';

    }
    if (clicked[clickedQuestion] === 1) {
        q++;

    }

    if (q == questions.length) {
        endQuiz();
        return;
    }
    setTimeout(function () {

        if (q < questions.length) {
            displayQuestion();
        }
    }, 1000)
}

function saveScore(newScore) {
    localStorage.setItem('entry', JSON.stringify(newScore));
    let scoreList = JSON.parse(localStorage.getItem("highscore"));
    let entry = JSON.parse(localStorage.getItem("entry"));
    if (scoreList == null) {
        scoreList = [];
        scoreList.push(entry);
        localStorage.setItem('highscore', JSON.stringify(scoreList));
    } else {
        scoreList.push(entry);
        localStorage.setItem('highscore', JSON.stringify(scoreList));
    }

}





submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const playerName = document.getElementById('fullname').value.trim();
    let newScore = {
        player: playerName,
        score: score
    };

    saveScore(newScore);
    window.open('scores.html');
})