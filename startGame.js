//variable which will allow us to insert out timer into right div
var startTimer = $("#timer")

//this element connects to the start button
$("#startbutton").click( function(){
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
        } else {
            time = countDown(time)
            startTimer.text(time)
        }
    },1000)
}








