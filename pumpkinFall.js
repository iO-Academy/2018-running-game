//Function makes pumpkins fall from ceiling to floor once game has finished (fanfare).
function pumpkinFall() {
    for (i=0; i<12; i++){
        $("#pumpkinContainer").append('<img class="fallingPumpkin" src="images_folder/rsz_pumpkin.png">')
    }
    var pumpkins = $(".fallingPumpkin")
    pumpkins.css({"display": "block"})
    pumpkins.each(function () {
        pumpkins.css({"display": "block"})
        var random = (Math.random() * 100)  * 50
        $(this).animate({top: "540px"}, random)
    })
}