class Paper {
    constructor(x, y,radius) {
    var options = {
    isStatic:false,
    restitution:0.8,
    friction:0.8,
    density:10
    }
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    push();
    var angle = this.body.angle;
    translate(pos.x,pos.y);
    imageMode(RADIUS);
    fill("blue");
    image(this.image,0,0, this.radius,this.radius);
    pop();
    }
    };  