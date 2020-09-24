var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


          ///Cup1///
  function round1(){
    var a1 = document.getElementById("canvas");
    var cup1 = a1.getContext("2d");
    cup1.beginPath();
    cup1.rect(300,550, 150, 100);
    cup1.fillStyle = "ff0000" //red
    cup1.fill();
    cup1.stroke();
          ///Cup2///
    var a2 = document.getElementById("canvas");
    var cup2 = a2.getContext("2d");
    cup2.beginPath();
    cup2.rect(640,550, 150, 100);
    cup2.fillStyle = "ff0000"//red
    cup2.fill();
    cup2.stroke();
          ///Cup3///
    var a3 = document.getElementById("canvas");
    var cup3 = a3.getContext("2d");
    cup3.beginPath();
    cup3.rect(985,550, 150, 100);
    cup3.fillStyle = "ff0000"//red
    cup3.fill();
    cup3.strokeStyle = "#ff0000";
    cup3.stroke();
  }
  round1();

  //////// Draw Ball ///
  var ball = document.getElementById("canvas");
  var gameBall = ball.getContext("2d");
  gameBall.beginPath();
  gameBall.arc(375, 600, 10, 0, Math.PI*2);
  gameBall.fillStyle="fff000"//yellow
  gameBall.fill();
  gameBall.strokeStyle = "#ff0000";//black
  gameBall.stroke();
 
 
 
  ///// Movement
  /*
  create a shuffle movement that will just 
  play into the predetermined shuffles 
  */
 
 
  //////////////Ball Placement//////////////
  ////// Hide Ball function
  function hideBall(){ 
    gameBall.fillStyle="ff0000";//red
    gameBall.fill();
    gameBall.stroke();
  }
  ////// Show Ball function
  function showBall(){ 
    gameBall.fillStyle="fff000";//yellow
    gameBall.fill();
    gameBall.stroke();
  }
    


  ///// Scoreboard function

  /*
  give a point for every correct guess
  first one to three wins
  */

  ///// Play/Choose button functions - Rounds

  function shuff1(){
    hideBall() 
    guess = window.prompt("Choose a cup");
    if(guess==="1"){
      alert ("CORRECT!");
      alert ("Round 2")
        function nextPlay() {
          var firstRound = document.getElementById('round1');
          firstRound.remove();
        }
          nextPlay()
          showBall()
        }else{if(guess==="2"){
          alert ("NOPE! Try again");
        }else{if(guess==="3"){
          alert ("NOPE! Try again");
          }else{
          alert ("Please type the numbers 1,2, or 3")
          shuff1()
          }
        }
      }
      }

  function shuff2(){
      hideBall();
    guess2 = window.prompt("Choose a cup");
    if(guess2==="1"){
      alert ("NOPE! Try Again");
    }else{if(guess2==="2"){
                                           
      alert ("Correct!");
      alert ("Round 3");
      function nextPlay2() {
        var secRound = document.getElementById('round2');
        secRound.remove();
    }
    nextPlay2()
    showBall()
    }else{
      if(guess2==="3"){
        alert ("NOPE! Try again");
      }else{
        alert ("Please type the numbers 1,2, or 3")
        shuff2()
      }
    }
    }
  }

  function shuff3(){ 
      hideBall();
    guess3 = window.prompt("Choose a cup");
    if(guess3==="1"){
      alert ("NOPE! Try again.");
    }else{if(guess3==="2"){
      alert ("NOPE!");
    }else{
      if(guess3==="3"){
        alert ("Correct!");
        alert ("Good game!");
      function nextPlay3() {
        var thirdRound = document.getElementById('round3');
        thirdRound.remove();
        secRound.remove();
        firstRound.remove();
    }
    nextPlay3()
    showBall()
      }else{
        alert ("Please type the numbers 1,2, or 3") 
        shuff3()
      }
    }
  }
  } 
/////////////



  function myMove() {
    var gameBall = document.getElementById("canvas1");
    var gameBall = ball.getContext("2d");
   
    var pos = 375
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 700) {
        clearInterval(id);
      } else {
        pos++; 
        gameBall.style.top = pos + 'px'; 
        gameBall.style.left = pos + 'px'; 
      }
    }
  }






  /////////Replay game button function
      function replayGame(){
        location.reload();
      }
  