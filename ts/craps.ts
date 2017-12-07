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

  constructor(player: Player) {
    this.player = player
    this.playerBalance = player.balance;
    this.displayElement = document.getElementById("display");
    this.userInputElement = document.getElementById("user_input")
    this.submitButtonHTMLElement = document.getElementById("submit");
    this.rollButtonHTMLElement = document.getElementById("rollButton");
    this.resetButtonHTMLElement = document.getElementById("resetButton");
  }

  init(): void {
    this.resetButtonHTMLElement.style.display = "";
    this.buttonCount = 0;
    this.displayElement.innerHTML = "Welcome to Craps! <br />";
    this.displayElement.innerHTML += "Submit your bet: <br />";
    this.submitButtonHTMLElement.setAttribute("onClick", "craps.takeBet()");
    this.submitButtonHTMLElement.style.display = "";
    this.rollButtonHTMLElement.style.display = "none";
    this.userInputElement.style.display = "";
  }
  takeBet(): void {
    let bet: number = this.userInputElement.value;
    if (bet > this.player.balance) {
      console.log("bet denied");
      this.displayElement.innerHTML = "Not Enough Money";
    } else if (bet == null || bet == 0) {
      console.log("bet = null");
      this.displayElement.innerHTML = "Invalid Input";
    }
    else {
      console.log("Bet accepted");
      this.bet = this.userInputElement.value;
      this.displayElement.innerHTML = "Bet Accepted";
      this.displayElement.innerHTML += "<br />Click Roll to get started!";
      this.submitButtonHTMLElement.style.display = "none";
      this.rollButtonHTMLElement.style.display = "";
      this.userInputElement.style.display = "none";
    }

  }
  play(): boolean {
    var play: boolean = true;
    return play;
  }

  private playAgain(): boolean {
    this.displayElement.innerHTML += "Play Again? Y/N";
    return false;
  }

  updateScroll(): void {
    this.displayElement.scrollTop = this.displayElement.scrollHeight;
  }

  private roll(): number {
    console.log(this.bet + " roll func");

    this.buttonCount++;
    console.log("button count " + this.buttonCount);

    let diceOne: number = Math.floor(Math.random() * 6) + 1;
    let diceTwo: number = Math.floor(Math.random() * 6) + 1;

    let sum = diceTwo + diceOne;
    if (this.buttonCount === 1) {
      this.target = sum;
      this.displayElement.innerHTML += "<br />Target is now " + sum;
    }

    console.log("rolling " + sum);
    this.displayElement.innerHTML += "<br />You rolled " + diceOne + " and " + diceTwo;
    this.displayElement.innerHTML += "<br />Total " + sum;
    this.updateScroll();

    if (this.buttonCount === 1 && (sum == 7 || sum == 11)) {
      console.log("first roll win, 7 or 11")
      this.playerWin(this.bet);
      this.removeRollButton();

    } else if (this.buttonCount === 1 && (sum == 2 || sum == 3 || sum == 12)) {
      console.log("rollOne not pass");
      this.playerLose(this.bet);
      this.removeRollButton();

    } else {
      if (this.buttonCount > 1 && sum == this.target) {
        this.playerWin(this.bet);
        this.removeRollButton();

      } else if (this.buttonCount > 1 && sum == 7) {
        this.playerLose(this.bet);
        this.removeRollButton();
      }
    }

    return sum;
  }
  private removeRollButton() {
    this.rollButtonHTMLElement.style.display = "none";
  }

  private playerWin(bet: number): void {
    this.displayElement.innerHTML += "<br />You Win!";
    this.player.balance += bet;
  }
  private playerLose(bet: number): void {
    this.displayElement.innerHTML += "<br />You Lose";
    this.player.balance -= bet;
  }


}
