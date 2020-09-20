class Ground {
    constructor(x, y, width, height) {
    var options = {
    isStatic:true,    
    restitution:0.8,
    friction:0.3,
    density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    rectMode(CENTER);
    fill("yellow");
    rect(this.x, this.y, this.width, this.height);
    }
    }; 