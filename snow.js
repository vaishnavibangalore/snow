class Snow{
    constructor(x,y,r) {
        var options = {
            density:2 , 
            friction:3 ,
            frictionAir:1 , 
            

        }
        this.body = Matter.Bodies.circle(
            x,y,r,options
        )
        Matter.World.add(
            world ,this.body
        )
        this.Image = loadImage("snow4.webp")
        this.r = r 
    }
    display(){
        push()
        imageMode(CENTER);
        image (this.Image ,this.body.position.x ,this.body.position.y ,this.r)
        pop();
    }


}