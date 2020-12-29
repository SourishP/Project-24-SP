class Paper{
    constructor(x,y,r){
        var options={
        isStatic:false,
        restitution:0.5,
        friction:0.5,
        density:0.8,

        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);

    }

    display(){

        var positionPaper=this.body.position;

        push();
        translate(positionPaper.x,positionPaper.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("Blue")
        fill("Violet");
        ellipse(0,0,this.r,this.r);
        pop();


    }

}