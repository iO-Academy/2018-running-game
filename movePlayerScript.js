var storedKeyPress = 'a';

// This function moves a html element across the screen.
// It can be have the keypress code and the html element entered as parameters.
// It then returns the storedKeyPress variable to prevent the same key being pressed twice.
// Added the distance parameter to make the function more dynamic, has to be written in quotes like this: "+=12px" or will not work
function moveLeg (keyPress, legChoice, distance) {
    $(document).keydown(function(e){
        if(e.keyCode == keyPress && e.keyCode !== storedKeyPress) {
            $(legChoice).animate({left: distance}, 0.01, function(){
                return storedKeyPress = e.keyCode
            })
        }
    })
}

moveLeg(65, "#leftLeg", "+=12px")
moveLeg(68, "#rightLeg", "+=12px")