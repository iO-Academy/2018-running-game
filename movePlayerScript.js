var storedKeyPress = 65;




$(document).keydown(function(e) {
    var moveDistance = "+=10px";
    moveLeg(e, moveDistance, "#imageBlock")
    var positionOfMan = parseInt($("#imageBlock").css('left'))
    var positionOfFinish = parseInt($("#finishLine").css('left'))
    finishLine(positionOfMan, positionOfFinish)
})

// This function moves a html element across the screen.
// For parameters it takes the event "e" from the event listener,
// the distance you want the html element to move
// and the id of the html element you want to move.
// It changes the storedKeyPress variable to prevent the same key being pressed twice.
function moveLeg(e, distance, htmlId) {
    if ((e.keyCode == 65 && e.keyCode !== storedKeyPress) || (e.keyCode == 68 && e.keyCode !== storedKeyPress)) {
        $(htmlId).animate({left: distance}, 0, function () {
            storedKeyPress = e.keyCode
        })
    }
}

// This function evaluates when the user reaches the finish line in the game
// The position of finish and position of man parameters are variables in the keydown event listener
// These can be changed in the event listener to work with the different html elements in the actual game
function finishLine (positionOfMan, positionOfFinish) {
    if (positionOfMan >= positionOfFinish) {
        $("#imageBlock").fadeOut(2000)
        setTimeout(displayFinishMessage, 2000)
    }
}

// This function displays a message when the user reaches the finish line in the game.
// Can be used to display fanfare when made.
function displayFinishMessage () {
    $('#finishedBox').css({"display": "block"});
}
