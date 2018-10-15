document.getElementById("button").addEventListener('click', function(){
    setTimeout(startGame, 3000)
    Timer()
})

 function startGame() {
 }

function countdown(number) {
    return number - 1
}

function createTimer() {
    var timing = setInterval(function () {
        if(time === 1){
            clearInterval(timing)
            timer.innerHTML = 'Go!!'
        } else {
            time = countdown(time)
            timer.textContent = time
        }

    },1000)
}

function Timer() {
    time = 4
    var timer = document.getElementById("timer")
    createTimer()

}

