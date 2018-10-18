//starts a timer on start of race and stops it when the player reaches the finish line
function setTime() {
    var commenceTimer = $('#timer')
    commenceTimer.attr('dataTimer', '0')
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


//puts the race time into the timer div on game page
function raceTimer() {
    return $('#timer').attr('dataTimer') + ' s'
}