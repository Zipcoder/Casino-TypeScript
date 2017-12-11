
class BlackjackPlayer extends CardPlayer{
  player:Player;
  constructor(player:Player){
    super();
    this.player = player;
  }

  displayScore():void{
    document.getElementById("userNameHand").innerHTML = "User Hand Score: "+ this.getScore()
  }

  getScore():number{
    let total:number = 0;
    for (let i = 0; i < super.getHand().length; i++) {
        total += super.getHand()[i].getNumValue();
    }
    if(this.aceInHand() && total <= 11){
      total += 10;
    }
    return total;
  }

  aceInHand():boolean{
    for (let i = 0; i < super.getHand().length; i++) {
        if(super.getHand()[i].getNumValue() == 1){
          return true;
        }
    }
    return false;
  }
}
