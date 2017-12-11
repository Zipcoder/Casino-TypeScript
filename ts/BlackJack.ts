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
      this.displayElement.innerHTML = "Bet Accepted! Let's Play!" + "<br />";
      this.greetingElement.innerHTML += " <b>Current Bet: </b>$" + this.bet;
      this.deal(this.player, this.dealer, 2);
      this.displayDealerHand();
      this.displayElement.innerHTML += "<br />";
      this.displayElement.innerHTML += "<br />";
      this.displayPlayerHand();
      this.hideSubmitButton();
      this.hideUserInputBar();
      this.hideMainMenuButton();
      this.showHitButton();
      this.showStayButton();
    }
  }

  public displayDealerHand() { //only display one card...
    this.displayElement.innerHTML += "Dealer is showing: ";
    for (var i=0; i<this.dealer._hand.length; i++) {
      let cssCards: any = "cssCards";
      let imageURL = this.dealer._hand[i].getImageURL();
      this.displayElement.innerHTML += "<img class=" + cssCards + " src=" + imageURL + ">"
      }
      this.dealer.calculateTotalScore();
      console.log(this.dealer.getScore()); //shows score
  }

  public displayPlayerHand() {
    this.displayElement.innerHTML += "Player is showing: ";
    for (var i=0; i<this.player._hand.length; i++) {
      let imageURL = this.player._hand[i].getImageURL();
      this.displayElement.innerHTML += "<img class=" + "cssCards" + " src=" + imageURL + ">"
    }
    this.player.calculateTotalScore();
    console.log(this.player.getScore()); //shows score
  }

  public hit(): void { //not adding up score...
    this.player.addToHand(this.deck.getCard());
    let imageURL = this.player._hand.pop().getImageURL();
    this.displayElement.innerHTML += "<img class=" + "cssCards" + " src=" + imageURL + ">"
    // this.checkIfScoreOver21();
    this.player.calculateTotalScore();
    console.log(this.player.getScore());
  }

  public stay(): void {
    this.player.calculateTotalScore();
    //dealer play
    //check for Win
    //update Balance
    //check balance amount
  }

  public checkIfScoreOver21() {
    console.log("checkifscoreover21 method");
    this.player.calculateTotalScore();
    console.log(this.player.getScore());
    if(this.player.getScore() > 21) {
      this.checkForWinAndUpdateBalance();
      //display dealer hand to HTML
      //calculate dealers score
      //display the dealers score to HTML
    }
  }

  public checkForWinAndUpdateBalance() {
    if(this.didPlayerWin()) {
      this.displayElement.innerHTML += "PLAYER WINS!";
      this.player.balance = this.player.balance + (this.bet * 1);
    }
    else {
      this.displayElement.innerHTML += "DEALER WINS!";
      let dealerFinalScore = this.dealer.getScore();
      this.displayElement.innerHTML += dealerFinalScore;
      this.player.balance = this.player.balance - (this.bet * 1);
    }
  }

  public dealerPlay(): void {
    while(this.dealer.hitDealer()) {
      this.dealer.addToHand(this.deck.getCard());
    }
  }

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
