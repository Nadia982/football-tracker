//team 1
let team1CountH2 = document.getElementById("team1CountH2")
let team1Count = 0

//team 2
let team2CountH2 = document.getElementById("team2CountH2")
let team2Count = 0

function team1Increment() {
    team1Count += 1
    team1CountH2.textContent = team1Count;
}

function team2Increment() {
    team2Count += 1
    team2CountH2.textContent = team2Count;
}

let prevScoresContainer = document.getElementById("prev-scores-container")
let prevScoresTitle = document.getElementById("prev-scores-title")
let prevScores = document.getElementById("prev-scores")

function save() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    let countStr = "Time: " + time + " – score: " + team1Count + " - " + team2Count + ' ................................ '
    prevScores.textContent = countStr + prevScores.textContent;
    team1CountH2.textContent = 0;
    team2CountH2.textContent = 0;
    team1Count = 0;
    team2Count = 0;
}

function reset() {
    team1Count = 0
    team1CountH2.textContent = 0
    team2Count = 0
    team2CountH2.textContent = 0
}

function del() {
    prevScores.textContent = ""
}