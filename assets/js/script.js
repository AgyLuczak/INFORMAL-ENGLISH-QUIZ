const questionText = document.getElementById("question-text");
const option1 = document.getElementById('a')
const option2 = document.getElementById('b')
const option3 = document.getElementById('c')
const option4 = document.getElementById('d')


function displayQuestions() {
    console.log(questions.length)
    // add the value of each question to the questionText tag
    for (let i = 0; i < questions.length; i++) {
        questionText.innerHTML = questions[i].question
        option1.innerHTML = questions[i].choice1
        option2.innerHTML = questions[i].choice2
        option3.innerHTML = questions[i].choice3
        option4.innerHTML = questions[i].choice4
    }
}
displayQuestions()