var storedKeyPress = 65;

// This function moves a html element across the screen.
// For parameters it takes the event "e" from the event listener,
// the distance you want the html element to move
// and the id of the html element you want to move.
// It changes the storedKeyPress variable to prevent the same key being pressed twice.

$(document).keydown(function(e){
    var moveDistance = "+=12px";
    moveLeg(e, moveDistance, "#imageBlock")
})

function moveLeg(e, distance, htmlId) {
    if ((e.keyCode == 65 && e.keyCode !== storedKeyPress) || (e.keyCode == 68 && e.keyCode !== storedKeyPress)) {
        $(htmlId).animate({left: distance}, 0, function () {
            storedKeyPress = e.keyCode
        })
    }
}