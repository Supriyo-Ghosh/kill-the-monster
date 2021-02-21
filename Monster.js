class Monster {
    constructor(x,y,width,height) {
      var options = {  
        density:1,     
        frictionAir:1
         
      }
      
      this.width = width;
      this.height = height;
      this.image=loadImage("images/Monster-01.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x, pos.y)
      rotate(angle)  
      rectMode();
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop()
    }
  }
  