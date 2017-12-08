import {Utilities} from './Utilities'
import {Console} from './Console'
import {Craps} from './Craps'
import {CrapsPlayer} from './CrapsPlayer'

export class CrapsConsole extends Console {

  game = new Craps();
  currentPlayer: CrapsPlayer;

  currentPlayerIndex = 0;
  i = 1;

  continueRolling = true;

  start() {
    switch(this.i) {
      case 1:
        this.getPlayerName();
        break;
      case 2:
        this.makeBet();
        break;
      case 3:
        this.betOnPassOrDontPass();
        break;
      case 4:
        this.comeOutRoll();
        break;
      case 5:
        this.rollForPoint();
        break;
      case 6:
        this.playAgain();
        break;
    }
  }

  getPlayerName() {
    Utilities.printMenuName("Welcome to " + this.getNameOfGame());
    Utilities.printLine("Enter name of Player");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function getName() {
      var name: string = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";
      Utilities.printLine("Welcome, " + name);
      var players: CrapsPlayer[] = [];
      players.push(new CrapsPlayer(name));
      _this.game.addPlayers(players);
      _this.game.getPlayers()[0].setMoney(1000);
      _this.i++;
      _this.currentPlayer = _this.game.getPlayers()[0];
      var amountAvailableToBet = _this.currentPlayer.getMoney();
      Utilities.printLine("You have $" + amountAvailableToBet);
      Utilities.printLine("How much would you like to bet?");
      _this.start();
      this.removeEventListener("click", getName);
    });
  }

  makeBet() {
    var amountAvailableToBet = this.currentPlayer.getMoney();
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function getBet() {
      var amount: number = parseInt(Utilities.userInputEle.value);
      Utilities.userInputEle.value = "";
      console.log(amount);
      if(amount > amountAvailableToBet) {
        console.log("too much");
        Utilities.printLine("Sorry you do not have that much money to bet.");
      }
      else {
        Utilities.printLine("You bet $" + amount);
        _this.game.takeBet(_this.currentPlayer, amount);
        _this.i++;
        Utilities.printLine("Place bet on Pass or Don't Pass?");
        _this.start();
        this.removeEventListener("click", getBet);
      }
    });
  }

  betOnPassOrDontPass() {
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function pass() {
      var input: string = Utilities.userInputEle.value.toUpperCase();
      Utilities.userInputEle.value = "";
      if(input != "PASS" && input != "DON'T PASS") {
        Utilities.printLine("Try again");
      }
      else {
        if(input === "PASS") {
          Utilities.printLine("You bet on Pass");
          _this.game.putPlayerOnPass(_this.currentPlayer);
        }
        else {
          Utilities.printLine("You bet on Don't Pass");
          _this.game.putPlayerOnDontPass(_this.currentPlayer);
        }
        Utilities.printLine("Click to roll dice");
        _this.i++;
        _this.start();
        this.removeEventListener("click", pass);
      }
    });
  }

  comeOutRoll() {
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function roll() {
      _this.game.rollDice();
      var rollSum = _this.game.getSumOfDice();
      Utilities.printLine("You rolled a " + rollSum + " " + _this.game.getDice().printDice());
      var comeOutRollEndsRound: boolean;
          switch (rollSum) {
              case 2:
              case 3:
              case 12:
                  _this.game.setPassBetsWin(false);
                  comeOutRollEndsRound = true;
                  break;
              case 7:
              case 11:
                  _this.game.setPassBetsWin(true);
                  comeOutRollEndsRound = true;
                  break;
              case 4:
              case 5:
              case 6:
              case 8:
              case 9:
              case 10:
                  _this.game.setPoint(rollSum);
                  comeOutRollEndsRound = false;
                  break;
          }
      if(!comeOutRollEndsRound) {
        Utilities.printLine("Rolling for point: " + _this.game.getPoint());
        Utilities.printLine("Click to roll dice");
        _this.i++;
        _this.start();
        this.removeEventListener("click", roll);
      }
      else {
        _this.i += 2;
        _this.start();
        this.removeEventListener("click", roll);
      }
    });
  }

  rollForPoint() {
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function rollAgain() {
      _this.game.rollDice();
      var rollSum = _this.game.getSumOfDice();
      Utilities.printLine("You rolled a " + rollSum + " " + _this.game.getDice().printDice());
      if(rollSum == _this.game.getPoint() || rollSum == 7) {
        _this.continueRolling = false;
      }

      if(!_this.continueRolling) {
        if(rollSum === _this.game.getPoint()) {
          _this.game.setPassBetsWin(true);
        }
        else {
          _this.game.setPassBetsWin(false);
        }
        _this.i++;
        _this.start();
        this.removeEventListener("click", rollAgain);
      }
      else {
        _this.start();
        this.removeEventListener("click", rollAgain);
      }
    });
  }

  payOutBets() {
    if(this.game.isPassBetsWin()) {
      if(this.game.getPlayersOnPass().length > 0) {
        Utilities.printLine("Congratulations, the bets on PASS win!");
      }
      else {
        Utilities.printLine("Sorry, you lost.");
      }
    }
    else {
      if(this.game.getPlayersOnDontPass().length > 0) {
        Utilities.printLine("Congratulations, the bets on DON'T PASS win!");
      }
      else {
        Utilities.printLine("Sorry, you lost.");
      }
    }
    this.game.payOutBets();
  }

  playAgain() {
    this.payOutBets();
    if(this.currentPlayer.getMoney() <= 0) {
      Utilities.printLine("Sorry, you are out of money.");
    }
    else {
      Utilities.printLine("Play again? Y or N");
      var _this = this;
      Utilities.buttonEle.addEventListener("click", function playAgain() {
        var input: string = Utilities.userInputEle.value.toUpperCase();
        Utilities.userInputEle.value = "";
        if(input != "Y" && input != "N") {
          Utilities.printLine("Try again");
        }
        else {
          if(input === "Y") {
            Utilities.clearDisplay();
            var amountAvailableToBet = _this.currentPlayer.getMoney();
            Utilities.printLine("You have $" + amountAvailableToBet);
            Utilities.printLine("How much would you like to bet?");
            _this.i = 2;
            this.removeEventListener("click", playAgain);
            _this.start();
          }
          else {
            this.removeEventListener("click", playAgain);
          }

        }
      });
    }
  }

  getNameOfGame() {
    return "Craps";
  }

}
