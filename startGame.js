document.getElementById("button").addEventListener('click', function(){
    timer()
    hideStartBtn()
})

function hideStartBtn(){
        document.getElementById("button").style.display = "none"
    }

function countDown(number) {
    return number - 1
}

var startTimer = document.getElementById("timer")

function createTimer() {
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

function timer() {
    time = 4
    var startTimer
    createTimer()
}



