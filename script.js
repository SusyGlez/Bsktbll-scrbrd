let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")
let homescore = 0
let guestscore = 0

function incrementhome1() {
    homescore += 1
    homescoreEl.textContent = homescore
}

function incrementguest1() {
    guestscore += 1
    guestscoreEl.textContent = guestscore
}

function incrementhome2() {
    homescore += 2
    homescoreEl.textContent = homescore
}

function incrementguest2() {
    guestscore += 2
    guestscoreEl.textContent = guestscore
}

function incrementhome3() {
    homescore += 3
    homescoreEl.textContent = homescore
}

function incrementguest3() {
    guestscore += 3
    guestscoreEl.textContent = guestscore
}

function restart() {
    homescoreEl.textContent = 0
    guestscoreEl.textContent = 0
    homescore = 0;
    guestscore = 0;

    clearInterval(timerInterval);
    timeLeft = 12*60*1000;
    updateTimer();
    timerInterval = setInterval(updateTimer, 10);
}

const timerElement = document.getElementById('timer');
    let timerLeft = 12*60*1000;

function updateTimer() {
    const minutes = Math.floor(timeLeft/60000);
    const seconds = Math.floor((timeLeft%60000)/1000);
    const centiseconds = Math.floor((timeLeft%1000)/10);
    
    const displayMinutes = String(minutes).padStart(2,'0');
    const displaySeconds = String(seconds).padStart(2,'0');
    const displaycentiseconds = String(centiseconds).padStart(2,'0');

    timerElement.textContent = `${displayMinutes}:${displaySeconds}:${displaycentiseconds}`;
        timeLeft -=10;
        if(timerLeft<0){
            clearInterval(timerInterval);
            timerElement.textContent = "00:00:00";
        }
}

const timerInterval = setInterval(updateTimer, 10);