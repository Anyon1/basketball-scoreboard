let homeScore = 0
let awayScore = 0
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
homeScoreEl.textContent = homeScore
awayScoreEl.textContent = awayScore
let lastScores = document.getElementById("last-scores")

function increment(score, team) {
    if (team === "home") {
        homeScore += score
        homeScoreEl.textContent = homeScore
    } else {
        awayScore += score
        awayScoreEl.textContent = awayScore
    }
}
function newGame() {
    lastScores.innerHTML += homeScore + " : " + awayScore + "<br>"
    homeScore = 0
    awayScore = 0
    awayScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}