let homeScore = 0;
let guestScore = 0;
let homeScoreBoard = document.getElementById("home-score-board")
let guestScoreBoard = document.getElementById("guest-score-board")

function leader() {
  if(homeScore > guestScore) {
    homeScoreBoard.style.color = "green"
    guestScoreBoard.style.color = "#F94F6D"
  }
  else if (homeScore < guestScore) {
    homeScoreBoard.style.color = "#F94F6D"
    guestScoreBoard.style.color = "green"
  }
  else {
    homeScoreBoard.style.color = "white"
    guestScoreBoard.style.color = "white"
  }
}

function homescore1() {
  homeScore += 1;
  homeScoreBoard.innerText = homeScore;
  leader()
}
function homescore2() {
  homeScore += 2;
  homeScoreBoard.innerText = homeScore;
  leader()
}
function homescore3() {
  homeScore += 3;
  homeScoreBoard.innerText = homeScore;
  leader()
}
function guestscore1() {
  guestScore += 1;
  guestScoreBoard.innerText = guestScore;
  leader()
}
function guestscore2() {
  guestScore += 2;
  guestScoreBoard.innerText = guestScore;
  leader()
}
function guestscore3() {
  guestScore += 3;
  guestScoreBoard.innerText = guestScore;
  leader()
}