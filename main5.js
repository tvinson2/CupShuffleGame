var myGamePiece;
function shuffleCups1(){
  function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}
    startGame()
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1435;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
}
function changeDirection(){
  if(myGamePiece === myGamePiece(30, 30, "red", 10, 120)){
    myGameArea.clear();
    myGamePiece.x -= 1;
    myGamePiece.update();
  }
}