


function sectionStateOnStart (aboveSection,startButton,playScreen,gameBox){
$('#startButton').click(function () {
    hideAboveSection (aboveSection)
    hideStartButton (startButton)
    showPlayScreen (playScreen)
    increaseGameHeight (gameBox)
})

}

function hideAboveSection (aboveSection) {
    aboveSection.css({display: "none"})
}

function hideStartButton (startButton) {
    startButton.css({display: "none"})
}

function showPlayScreen (playScreen) {
    playScreen.css({visibility: "visible", zIndex: 1})
}

function increaseGameHeight (gameBox) {
    gameBox.css({height: "670px"})
}


sectionStateOnStart($('#aboveSection'),$('#startButton'),$('#playScreen'),$('#gameBox'))