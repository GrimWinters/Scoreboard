let homeScore = 0;
let guestScore = 0;
let homeScoreBoard = document.getElementById("home-score-board")
let guestScoreBoard = document.getElementById("guest-score-board")

function homescore1() {
  homeScore += 1;
  homeScoreBoard.innerText = homeScore;
}
function homescore2() {
  homeScore += 2;
  homeScoreBoard.innerText = homeScore;
}
function homescore3() {
  homeScore += 3;
  homeScoreBoard.innerText = homeScore;
}
function guestscore1() {
  guestScore += 1;
  guestScoreBoard.innerText = guestScore;
}
function guestscore2() {
  guestScore += 2;
  guestScoreBoard.innerText = guestScore;
}
function guestscore3() {
  guestScore += 3;
  guestScoreBoard.innerText = guestScore;
}