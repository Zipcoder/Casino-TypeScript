/// <reference path="Player.ts"/>
/// <reference path="Interfaces/Gamble.ts"/>
/// <reference path="Interfaces/Game.ts"/>

class Craps implements Game,Gamble{
  bet: number = 0;
  player: Player;
  playerBalance: number;
  buttonCount: number = 0;
  target: number;

  displayElement: any;
  userInputElement: any;
  submitButtonHTMLElement: any;
  rollButtonHTMLElement: any;
  resetButtonHTMLElement: any;
  greetingElement: any;
  mainMenuButton: any;
  crapsButtonHTMLElement:any;
  blackJackButtonHTMLElement:any;

  constructor(player: Player) {
    this.player = player;
    this.playerBalance = player.balance;
    this.displayElement = document.getElementById("display");
    this.userInputElement = document.getElementById("user_input")
    this.submitButtonHTMLElement = document.getElementById("submit");
    this.rollButtonHTMLElement = document.getElementById("rollButton");
    this.resetButtonHTMLElement = document.getElementById("resetButton");
    this.mainMenuButton = document.getElementById("mainMenu");
    this.crapsButtonHTMLElement = document.getElementById("crapsButton");
    this.blackJackButtonHTMLElement = document.getElementById("blackJackButton");
  }

  play(): void {
    this.buttonCount = 0;
    this.submitButtonHTMLElement.setAttribute("onClick", "craps.takeBet()");
    this.userInputElement.setAttribute("type", "number");
    this.greetingElement = document.getElementById("greeting");
    this.resetDisplayTo("Welcome to Craps!");
    this.addToDisplay("Submit your bet!",true);
    this.showResetButton();
    this.showSubmitButton();
    this.showUserInputBar();
    this.showMainMenuButton();
    this.hideRollButton();
    this.createUserGreeting();
    this.hideGameButtons();
  }

  takeBet(): void {
    let bet: number = this.userInputElement.value;
    if (bet > this.player.balance) {
      console.log("bet denied");
      this.resetDisplayTo("Not Enough Money");
    } else if (bet == null || bet == 0) {
      console.log("bet = 0");
      this.resetDisplayTo("Invalid Input");
    }
    else {
      console.log("Bet accepted " + bet);
      this.bet = this.userInputElement.value;
      this.greetingElement.innerHTML += " <b>Current Bet: </b>$" + this.bet;
      this.resetDisplayTo("Bet Accepted");
      this.addToDisplay("Click the Die to get started!",true);
      this.hideSubmitButton();
      this.showRollButton();
      this.hideUserInputBar();
      this.hideMainMenuButton();
    }
  }

  updateScroll(): void {
    this.displayElement.scrollTop = this.displayElement.scrollHeight;
  }

  private roll(): void {
    this.buttonCount++;
    console.log("Player Balance: " + this.player.balance);
    console.log("Player Bet: " + this.bet);
    console.log("Button Count: " + this.buttonCount);

    let diceOne: number = this.getRandomNumberOneToSix();
    let diceTwo: number = this.getRandomNumberOneToSix();

    var sum = diceTwo + diceOne;

    if (this.buttonCount === 1) {
      this.target = sum;
      this.addToDisplay("Target is now " + sum,true);
    }

    if (this.buttonCount >= 1) {
      this.hideResetButton();
    }

    console.log("Rolling Dice " + sum);
    this.addToDisplay("You rolled " + diceOne + " and " + diceTwo,true);
    this.addToDisplay("Total " + sum,true);
    this.updateScroll();

    if (this.buttonCount === 1 && (sum == 7 || sum == 11)) {
      console.log("First Roll Win, 7 or 11")
      this.playerWin(this.bet);
      this.hideRollButton();
      this.showResetButton();

    } else if (this.buttonCount === 1 && (sum == 2 || sum == 3 || sum == 12)) {
      console.log("First Roll Lose/not pass");
      this.playerLose(this.bet);
      this.hideRollButton();
      this.showResetButton();

    } else {
      this.checkNextRoll(sum);
    }
  }

  private checkNextRoll(sum: number) {
    if (this.buttonCount > 1 && sum == this.target) {
      this.playerWin(this.bet);
      this.hideRollButton();
      this.showResetButton();

    } else if (this.buttonCount > 1 && sum == 7) {
      this.playerLose(this.bet);
      this.hideRollButton();
      this.showResetButton();
    }
  }

  private showRollButton() {
    this.rollButtonHTMLElement.style.display = "";
  }
  private hideRollButton() {
    this.rollButtonHTMLElement.style.display = "none";
  }

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


  private playerWin(bet: number): void {
    console.log("Player Win");
    this.addToDisplay("You Win!",true);
    this.player.balance = this.player.balance + (bet * 1);
    this.createUserGreeting();
    this.updateScroll();
  }

  private playerLose(bet: number): void {
    console.log("Player Lose");
    this.addToDisplay("You Lose",true);
    this.player.balance = this.player.balance - bet;
    this.createUserGreeting();
    this.updateScroll();
  }

  private getRandomNumberOneToSix():number{
    return Math.floor(Math.random() * 6) + 1;
  }

  private createUserGreeting(): void {
    this.greetingElement.innerHTML = "";
    this.greetingElement.innerHTML += "<b>Name: </b>" + this.player.name.substring(0, 1).toUpperCase() + this.player.name.substring(1), false;
    this.greetingElement.innerHTML += " <b>Age: </b>" + this.player.age, false;
    this.greetingElement.innerHTML += " <b>Money: </b> $" + this.player.balance.toFixed(2), false;
  }

  private static lineBreak(): string {
      return "<br />";
  }

  private addToDisplay(message:string, lineBreak:boolean):void{
    if(lineBreak){
      this.displayElement.innerHTML += Craps.lineBreak() + message;
    }
    else{
      this.displayElement.innerHTML += message;
    }
  }

  private resetDisplayTo(message:string){
    this.displayElement.innerHTML = message;
  }
  private hideGameButtons(){
    this.crapsButtonHTMLElement.style.display = "none";
    this.blackJackButtonHTMLElement.style.display = "none";
  }
}
