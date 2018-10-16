//variable which will allow us to insert out timer into right div
var startTimer = document.getElementById("timer")

//this element connects to the start button
$("#startbutton").click( function(){
    createTimer()
    hideStartBtn()
    displayplayScreen()
    hideaboveBox()
    displayGameBox()
    hideTopSection()
})

//this function hides the start button after it has been clicked
function hideStartBtn() {
        document.getElementById("startbutton").style.display = "none"
}

// function to make the header disappear
function hideaboveBox() {
    document.getElementById("aboveBox").style.display = "none"
}

//functions makes the topsection disappear

function hideTopSection() {
    $("#topSection").hide()
}

    //this means the gameScreen is shown when clicked and has a fade in option
function displayplayScreen() {
    var $playScreen = $("#playScreen")
    $playScreen.style.visibility = "visible"
    $playScreen.style.zIndex = 1
}

//initially hides the gameBox and fades it in alongisde the gameBox
function displayGameBox() {
    $("#gameBox").hide().animate({height: '670px'}).fadeIn(6000)
}

//function that allows us to countdown number in next function
function countDown(number) {
    return number - 1
}

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








