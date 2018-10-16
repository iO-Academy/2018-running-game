//this element connects to the start button
document.getElementById("button").addEventListener('click', function(){
    createTimer()
    hideStartBtn()
    displayGameScreen()
    hideGameTitle()

})
//this function hites the start button after it has been clicked
function hideStartBtn() {
        document.getElementById("button").style.display = "none"
}

// function to make the header disappear
function hideGameTitle() {
    document.getElementById("title").style.display = "none"
}

    //this means the grameScreen is shown when clicked
function displayGameScreen() {
    document.getElementById("gameScreen").style.display = "block"
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



