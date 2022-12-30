let thePlayer = document.getElementById("player");
let theGoal = document.getElementById("goal");
let theScore = document.getElementById('score');
let theBtn = document.querySelector("button");

let s = 0; 


class Element{
    //properties
    shape;
    x;
    y;

    //constructor
    constructor(shape ,  x , y){
        this.shape = shape;
        this.x = x;
        this.y = y;

        this.shape.style.top = this.y + "px";
        this.shape.style.left = this.x + "px";
    
    }

}


class Player extends Element{
    //properties
    
    //constructor
    constructor(shape , x , y){
      super(shape , x , y);
    }

    //methods
    moveUp(){
     this.y -=20;
     this.shape.style.top =  this.y + "px";
    }

    moveDown(){
     this.y += 20;
     this.shape.style.top =  this.y + "px";
    }

    moveLeft(){
      this.x -=20;
      this.shape.style.left = this.x + "px";
    }
    moveRight(){
      this.x +=20;
      this.shape.style.left = this.x + "px"
    }



}

class Goal extends Element{
    //properties

    //constructor
    constructor(shape , x , y){
        super(shape ,  x , y);
    }

    //methods
    appdisappear(){
        this.x = getRandomDimen(window.innerWidth - 20);
        this.y = getRandomDimen(window.innerHeight - 20);

        this.shape.style.top = this.y +"px";
        this.shape.style.left = this.x + "px";
    }
}


//Function Get Random Dimensiens
function getRandomDimen(dimen){
  let di = Math.round(Math.random() * dimen);
  let val = di - (di % 20);
  return val;
}

//Player 
let player = new Player(thePlayer , getRandomDimen(window.innerWidth - 20 ), getRandomDimen(window.innerHeight - 20 )  );
//Goal
let goal = new Goal(theGoal ,getRandomDimen(window.innerWidth - 20 ), getRandomDimen(window.innerHeight - 20 ));


//Action 
window.addEventListener("keydown" , (e) => {
  
    switch (e.keyCode) {
        case 38 :
            if(player.y > 0)
            player.moveUp();
            break;
    
        case 40 : 
            if(player.y < window.innerHeight - 22)
            player.moveDown();
            break;
        
        case 39 :
            if(player.x < window.innerWidth - 32)
            player.moveRight();
            break;
        
        case 37 :
            if(player.x > 0)
            player.moveLeft();
            break;
        default :
            console.log("Move Please !");
    }

    //Player Find Goal
    if(player.x === goal.x && player.y === goal.y){
        
        s = s + 20;
        theScore.textContent = s ; 
        goal.appdisappear();
    }
});


//Play Again
 theBtn.addEventListener("click" , () => {
    window.location.reload()
}); 






