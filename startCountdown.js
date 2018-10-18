//variable which will allow us to insert out timer into right div
var startTimer = $("#countDown")
var character =  $("#playerProfile")
//this element connects to the start button
$("#startButton").click(function() {
    createTimer()
})

//function that allows us to countdown number in next function
function countDown(number) {
    return number - 1
}

//the function that creates the timer.
// the timer counts from 3 and then types go whilst populating a variable which allows the character to move.
function createTimer() {
    var time = 4
    var timing = setInterval(function () {
        if (time === 1){
            clearInterval(timing)
            startTimer.text('Go!!')
            character.attr("dataMoving", "1")
            setTimeout(function () {
                startTimer.css({display: "none"})
                setTime()
            }, 1000)
        } else {
            time = countDown(time)
            startTimer.text(time)
        }
    }, 1000)
}