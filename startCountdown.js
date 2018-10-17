//variable which will allow us to insert out timer into right div
var startTimer = $("#timer")
var ableToMove = 0
//this element connects to the start button
$("#startButton").click( function() {
    createTimer()
})

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
            startTimer.text('Go!!')
            ableToMove = 1
        } else {
            time = countDown(time)
            startTimer.text(time)
        }
    }, 1000)
}










