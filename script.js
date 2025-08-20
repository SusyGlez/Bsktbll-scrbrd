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
