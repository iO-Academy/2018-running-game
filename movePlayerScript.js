var storedKeyPress = 'a';


// This function moves a html element across the screen. It can be have the keypress code and the html element entered as parameters. It then returns the storedKeyPress variable to prevent the same key being pressed twice.
function moveLeg (keyPress, legChoice) {
    $(document).keydown(function(e){
        if(e.keyCode == keyPress && e.keyCode !== storedKeyPress) {
            $(legChoice).animate({left: "+=12px"}, 0.01, function(){
                return storedKeyPress = e.keyCode
            })
        }
    })
}

moveLeg(65, "#leftLeg")
moveLeg(68, '#rightLeg')