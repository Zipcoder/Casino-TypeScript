/// <reference path="../Player/blackjackPlayer.ts"/>

class Blackjack extends CardGame{
  player:BlackjackPlayer;
  dealer:BlackjackDealer;
  display:any;
  input:any;
  submit:any;
  pot:number;
  potEle:any;
  blackjackInput:any;
  cardGameEle:any;
  playAgainEle:any;
  constructor(player:Player){
    super();
    this.display = document.getElementById("display");
    this.input = document.getElementById("text_input");
    this.submit = document.getElementById("submit");
    this.player = new BlackjackPlayer(player);
    this.dealer = new BlackjackDealer();
    this.potEle = document.getElementById("pot")
    this.blackjackInput = document.getElementById("blackjack")
    this.cardGameEle = document.getElementById("cardGame");
    this.playAgainEle = document.getElementById("playAgain")
  }

  init():void{
    document.getElementById("header").innerHTML = "Welcome to Blackjack!";
    this.playAgainEle.setAttribute("onclick","casino.blackjack.playAgain()")
    this.takeBet();
  }

  takeBet():void{
    super.createNewDeck();
    this.input.setAttribute("placeholder","BET")
    this.input.setAttribute("type","number")
    this.input.value = "";
    this.submit.setAttribute("onclick","casino.blackjack.inputBet()")
    this.display.innerHTML = "How much would you like to bet?"
  }

  swapHideElements(...elements:any[]):void{
    for (let i = 0; i < elements.length; i++) {
      elements[i].hidden = (elements[i].hidden)? false : true;
    }
  }

  showStart():void{
    this.swapHideElements(this.cardGameEle,this.input,this.submit,this.potEle,this.blackjackInput)
  }

  inputBet():void{
    this.pot = parseInt(this.input.value);
    this.showStart();
    this.input.setAttribute("type","text")
    this.potEle.innerHTML = "Pot: "+this.pot;
    super.dealCards(this.dealer,this.player,2);
    this.playerTurn();
  }

  displayUserInfo():void{
    this.player.displayHand(false);
    this.player.displayScore();
  }

  playerTurn():void{
    this.displayUserInfo()
    console.clear();
    this.dealer.logHand();
    this.displayDealerHand();
  }

  displayDealerHand():void{
    this.setDisplay("Dealer is showing<br>" + this.dealer.getFirstCardImg());
  }

  hit():void{
    super.giveCards(this.player,1);
    if(this.player.getScore()> 21){
      this.setDisplay("Bust");
      this.endGame();
    }else{
      this.playerTurn();
    }
  }

  stay():void{
    this.getDealerFinalScore();
    this.compareScores();
  }

  compareScores():void{
    if((this.player.getScore() ==21 && this.dealer.getScore() != 21) ||
    (this.player.getScore() < 21 && this.dealer.getScore() < this.player.getScore()) ||
    (this.player.getScore() < 21 && this.dealer.getScore() > 21)){
      this.setDisplay("You win");
    }else{
      this.setDisplay("You lose");
    }
    this.endGame();
  }

  endGame():void{
    this.displayUserInfo()
    this.addToDisplay("<br>Dealer has: "+this.dealer.getScore()+"<br>"+this.dealer.getDisplayHand());
    this.swapHideElements(this.potEle,this.playAgainEle,document.getElementById("mainMenu"),document.getElementById("blackjack"))
  }

  playAgain():void{
    this.swapHideElements(this.blackjackInput,this.potEle,this.submit,this.input,this.potEle,this.playAgainEle,document.getElementById("mainMenu"),document.getElementById("blackjack"))
    document.getElementById("cardGame").hidden = true;
    this.player.clearHand();
    this.dealer.clearHand();
    this.takeBet();
  }

  getDealerFinalScore():void{
    while(this.dealer.hitDealer()){
      super.giveCards(this.dealer,1);
    }
  }

  setDisplay(output:string):void{
    this.display.innerHTML = output;
  }
  addToDisplay(output:string):void{
    this.display.innerHTML += output;
  }
}
