const highscores = document.getElementById('highscores');

function getScores() {
    let storedScores = JSON.parse(localStorage.getItem("highscore"));
    if (storedScores != null) {
        return storedScores;
    }
    return [];
}

function orderedScores() {
    var scoreList = getScores();
    scoreList.sort(function (a, b) {
        return a.score - b.score;
    });
    scoreList.reverse();
    var topTenScores = scoreList.slice(0, 10);
    createLeaderBoard(topTenScores);
}

function createLeaderBoard(topTenScores) {
    topTenScores.forEach(element => {
        scoreElement = document.createElement('div');
        scoreElement.innerText = element.player + " - " + element.score;
        highscores.append(scoreElement);
    });

}


orderedScores();