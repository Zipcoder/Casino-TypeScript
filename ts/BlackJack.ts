/// <reference path="CardGame.ts"/>

class BlackJack extends CardGame implements Gamble, Game {

  player: BlackJackPlayer;
  dealer: BlackJackDealer;
  hand: Card[];
  playerBalance: number;
  bet: number;
  score: number;

  displayElement: any;
  userInputElement: any;
  submitButtonHTMLElement: any;
  hitButtonHTMLElement: any;
  stayButtonHTMLElement: any;
  greetingElement: any;

  constructor(player: Player, dealer:Player) {
    super();
    this.player = new BlackJackPlayer();
    this.dealer = new BlackJackDealer();
    this.displayElement = document.getElementById("display");
    this.userInputElement = document.getElementById("user_input");
    this.submitButtonHTMLElement = document.getElementById("submit");
    this.greetingElement = document.getElementById("greeting"); 
  }

  public play(): void {
    this.displayElement.innerHTML = "Welcome to Blackjack! <br />";
    this.displayElement.innerHTML += "Submit your bet: <br />";
    this.submitButtonHTMLElement.setAttribute("onClick", "blackjack.takeBet()");
    this.userInputElement.setAttribute("type", "number");
    this.deal(this.player, this.dealer, 2); //deals two cards to my player and dealer hands
  }

  public takeBet(): void {
    let bet: number = this.userInputElement.value;
    if (bet > this.player.balance) {
      console.log("bet denied");
      this.displayElement.innerHTML = "Not Enough Money";
    } else if (bet == null || bet == 0) {
      console.log("bet = 0");
      this.displayElement.innerHTML = "Invalid Input";
    }
    else {
      console.log("Bet accepted " + bet);
      this.bet = this.userInputElement.value;
      this.displayElement.innerHTML = "Bet Accepted";
      this.greetingElement.innerHTML += " <b>Current Bet: </b>$" + this.bet;
    }
  }

  public askForHitOrStay(): void {
    this.displayElement.innerHTML += "Dealer is showing\n"+this.dealer.getHand().pop();
    // let hitOrStay: string;
    do {
      this.player.getHand();
      //print the players current score?
      if(this.player.getScore() >= 21) {
      return;
    }
    this.displayElement.innerHTML += "Would you like to hit or stay?"

    } while(true);
  }

  /*
  public void askForHitOrStay(){
       Console.print("Dealer is showing\n"+dealer.getHand().get(0).toString());
       String hitOrStay;
       do{
           printHand(player);
           Console.print("Score of "+player.getScore() + "\n");
           if(player.getScore()>=21){
               return;
           }
           hitOrStay = Console.getValidString("Would you like to hit or stay?","hit","stay");
           if("hit".equalsIgnoreCase(hitOrStay)){
               player.addCard(deck.getCard());
           }else {
               return;
           }
       }while(true);
   }
  */

}
