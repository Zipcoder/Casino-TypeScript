/// <reference path="Player.ts"/>

class Craps implements Game {
  bet: number = 0;
  player: Player;
  playerBalance:number;
  buttonCount:number = 0;
  target:number;

  displayElement: any;
  userInputElement: any;
  submitButtonHTMLElement:any;
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
    this.rollButtonHTMLElement.style.display ="none";
    this.userInputElement.style.display = "";
  }
  takeBet(): void {
    let bet : number = this.userInputElement.value;
    if(bet > this.player.balance){
      console.log("bet denied");
      this.displayElement.innerHTML = "Not Enough Money";
    } else if(bet == null|| bet == 0){
      console.log("bet = null");
      this.displayElement.innerHTML = "Invalid Input";
    }
    else{
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

  private start(): void {
    //while(this.play()){
    console.log("start() function");
    let target: number;
    let rollOne: number = this.roll();
    this.displayElement.innerHTML += "You rolled " + rollOne + "<br />";
    target = rollOne;


    if (rollOne == 7 || rollOne == 11) {
      this.playerWin(this.bet);
    } else if (rollOne == 2 || rollOne == 3 || rollOne == 12) {
      console.log("rollOne not pass");
      this.playerLose(this.bet);
    } else {
      this.displayElement.innerHTML += "Target is now " + rollOne;
      let rollTwo: number = this.roll();
      if (rollTwo === 7) {
        console.log("rollTwo = 7");
        this.displayElement.innerHTML += "Second Roll was 7!";
        this.playerLose(this.bet);
      }
      //  }
    }

  }
  private playAgain(): boolean {
    this.displayElement.innerHTML += "Play Again? Y/N";
    return false;
  }

  private checkRollTwo(rollOne: number, rollTwo: number): number {
    while (rollTwo !== 7) {
      if (rollTwo == rollOne) {
        this.playerWin(this.bet);
        break;
      } else {
        this.displayElement.innerHTML += "<br />Target is " + rollOne;
      }
      rollTwo = this.roll();
      console.log(rollTwo + "rollTwo");
    }
    return rollTwo;
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
    if(this.buttonCount === 1){
      this.target = sum;
      this.displayElement.innerHTML += "<br />Target is now " + sum;
    }
    console.log("rolling " + sum);
    this.displayElement.innerHTML += "<br />You rolled " + diceOne + " and " + diceTwo;
    this.displayElement.innerHTML += "<br />Total " + sum;
    this.updateScroll();

    return sum;
  }

  private playerWin(bet: number): void {
    this.displayElement.innerHTML += "You Win!";
    this.player.balance += bet;
  }
  private playerLose(bet: number): void {
    this.displayElement.innerHTML += "You Lose";
    this.player.balance -= bet;
  }


}
