//team 1
let team1CountH2 = document.getElementById("team1CountH2") //team 1 score display
let team1Count = 0 // tracker for team 1's score

//team 2
let team2CountH2 = document.getElementById("team2CountH2") //team 2 score display
let team2Count = 0 // tracker for team 2's score

//
function team1Increment() { //event handler to increment team 1 score
    team1Count += 1
    team1CountH2.textContent = team1Count;
}

function team2Increment() { //event handler to increment team 2 score
    team2Count += 1
    team2CountH2.textContent = team2Count;
}

function save() {
    let d = new Date(); //logs date
    let time = d.toLocaleTimeString();
    let countStr = "Time: " + time + " – score: AA's team" + team1Count + " - opposing team: " + team2Count //format of saved scores
    prevScores.innerHTML = countStr + "<br>" + prevScores.textContent;
    team1CountH2.textContent = 0; //resets scores to 0 after saving
    team2CountH2.textContent = 0;
    team1Count = 0;
    team2Count = 0;
}

function reset() { //resets without saving
    team1Count = 0
    team1CountH2.textContent = 0
    team2Count = 0
    team2CountH2.textContent = 0
}

function del() { //deletes previous scores
    prevScores.textContent = ""
}

let prevScoresContainer = document.getElementById("prev-scores-container") //where previous scores are saved
let prevScoresTitle = document.getElementById("prev-scores-title") //title for the previous scores box
let prevScores = document.getElementById("prev-scores") //this is where previous scores will be inserted upon save.
