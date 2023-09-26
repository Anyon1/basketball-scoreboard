let homeScore = 0
let awayScore = 0
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
homeScoreEl.textContent = homeScore
awayScoreEl.textContent = awayScore
let lastScores = document.getElementById("last-scores")


function home1() {
     homeScore += 1
     homeScoreEl.textContent = homeScore
}
function home2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function home3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function away1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}
function away2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}
function away3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}
function newGame() {
    lastScores.innerHTML += homeScore + " : " + awayScore + "<br>"
    homeScore = 0
    awayScore = 0
    awayScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}