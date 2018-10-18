var time = 0

function setTime() {
    var playerTimer = setInterval(function () {
        var positionOfMan = parseInt($("#playerProfile").css('left'))
        var positionOfFinish = parseInt($("#pumpkinFinishLine").css('left'))
        if (positionOfMan >= positionOfFinish - 75) {
            finishLine()
            clearInterval(playerTimer)
        }
        var commenceTimer = document.getElementById("timer")
        ++time
        commenceTimer.textContent =  raceTimer(time)
    }, 1000)
}

function raceTimer() {
    var raceTime = time + ' s'
    if (raceTime.length < 4) {
        return '0' + raceTime
    } else {
        return raceTime
    }
}

