
var Cup1 = document.getElementById("cup1");
var Cup2 = document.getElementById("cup2");
var Cup3 = document.getElementById("cup3");

document.getElementById("shuff1").addEventListener("click",firstShuff);
document.getElementById("shuff2").addEventListener("click",secShuff);
document.getElementById("shuff3").addEventListener("click",thirdShuff);

//////////////////////////////////////////////////////////////////////////
function firstShuff(){
    var pos = 300;
    var cupMoves = setInterval(function(){letsZoomRight(Cup1)},50);
    
    function letsZoomRight(cupAreWeMoving){
        if(pos<610 & pos > 590){
            clearInterval(cupMoves);
            var cupMovesSequel = setInterval(function(){letsZoomLeft(Cup1)},50);
        }else{
            pos+=50;
            cupAreWeMoving.style.left = pos + 'px';
        }
    }
    function letsZoomLeft(cupAreWeMoving){
        if(pos<360 & pos > 300){
            clearInterval(cupMovesSequel);
        }else{
            pos-=50;
            cupAreWeMoving.style.left = pos + 'px';
            
        }
    }
}
//////////////////////////////////////////////////////////////////////////
function secShuff(){
    var pos2 = 700;
    var cupMoves2 = setInterval(function(){letsZoomRight2(Cup2)},50);
    
    function letsZoomRight2(cupAreWeMoving){
        if(pos2<1010 & pos2 > 890){
            clearInterval(cupMoves2);
            var cupMovesSequel2 = setInterval(function(){letsZoomLeft2(Cup2)},50);
        }else{
            pos2+=30;
            cupAreWeMoving.style.left = pos2 + 'px';

        }
    }
    function letsZoomLeft2(cupAreWeMoving){
        if(pos2<760 & pos2 > 700){
            clearInterval(cupMovesSequel2);
        }
        // else{
        //     pos2-=50;
        //     cupAreWeMoving.style.left = pos2 + 'px';
        // }
    }
}
//////////////////////////////////////////////////////////////////////////
