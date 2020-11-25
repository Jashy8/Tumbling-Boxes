class Box{
    constructor(x,y,width,height){
        // properties of the class go here
        var options={
            restitution: 0.5, 
            friction: 1,
            desity: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    // functions go here
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(255,236,78);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}