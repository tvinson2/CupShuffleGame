
var leftCup1;
var dx = Math.random()*600;
var dy = Math.random()*600;
var x=0, y=0;

function init(){
    leftCup1=document.getElementById("cup1");
        shuff1();
}

    window.requestAnimationFrame = (function(){
            return  window.requestAnimationFrame            ||
                    window.webkitRequestAnimationFrame      ||
                    window.mozRequestAnimationFrame         ||
                    window.oRequestAnimationFrame           ||
                    window.msRequestAnimationFrame          ||
                    function(callback,element){
                        window.setTimeout(callback,1000 / 60);
                    }
    } ();
    function shuff1(){
            x += (dx - x) * 0.15;
            y += (dy - y) * 0.15;
            leftCup1.style.left = x + "px";
            leftCup1.style.top = y + "px";
            requestAnimationFrame(shuff1,leftCup1);
        
    };    