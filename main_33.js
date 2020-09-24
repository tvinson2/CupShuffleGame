
var Cup1 = document.getElementById("cup1");
var Cup2 = document.getElementById("cup2");
var Cup3 = document.getElementById("cup3");
var ball = document.getElementById("ball");
var textBox = document.getElementById("scoreBoard");
var textBox2 = document.getElementById("scoreBoard2");
var textBox3 = document.getElementById('playerWin');
document.getElementById("shuff1").addEventListener("click",firstShuff);
document.getElementById("shuff2").addEventListener("click",secShuff);
document.getElementById("shuff3").addEventListener("click",thirdShuff);
document.getElementById("lift").addEventListener("click",cup2Lift);

//////////Defining the Moves//////////

function left2mid2left(){
    var pos = 300;
    var cupMoves = setInterval(function(){letsZoomRight(Cup1)},50);
    function letsZoomRight(cupAreWeMoving){
        if(pos==700){
            clearInterval(cupMoves);
            setInterval(function(){letsZoomLeft(Cup1)},50);
        }else{
            pos+=50;
            cupAreWeMoving.style.left = pos + 'px';
        }
    }
    function letsZoomLeft(cupAreWeMoving){
        if(pos==300){
            clearInterval(cupAreWeMoving);
        }else{
            pos-=100;
            cupAreWeMoving.style.left = pos + 'px';
        }
    }
}
function mid2right(){
    var pos2 = 700;
    setInterval(function(){letsZoomRight2(Cup2)},50);
    
    function letsZoomRight2(cupAreWeMoving){
        if(pos2==1100){
            clearInterval();
           // var cupMovesSequel2 = setInterval(function(){letsZoomLeft2(Cup2)},50);
        }else{
            pos2+=50;
            cupAreWeMoving.style.left = pos2 + 'px';

        }
    }
    // function letsZoomLeft2(cupAreWeMoving){
    //     if(pos2<760 & pos2 > 700){
    //         clearInterval(cupMovesSequel2);
    //     }
    //     else{
    //         pos2-=50;
    //         cupAreWeMoving.style.left = pos2 + 'px';
    //     }
    // }
}
function right2mid(){
    var pos3 = 1100;
    setInterval(function(){letsZoomLeft3(Cup3)},50);
    
    function letsZoomLeft3(cupAreWeMoving){
        if(pos3==700){
            clearInterval();
        }else{
            pos3-=50;
            cupAreWeMoving.style.left = pos3 + 'px';
        }
    }
}
function left2right(){
    var pos4 = 300;
    setInterval(function(){letsZoomRight4(Cup1)},50);
    function letsZoomRight4(cupAreWeMoving){
        if(pos4==1100){
            clearInterval();
            //var cupMovesSequel = setInterval(function(){letsZoomLeft(Cup1)},50);
        }else{
            pos4+=50;
            cupAreWeMoving.style.left = pos4 + 'px';
        }
    }
}
function right2left(){
    var pos5 = 1100;
    setInterval(function(){letsZoomLeft5(Cup3)},50);
    
    function letsZoomLeft5(cupAreWeMoving){
        if(pos5==300){
            clearInterval();
        }else{
            pos5-=50;
            cupAreWeMoving.style.left = pos5 + 'px';
        }
    }

}
function mid2right2mid(){
    var pos6 = 700;
    setInterval(function(){letsZoomRight6(Cup2)},50);
    function letsZoomRight6(cupAreWeMoving){
        if(pos6==1100){
            clearInterval();
            setInterval(function(){letsZoomLeft6(Cup2)},50);
        }else{
            pos6+=50;
            cupAreWeMoving.style.left = pos6 + 'px';
        }
    }
    function letsZoomLeft6(cupAreWeMoving){
        if(pos6==700){
            clearInterval();
        }else{
            pos6-=50;
            cupAreWeMoving.style.left = pos6 + 'px';
        }
    }
}
function mid2Left2Right(){
    var pos7 = 700;
    setInterval(function(){letsZoomLeft7(Cup2)},50);
    function letsZoomLeft7(cupAreWeMoving){
        if(pos7==300){
            clearInterval();
            setInterval(function(){letsZoomRight7(Cup2)},50);
        }else{
            pos7-=50;
            cupAreWeMoving.style.left = pos7 + 'px';
        }
    }
    function letsZoomRight7(cupAreWeMoving){
        if(pos7==1100){
            clearInterval();
            //setInterval(function(){letsZoomLeftAgain7(Cup2)},50);
        }else{
            pos7+=50;
            cupAreWeMoving.style.left = pos7 + 'px';
        }
    }
}
function left2mid(){
    var pos8 = 300;
    setInterval(function(){letsZoomRight8(Cup1)},50);
    function letsZoomRight8(cupAreWeMoving){
        if(pos8==700){
            clearInterval();
            //var cupMovesSequel = setInterval(function(){letsZoomLeft(Cup1)},50);
        }else{
            pos8+=50;
            cupAreWeMoving.style.left = pos8 + 'px';
        }
    }
}
//////////Reveal ball //////////
function cup2Lift(){
    var pos10 = 300;
    ball.style.left = Cup2.style.left;
    ball.style.top = Cup2.style.top;
    setInterval(function(){letsReveal(Cup2)},50);
    function letsReveal(){
        if(pos10==10){
            clearInterval();
            setInterval(function(){letsHide(Cup2)},50);
        }else{
            pos10-=10;
            Cup2.style.top = pos10 + 'px';
        }
    }
    function letsHide(){
        if(pos10==+300){
            clearInterval();
        }else{
            pos10+=10;
            Cup2.style.top = pos10 + 'px';
        }
    }
}
////////// Admin functions //////////
function resetPos(){
   
    Cup1.style.left = 300  + 'px';
    Cup2.style.left = 700 + 'px';
    Cup3.style.left = 1100 + 'px';
    ball.style.left = 765 + 'px';
}
function hideBall(){

    ball.style.opacity = "0";
}
function showBall(){
    ball.style.opacity = "1";
}
function replayGame(){
    location.reload()
}
//////////Scoreboard //////////
function keepScore(){
    if( typeof this.counter1 == 'undefined' ) {
                this.counter1 =1;
            }
    
    textBox.value = this.counter1;
    this.counter1++;
}
function keepScore2(){
    if( typeof this.counter2 == 'undefined' ) {
                this.counter2 = 1;
            }
    textBox2.value = this.counter2;
    this.counter2++;
}

// function checkIfPlayerWins(){
//     if (textBox > 0){
//         var stringthing = "chgh";
//         textBox3.innerHTML = stringthing;
//     }
// }

////////// Prompts //////////
function round1Prompts(){
    guess = window.prompt("Choose a cup. 1,2, or 3");
    if(guess==="3"){
        alert ("CORRECT!");
        setTimeout(keepScore,1000); //1 sec
        alert ("Round 2");
        function nextPlay() {
            var firstRound = document.getElementById('shuff1');
            firstRound.remove();
                    setTimeout(cup2Lift,1000); //1 sec
            setTimeout(resetPos,2000);// 2 sec
        }
            nextPlay()//removes the button
        }else{if(guess==="2"){
            alert ("NOPE! Try again");
            round1Prompts();
            keepScore2();
            //checkIfPlayerWins();
        }else{if(guess==="1"){
            alert ("NOPE! Try again");
            round1Prompts();
            keepScore2();
            //checkIfPlayerWins();
            }else{
            alert ("Please type the numbers 1,2, or 3");
            round1Prompts();
            }
        }
    }
}
function round2Prompts(){
    guess2 = window.prompt("Choose a cup. 1,2, or 3");
    if(guess2==="2"){
        alert ("CORRECT!");
        setTimeout(keepScore,1000); //1 sec
        alert ("Round 3");
            function nextPlay2() {
                var secRound = document.getElementById('shuff2');
                secRound.remove();
                        setTimeout(cup2Lift,1000); //1 sec
                setTimeout(resetPos,2000);// 2 sec
            }
        nextPlay2()//removes the button
        }else{if(guess2==="1"){
            alert ("NOPE! Try again");
            round2Prompts();
            keepScore2()
        }else{if(guess2==="3"){
            alert ("NOPE! Try again");
            round2Prompts();
            setTimeout(keepScore,1000); //1 sec
            }else{
            alert ("Please type the numbers 1,2, or 3");
            round2Prompts();
            }
        }
    }
}
function round3Prompts(){
    guess3 = window.prompt("Choose a cup. 1,2, or 3");
    if(guess3==="2"){
        keepScore();
        alert ("CORRECT!");
        alert ("Good Game, Thanks for playing!");
        checkIfPlayerWins();
            function nextPlay3() {
                var thirdRound = document.getElementById('shuff3');
                thirdRound.remove();
                        setTimeout(cup2Lift,1000); //1 sec
                setTimeout(resetPos,2000);// 3 sec
                setTimeout(replayGame,8000);//5 sec
            }
        nextPlay3()//removes the button
        }else{if(guess3==="1"){
            alert ("NOPE! Try again");
            round3Prompts();
            keepScore2()
        }else{if(guess3==="3"){
            alert ("NOPE! Try again");
            round3Prompts();
            keepScore2()
            }else{
            alert ("Please type the numbers 1,2, or 3");
            round3Prompts();
            }
        }
    }
}
//////////The Shuffles//////////
function firstShuff (){
    hideBall();
    resetPos();
    left2mid2left();
    mid2right();
    right2mid();
    setTimeout(showBall,1000); //1 sec
    setTimeout(round1Prompts,3000)//3 sec
}
function secShuff(){
    hideBall();
    resetPos();
    left2right();
    mid2right2mid();
    right2left();
    setTimeout(showBall,1000); //1 sec
    setTimeout(round2Prompts,3000)//3 sec
}
function thirdShuff(){
    hideBall();
    resetPos();
    left2mid();
    mid2Left2Right();
    right2left();
    setTimeout(showBall,1000); //1 sec
    setTimeout(round3Prompts,3000)//3 sec
}

