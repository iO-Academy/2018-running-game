var storedKeyPress = 'a';

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