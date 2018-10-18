var time = 0

function setTime() {
    var commenceTimer = document.getElementById("timer")
    ++time
    commenceTimer.textContent =  raceTimer(time)
}

function raceTimer() {
    var raceTime = time + ' s'
    if (raceTime.length < 4) {
        return '0' + raceTime
    } else {
        return raceTime
    }
}

function gameTimer() {
    if (character.attr("dataMoving") == 1) {
        setInterval(setTime, 1000)
    }
}