// This opens the gamescreen on click of the start button.
$('#startButton').click(function () {
    displayToggleNone ($('#aboveSection'))
    displayToggleNone ($('#startButton'))
    showPlayScreen ($('#playScreen'))
    displayToggleNone($('.topSection'))
})

//Toggle display from block to none
function displayToggleNone (section) {
    section.css({display: "none"})
}
//toggles the visibility of a screen from hidden to visible and brings to the front.
function showPlayScreen (playScreen) {
    playScreen.css({visibility: "visible", zIndex: 1})
}