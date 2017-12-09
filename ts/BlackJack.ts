/// <reference path="CardGame.ts"/>

class BlackJack extends CardGame implements Gamble, Game {

  player: Player;
  dealer: Player;
  playerBalance: number; //to hold their current balance -> wait for help on this
  bet: number;  //to hold their bet -> wait for help on this
  score: number; //to hold the score of the cards

  displayElement: any;
  userInputElement: any;
  hitButtonHTMLElement: any;
  stayButtonHTMLElement: any;

  constructor(player: Player, dealer: Player) {
    super(); //yelled at me if I didn't have this...
    this.player = player;
    this.dealer = dealer;
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

  public play(): void {

  }

  public takeBet(): void {

  }

}
