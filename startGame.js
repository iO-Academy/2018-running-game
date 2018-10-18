// This opens the gamescreen on click of the start button.
$('#startButton').click(function() {
    buildGame()
})

// This opens the gamescreen on click of the start button.
$('#resetGame').click(function() {
    resetGame()
})
//function shows the game screen and hides elements that aren't required for the game screen.
function buildGame() {
    $('#startButton').css({display: "none"})
    $('.topSection').css({display: "none"})
    $('#playScreen').css({display: "block"})
    $("#mainScreen").css({display: "none"})
}

//function resets the game by toggling all the setting changed back to their defaults
function resetGame() {
    $('#startButton').css({display: "block"})
    $('.topSection').css({display: "block"})
    $('#playScreen').css({display: "none"})
    $('#finishedBox').css({display: "none"})
    $("#playerProfile").css({left: "0px"})
    $("#playerProfile").css({display: "block"})
    $('#resetGame').css({display: "none"})
    startTimer.css({display: "block"})
    $("#mainScreen").css({display: "block"})

}