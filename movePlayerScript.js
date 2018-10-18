var storedKeyPress = 65;

$(document).keydown(function(e) {
    var positionOfMan = parseInt($("#playerProfile").css('left'))
    var positionOfFinish = parseInt($("#pumpkinFinishLine").css('left'))
    if (character.attr("dataMoving") == 1) {
        var moveDistance = "+=10px";
        moveLeg(e, moveDistance)
    }
    if (positionOfMan >= positionOfFinish - 50) {
        finishLine()
    }
})

// This function moves a html element across the screen.
// For parameters it takes the event "e" from the event listener,
// the distance you want the html element to move
// and the id of the html element you want to move.
// It changes the storedKeyPress variable to prevent the same key being pressed twice.
function moveLeg(e, distance) {
    if ((
            e.keyCode == 65 &&
            e.keyCode !== storedKeyPress &&
            character.attr("dataMoving") == 1
        )
        || (
            e.keyCode == 68 &&
            e.keyCode !== storedKeyPress &&
            character.attr("dataMoving") == 1
        )
        ) {
        $("#playerProfile").animate({left: distance}, 0, function () {
            storedKeyPress = e.keyCode
        })
    }
}

// This function evaluates when the user reaches the finish line in the game
// The position of finish and position of character(the pumpkkin head) parameters are variables in the keydown event listener
// These can be changed in the event listener to work with the different html elements in the actual game
function finishLine () {
    $("#playerProfile").fadeOut(2000)
    setTimeout(displayFinishMessage, 2000)
    setTimeout(displayResetGame, 3000)
    character.attr("dataMoving", "0")
}

// This function displays a message when the user reaches the finish line in the game.
// Can be used to display fanfare when made.
function displayFinishMessage () {
    $('#finishedBox').css({"display": "block"})
}

// This function displays a message when the user reaches the finish line in the game.
// Can be used to display fanfare when made.
function displayResetGame () {
    $('#resetGame').css({"display": "block"})
}