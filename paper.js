class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.radius = 55
        this.image=loadImage("paper.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        fill("pink")
        image(this.image,pos.x,pos.y,50,50)
    }
};