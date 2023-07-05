const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
console.log(answers);

let currentQuestion = {};
let correctAnswers = true;
let availableQuestions = [];

//  Questions and answer choices //

let questions = [{
        question: "What are you after?",
        choice1: "What is in front of you?",
        choice2: "What do you find interesting?",
        choice3: "What are you looking for?",
        choice4: "Whose turn is it?",
        answer: 3,
    },
    {
        question: "He had us all in stitches",
        choice1: "He caused us a lot of pain",
        choice2: "He made us laugh a lot",
        choice3: "He fooled us",
        choice4: "He got us interested in sewing",
        answer: 2,
    },
    {
        question: "Ta!",
        choice1: "Thank you!",
        choice2: "Bye",
        choice3: "Yes!",
        choice4: "Right, I see.",
        answer: 1,
    },
    {
        question: "These people are minted.",
        choice1: "These people are poor.",
        choice2: "These people smell very nice.",
        choice3: "These people are crazy.",
        choice4: "These people are very rich.",
        answer: 4,
    },
    {
        question: "What do you reckon?",
        choice1: "Do you wish to return something?",
        choice2: "What do you think?",
        choice3: "Do you suffer from reflux?",
        choice4: "What is your favourite record?",
        answer: 2,
    },
    {
        question: "I'm knackered.",
        choice1: "I'm very tired.",
        choice2: "I'm all bruised.",
        choice3: "I'm behind with work.",
        choice4: "I'm very sad.",
        answer: 1,
    },
    {
        question: "Are yoy taking the mickey?",
        choice1: "Are you taking it seriously?",
        choice2: "Do you like Mickey Mouse?",
        choice3: "Are you joking?",
        choice4: "Are you taking your mouse to the vet?",
        answer: 3,
    },
    {
        question: "My wife is doing my head in.",
        choice1: "My wife makes me a better man.",
        choice2: "My wife hits me on my head a lot.",
        choice3: "My wife is annoying me.",
        choice4: "My wife tells me to be quiet.",
        answer: 3,
    },
    {
        question: "What time do you make it?",
        choice1: "What time will you get there?",
        choice2: "What's the time?",
        choice3: "What time do you finish work?",
        choice4: "Why are you late?",
        answer: 2,
    },
    {
        question: "What are you up to?",
        choice1: "What are you looking at?",
        choice2: "Are you in trouble?",
        choice3: "How much money do you owe?",
        choice4: "What are you doing right now?",
        answer: 2,
    }
];

const scorePoints = 100;
const maxQuestions = 10;