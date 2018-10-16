document.getElementById("button").addEventListener('click', function(){
    createTimer()
    hideStartBtn()
    displayGameScreen()
})

function hideStartBtn() {
        document.getElementById("button").style.display = "none"
    }
function displayGameScreen() {
    document.getElementById("gameScreen").style.display = "block"
}


function countDown(number) {
    return number - 1
}

var startTimer = document.getElementById("timer")

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



