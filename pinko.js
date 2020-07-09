class Pinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        this.radius=10;
        World.add(world,this.body)
    }
    display(){
        push()
        //var pos=this.body.position;
        ellipseMode(CENTER);
        fill("white")
        ellipse(this.x,this.y,this.radius,this.radius)
        pop()
    }
}