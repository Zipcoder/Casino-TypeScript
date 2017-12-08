/// <reference path="Player.ts"/>

class Craps implements Game {
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

  constructor(player: Player) {
    this.player = player;
    this.playerBalance = player.balance;
    this.displayElement = document.getElementById("display");
    this.userInputElement = document.getElementById("user_input")
    this.submitButtonHTMLElement = document.getElementById("submit");
    this.rollButtonHTMLElement = document.getElementById("rollButton");
    this.resetButtonHTMLElement = document.getElementById("resetButton");
    this.mainMenuButton = document.getElementById("mainMenu");
  }

  init(): void {
    this.buttonCount = 0;
    this.displayElement.innerHTML = "Welcome to Craps! <br />";
    this.displayElement.innerHTML += "Submit your bet: <br />";
    this.submitButtonHTMLElement.setAttribute("onClick", "craps.takeBet()");
    this.userInputElement.setAttribute("type", "number");
    this.greetingElement = document.getElementById("greeting");
    this.showResetButton();
    this.showSubmitButton();
    this.showUserInputBar();
    this.showMainMenuButton();
    this.hideRollButton();
  }

  takeBet(): void {
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
      this.displayElement.innerHTML += "<br />Click Roll to get started!";
      this.greetingElement.innerHTML += " <b>Current Bet: </b>$" + this.bet;
      this.hideSubmitButton();
      this.showRollButton();
      this.hideUserInputBar();
      this.hideMainMenuButton();
    }

  }
  play(): boolean {
    var play: boolean = true;
    return play;
  }

  updateScroll(): void {
    this.displayElement.scrollTop = this.displayElement.scrollHeight;
  }

  private roll(): number {
    console.log("Player Balance: " + this.player.balance);
    console.log("Player Bet: " + this.bet);

    this.buttonCount++;

    console.log("Button Count: " + this.buttonCount);

    let diceOne: number = Math.floor(Math.random() * 6) + 1;
    let diceTwo: number = Math.floor(Math.random() * 6) + 1;

    let sum = diceTwo + diceOne;
    if (this.buttonCount === 1) {
      this.target = sum;
      this.displayElement.innerHTML += "<br />Target is now " + sum;
    }

    if (this.buttonCount >= 1) {
      this.hideResetButton();
    }

    console.log("Rolling Dice " + sum);
    this.displayElement.innerHTML += "<br />You rolled " + diceOne + " and " + diceTwo;
    this.displayElement.innerHTML += "<br />Total " + sum;
    this.updateScroll();

    if (this.buttonCount === 1 && (sum == 7 || sum == 11)) {
      console.log("First Roll Win, 7 or 11")
      this.playerWin(this.bet);
      this.hideRollButton();
      this.showResetButton();

    } else if (this.buttonCount === 1 && (sum == 2 || sum == 3 || sum == 12)) {
      console.log("First Roll not pass");
      this.playerLose(this.bet);
      this.hideRollButton();
      this.showResetButton();

    } else {
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
    return sum;
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
    this.displayElement.innerHTML += "<br />You Win!";
    this.player.balance = this.player.balance + (bet * 1);
    this.createUserGreeting();
    this.updateScroll();
  }

  private playerLose(bet: number): void {
    console.log("Player Lose");
    this.displayElement.innerHTML += "<br />You Lose";
    this.player.balance = this.player.balance - bet;
    this.createUserGreeting();
    this.updateScroll();
  }

  private createUserGreeting(): void {
    this.greetingElement.innerHTML = "";
    this.greetingElement.innerHTML += "<b>Name: </b>" + this.player.name.substring(0, 1).toUpperCase() + this.player.name.substring(1), false;
    this.greetingElement.innerHTML += " <b>Age: </b>" + this.player.age, false;
    this.greetingElement.innerHTML += " <b>Money: </b> $" + this.player.balance.toFixed(2), false;
  }
}
