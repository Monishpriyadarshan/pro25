class Paper extends BaseClass {
    constructor(x,y){
      super(x,y,25,25);
      this.image = loadImage("paper.png");
    }
  
    display() {
      super.display();
    }
  }