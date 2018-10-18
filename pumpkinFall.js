//Function makes pumpkins fall from ceiling to floor once game has finished (fanfare).g
function pumpkinStuff(){
    $(".fallingPumpkin").each(function () {
        $('.fallingPumpkin').css({"display": "block"})
        var random = (Math.random() * 100)  * 50
        $(this).animate({top: "718px"}, random)
    })
}