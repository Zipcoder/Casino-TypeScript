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
    this.hitButtonHTMLElement = document.getElementById("hitButton");
    this.stayButtonHTMLElement = document.getElementById("stayButton");
  }

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
      this.greetingElement.innerHTML += " <b>Current Bet: </b>$" + this.bet + "<br />";
      this.deal(this.player, this.dealer, 2);
      this.displayDealerHand();
      this.displayElement.innerHTML += "<br />";
      this.displayPlayerHand();
      this.hideSubmitButton();
      this.hideUserInputBar();
      this.hideMainMenuButton();
      this.showHitButton();
      this.showStayButton();
    }
  }

  public displayDealerHand() { //we would only want to display one card...
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
      let imageURL = this.player._hand[i].getImageURL();
      this.displayElement.innerHTML += "<img class=" + "cssCards" + " src=" + imageURL + ">"
    }
  }

  public hit(): void {
    this.player.addToHand(this.deck.getCard());
    let imageURL = this.player._hand.pop().getImageURL();
    this.displayElement.innerHTML += "<img class=" + "cssCards" + " src=" + imageURL + ">"
    this.checkIfScoreOver21();
  }

  public stay(): void {
    // calculate score
    //dealer play
    //check for Win
    //update Balance
    //check balance amount
  }

  public checkIfScoreOver21() {
    this.player.calculateTotalScore();
    if(this.player.getScore() > 21) {
      this.checkForWinAndUpdateBalance();
      //display dealer hand to HTML
      //calculate dealers score
      //display the dealers score to HTML
    }
  }

  /*
  this.player.calculateScore();
       if (this.player.getScore() > 21) {
           this.checkForWin();
           this.ui.displayHand(this.dealer);
           this.dealer.calculateScore();
           this.ui.displayScore(this.dealer);
       }
  */

  public checkForWinAndUpdateBalance() {
    if(this.didPlayerWin()) {
      this.displayElement.innerHTML += "PLAYER WINS!";
      this.player.addToBalance(); //need to work on this. 
    }
    else {
      this.displayElement.innerHTML += "DEALER WINS!";
      let dealerFinalScore = this.dealer.getScore();
      this.displayElement.innerHTML += dealerFinalScore;
    }
  }

  /*
  public void checkWin(){
      if(playerWins()){
          Console.print("Player wins\n");
          casinoplayer.addToBalance(pot);
      }else{
          Console.print("Dealer wins\n");
      }
      Console.print("Dealer had\n"+dealer.getStringDisplayHand());
      Console.print("Score of "+dealer.getScore());
  }
  */


  public didPlayerWin(): boolean {
    let playerScore = this.player.getScore();
    let dealerScore = this.dealer.getScore();
    if ((playerScore === 21 && dealerScore != 21) ||
    (playerScore < 21 && dealerScore < playerScore) ||
    (playerScore < 21 && dealerScore > 21)) {
      return true;
    }
    return false;
  }

  //reset button
  private hideResetButton() {
    this.resetButtonHTMLElement.style.display = "none";
  }
  private showResetButton() {
    this.resetButtonHTMLElement.style.display = "";
  }

  //submit button
  private hideSubmitButton() {
    this.submitButtonHTMLElement.style.display = "none";
  }
  private showSubmitButton() {
    this.submitButtonHTMLElement.style.display = "";
  }

  //main menu button
  private showMainMenuButton() {
    this.mainMenuButton.style.display = "";
  }
  private hideMainMenuButton() {
    this.mainMenuButton.style.display = "none";
  }

  //user input button
  private hideUserInputBar() {
    this.userInputElement.style.display = "none";
  }
  private showUserInputBar() {
    this.userInputElement.style.display = "";
  }

  //hit button
  private hideHitButton() {
    this.hitButtonHTMLElement.style.display = "none";
  }
  private showHitButton() {
    this.hitButtonHTMLElement.style.display = "";
  }

  //stay
  private hideStayButton() {
    this.stayButtonHTMLElement.style.display = "none";
  }
  private showStayButton() {
    this.stayButtonHTMLElement.style.display = "";
  }

}
