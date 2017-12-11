/// <reference path="CardGame.ts"/>

class BlackJack extends CardGame implements Gamble, Game {

  player: BlackJackPlayer;
  dealer: BlackJackDealer;
  playerBalance: number;
  bet: number;
  score: number;

  displayElement: any;
  userInputElement: any;
  submitButtonHTMLElement: any;
  hitButtonHTMLElement: any;
  stayButtonHTMLElement: any;
  resetButtonHTMLElement: any;
  mainMenuButton: any;

  greetingElement: any;

  constructor(player: Player, dealer: Player) {
    super();
    this.player = new BlackJackPlayer(player);
    this.dealer = new BlackJackDealer(dealer);
    this.displayElement = document.getElementById("display");
    this.userInputElement = document.getElementById("user_input");
    this.submitButtonHTMLElement = document.getElementById("submit");
    this.greetingElement = document.getElementById("greeting");
    this.resetButtonHTMLElement = document.getElementById("resetButton");
    this.mainMenuButton = document.getElementById("mainMenu");
  }

  /*
  askForHitOrStay();
  dealerPlay();
  checkWin();
  if(playAgain()){
      play();
  }else{
      gameOptions();
  }
}
  */

  /*
  to display player and dealer hands
  this.deal(this.player, this.dealer, 2);
  this.displayDealerHand();
  this.displayElement.innerHTML += "<br />";
  this.displayPlayerHand();
  */

  public play(): void {
    this.displayElement.innerHTML = "Welcome to Blackjack! <br />";
    this.displayElement.innerHTML += "Submit your bet: <br />";
    this.submitButtonHTMLElement.setAttribute("onClick", "blackjack.takeBet()");
    this.userInputElement.setAttribute("type", "number");
    this.showResetButton();
    this.showSubmitButton();
    this.showUserInputBar();
    this.showMainMenuButton();
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
      this.deal(this.player, this.dealer, 2);
      this.displayDealerHand();
      this.displayElement.innerHTML += "<br />";
      this.displayPlayerHand();
      this.hideSubmitButton();
      this.hideUserInputBar();
      this.hideMainMenuButton();
    }
  }

  public displayDealerHand() {
    console.log(this.dealer._hand.length);
    this.displayElement.innerHTML += "Dealer is showing: ";
    for (var i=0; i<this.dealer._hand.length; i++) {
      let cssCards: any = "cssCards";
      let imageURL = this.dealer._hand[i].getImageURL();
      this.displayElement.innerHTML += "<img class=" + cssCards + " src=" + imageURL + ">"
      }
  }

  public displayPlayerHand() {
    console.log(this.player._hand.length);
    this.displayElement.innerHTML += "Player is showing: ";
    for (var i=0; i<this.player._hand.length; i++) {
      let cssCards: any = "cssCards";
      let imageURL = this.player._hand[i].getImageURL();
      this.displayElement.innerHTML += "<img class=" + cssCards + " src=" + imageURL + ">"
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

  private hideResetButton() {
    this.resetButtonHTMLElement.style.display = "none";
  }
  private showResetButton() {
    this.resetButtonHTMLElement.style.display = "";
  }

  private hideSubmitButton() {
    this.submitButtonHTMLElement.style.display = "none";
  }
  private showSubmitButton() {
    this.submitButtonHTMLElement.style.display = "";
  }

  private showMainMenuButton() {
    this.mainMenuButton.style.display = "";
  }
  private hideMainMenuButton() {
    this.mainMenuButton.style.display = "none";
  }

  private hideUserInputBar() {
    this.userInputElement.style.display = "none";
  }
  private showUserInputBar() {
    this.userInputElement.style.display = "";
  }

}
