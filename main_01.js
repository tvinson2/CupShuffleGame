var myGamePiece;

function startGame() {
    myCup1 = new component(30, 30, "blue", 600, 120);
    myCup2 = new component(30, 30, "red", 10, 240);
    myCup3 = new component(30, 30, "green", 10, 360);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1400;
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
    myCup1.x += 2;
    myCup2.x += 2;
    myCup3.x += 2;
    myCup1.update();
    myCup2.update();
    myCup3.update();    
    // if (myCup2.x === 600){
    //   myCup1.x -= 2;
    //   myCup1.update();
    // }else{
    //   updateGameArea()  
    // }

  }
