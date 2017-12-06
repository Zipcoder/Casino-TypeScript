/// <reference path="display.ts"/>
class Craps implements Gamble{
  point: number;
  pot: number = 0;
  die: Die = new Die();
  crapsPlayer: CrapsPlayer = new CrapsPlayer();
  displayEle: any = document.getElementById("display");

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
  placeBet(moneyToBet: number):number{
    if(this.hasMoneyToMakeBet(moneyToBet)){
      this.setPot(moneyToBet);
      let tempMoney = this.crapsPlayer.getMoney();
      this.crapsPlayer.setMoney(tempMoney - moneyToBet);
      return 0;
    }else{
      Display.print("Not enough money chump, try again. Your balance is " + this.crapsPlayer.getMoney());
      return 1;
    }
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
    do{
        Display.print("DO SOMETHING so we can roll the dice")
        //some sort of input code
        //more input code
        this.die.rollDie();
        if(this.die.diceTotal() == this.getPoint()){
          this.cashInWinnings();
          Display.print("Die roll is " + this.die.diceTotal() + ". You Win, total money now " + this.crapsPlayer.getMoney());
            break;

        }else if (this.die.diceTotal() == 7 || this.die.diceTotal() == 11){
          this.setPot(0);
          Display.print("Die roll is " + this.die.diceTotal() + ". You Lose, total money now " + this.crapsPlayer.getMoney());
            break;

        }else {
          Display.print("Die roll is " + this.die.diceTotal() + ". You did not hit the target roll, roll again..");
        }
    }while (this.die.diceTotal() != this.getPoint());
  }
}
