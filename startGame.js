//this element connects to the start button
$("#button").click( function(){
    createTimer()
    hideStartBtn()
    displayGameScreen()
    hideGameTitle()
    displayGameSection()
    hideTopSection()
})

//this function hides the start button after it has been clicked
function hideStartBtn() {
        document.getElementById("button").style.display = "none"
}

// function to make the header disappear
function hideGameTitle() {
    document.getElementById("title").style.display = "none"
}

//functions makes the topsection disappear

function hideTopSection() {
    $("topSection").hide()
}

    //this means the gameScreen is shown when clicked and has a fade in option
function displayGameScreen() {
    var $gameScreen = $("gameScreen")
    $gameScreen.style.visibility = "visible"
    $gameScreen.style.zIndex = 1
    $gameScreen.fadeIn(6000)
}

//initially hides the gameScreen and fades it in alongisde the gameScreen
function displayGameSection() {
    $("#gameSection").hide().animate({height: '670px'}).fadeIn(6000)
}

//function that allows us to countdown number in next function
function countDown(number) {
    return number - 1
}

//variable which will allow us to insert out timer into right div
var startTimer = document.getElementById("timer")

//the function for the timer
function createTimer() {
    time = 4
    var timing = setInterval(function () {
        if(time === 1){
            clearInterval(timing)
            startTimer.textContent = 'Go!!'
        } else {
            time = countDown(time)
            startTimer.textContent = time
        }
    },1000)
}








