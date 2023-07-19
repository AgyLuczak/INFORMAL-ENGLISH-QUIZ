const highscoreContainer = document.getElementsByClassName('highscores-container');
const highscores = document.getElementById('highscores')

function getScores() {
    let storedScores = JSON.parse(localStorage.getItem("highscore"))
    if (storedScores != null) {
        return storedScores
    }
    return []
}