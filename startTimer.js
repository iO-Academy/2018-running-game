function setTime() {
    var commenceTimer = $('#timer')
    commenceTimer.attr('dataTimer', '1')
    var playerTimer = setInterval(function () {
        var positionOfMan = parseInt($("#playerProfile").css('left'))
        var positionOfFinish = parseInt($("#pumpkinFinishLine").css('left'))
        if (positionOfMan >= positionOfFinish - 75) {
            finishLine()
            clearInterval(playerTimer)
        }
        commenceTimer.attr('dataTimer', (parseInt(commenceTimer.attr('dataTimer')) + 1))
        commenceTimer.text(raceTimer(commenceTimer.attr('dataTimer')))
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