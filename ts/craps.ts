/// <reference path="display.ts"/>
///<reference path="die.ts"/>
///<reference path="crapsPlayer.ts"/>
///<reference path="userInput.ts"/>
///<reference path="crapsConsole.ts"/>

class Craps implements Gamble{
  point: number;
  pot: number = 0;
  die: Die;
  crapsPlayer: CrapsPlayer;

  constructor() {
      this.die = new Die();
      this.crapsPlayer = new CrapsPlayer();

  }

  setPoint(pointInput: number){
    this.point = pointInput;
  }

  getPoint():number{
    return this.point;
  }

  setPot(moneyBet: number){
    this.pot = moneyBet;
  }

  getPot():number{
    return this.pot;
  }
  placeBet(moneyToBet: number){
      this.setPot(moneyToBet);
      let tempMoney = this.crapsPlayer.getMoney();
      this.crapsPlayer.setMoney(tempMoney - moneyToBet);

  }
    hasMoneyToMakeBet(moneyToBet: number):boolean{
        if(this.crapsPlayer.getMoney() < moneyToBet){
            return false;
        }
        return true;

    }
    cashInWinnings(){
        this.crapsPlayer.setMoney(this.crapsPlayer.getMoney() + this.getPot() * 2);

    }

  getUserBet() {
      let moneyToBet: number;
      moneyToBet = parseInt(UserInput.userInput.value);
      console.log(moneyToBet);
      if (moneyToBet > this.crapsPlayer.getMoney() || this.crapsPlayer.getMoney() <= 0 || moneyToBet === undefined || moneyToBet.toString() === "") {
          console.log("Error not enough money. Please enter a valid amount.");
          Display.print("Oops. You have to enter a valid bet, you have " + this.crapsPlayer.getMoney());
          UserInput.clearTextBox();
      }
      else {
          this.placeBet(moneyToBet);
          Display.print("Your current bet is " + moneyToBet);
          Display.hideUserInputButtonAndTextBox();
          Display.showRollButton();
          UserInput.clearTextBox();
      }




  }

   rollTheDice(){
      this.die.rollDie();
      if(this.die.diceTotal() > 0){
          if(this.die.diceTotal() == 7 || this.die.diceTotal() == 11){
              this.cashInWinnings();
              Display.print("You win! With a roll of " + this.die.diceTotal() + ". Total money is now " + this.crapsPlayer.getMoney());
              Display.hideRollButton();
              Display.showUserInputButtonAndTextBox();
              return 0;

          }else if (this.die.diceTotal() == 2 || this.die.diceTotal() == 3 || this.die.diceTotal() == 12){
              this.setPot(0);
              Display.print("You lose! With a roll of " + this.die.diceTotal() + ". Total money is now " + this.crapsPlayer.getMoney());
              Display.hideRollButton();
              Display.showUserInputButtonAndTextBox();

          }else {
              this.point = this.die.diceTotal();
              Display.print("New target roll " + this.die.diceTotal());
              this.setRollButtonToSubsequentRolls();
              //document.getElementById("rollButton").setAttribute("onclick", "");
              return 1;
          }
      }

  }

  firstRollLogic():number{
    if(this.die.diceTotal() == 7 || this.die.diceTotal() == 11){
      this.cashInWinnings();
      Display.print("You win! With a roll of " + this.die.diceTotal() + ". Total money is now " + this.crapsPlayer.getMoney());
      return 0;

    }else if (this.die.diceTotal() == 2 || this.die.diceTotal() == 3 || this.die.diceTotal() == 12){
      this.setPot(0);
      Display.print("You lose! With a roll of " + this.die.diceTotal() + ". Total money is now " + this.crapsPlayer.getMoney());

    }else {
      this.point = this.die.diceTotal();
      Display.print("New target roll " + this.die.diceTotal());
      return 1;
    }
  }

  subsequentRollLogic(){
        this.die.rollDie();
        console.log(this.getPoint() + "This is the target roll");
        if(this.die.diceTotal() == this.getPoint()){
          this.cashInWinnings();
          Display.print("Die roll is " + this.die.diceTotal() + ". You Win, total money now " + this.crapsPlayer.getMoney());
          Display.showUserInputButtonAndTextBox();
          Display.hideRollButton();
          this.setRollButtonToFirstRoll();
          Display.print("Enter a new bet");

        }else if (this.die.diceTotal() == 7 || this.die.diceTotal() == 11){
          this.setPot(0);
          Display.print("Die roll is " + this.die.diceTotal() + ". You Lose, total money now " + this.crapsPlayer.getMoney());
          Display.showUserInputButtonAndTextBox();
          Display.hideRollButton();
          this.setRollButtonToFirstRoll();
          Display.print("Enter a new bet");

        }else {
          Display.print("Die roll is " + this.die.diceTotal() + ". You did not hit the target roll, roll again..");
        }
  }

  setRollButtonToFirstRoll(){
      document.getElementById("rollButton").setAttribute("onclick", "crapsGame.rollTheDice()");
  }

  setRollButtonToSubsequentRolls(){
      document.getElementById("rollButton").setAttribute("onclick", "crapsGame.subsequentRollLogic()");
  }


}
