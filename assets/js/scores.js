const highscoreContainer = document.getElementsByClassName('highscores-container');
const highscores = document.getElementById('highscores')

function getScores() {
    let storedScores = JSON.parse(localStorage.getItem("highscore"))
    if (storedScores != null) {
        return storedScores
    }
    return []
}

function orderedScores() {
    var scoreList = getScores();
    scoreList.sort(function (a, b) {
        return a.score - b.score;
    });
    scoreList.reverse();
    var topTenScores = scoreList.slice(0, 10);
    console.log(topTenScores);
    createLeaderBoard(topTenScores);
}

orderedScores();