//Function makes pumpkins fall from ceiling to floor once game has finished (fanfare).
function pumpkinStuff(){
    $(".fallingPumpkin").each(function () {
        $('.fallingPumpkin').css({"display": "block"})
        var random = (Math.random() * 100)  * 50
        $(this).animate({top: "540px"}, random)

    })
}