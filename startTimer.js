var startTimer = document.getElementById("timer")
var time = 0
setInterval(setTime, 1000)

function setTime() {
    ++time
    startTimer.innerHTML = raceTimer(time % 60)
}

function raceTimer(time) {
    var raceTime = time + ' s'
    if (raceTime.length < 4) {
        return '0' + raceTime
    } else {
        return raceTime
    }
}

// var finishedGame = new CustomEvent('finishedRace', {
//     bubbles: true,
//     cancelable: true
// })
//
// document.getElementById('timer').addEventListener('finishedRace', function() {
//     var timer = document.getElementById('timer')
//     var time = document.getElementById('timer').textContent
//     var finishTime = document.createElement('p')
//     finishTime.textContent = 'Finish Time: ' + time + 's!!'
//     timer.appendChild(finishTime)
// })

// function gameTimer() {
//     if (startTimer.textContent === 'Go!!') {
//         var time = 0
//         setInterval(setTime, 1000)
//
//         function setTime(timer) {
//             ++time
//             timer.innerHTML = raceTimer(time % 60)
//         }
//
//         function raceTimer(time) {
//             var raceTime = time + ' s'
//             if (raceTime.length < 4) {
//                 return '0' + raceTime
//             } else {
//                 return raceTime
//             }
//         }
//     }
// }