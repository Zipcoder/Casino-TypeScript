import { Console } from './Console';
import { Utilities } from './Utilities';
import { BlackJack } from './BlackJack';
import { Player } from './Player';
import { CardPlayer } from './CardPlayer';
import { BlackJackPlayer } from './BlackJackPlayer';
import { Casino } from './Casino';
export class BlackJackConsole extends Console {

  private nameOfGame: string = "BlackJack";

  private game: BlackJack = new BlackJack(1);
  private currentPlayer: BlackJackPlayer;
  i = 1;

  public start() {

    switch (this.i) {
      case 1:
        console.log("case1");
        this.getPlayerName();
        break;
      case 2:
        this.makeBet();
        break;
      case 3:
        this.hitOrStand();
        break;
      case 4:
        this.dealerHitsUntilFinished();
        this.displayEndOfRound();

        break;
      case 5:
      this.payOutBets();
      this.game.putCardsInDiscardPile();
      this.askContinueOrCashOut();
        break;
      default: Utilities.printLine("done" + this.currentPlayer.getHand().toString())
    }
  }

  public getPlayerName() {
    Utilities.printMenuName("Welcome to " + this.getNameOfGame());
    Utilities.printLine("Enter name of Player");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function getName() {
      var name: string = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";
      Utilities.printLine("Welcome, " + name);

      _this.currentPlayer = new BlackJackPlayer(name);
      var players: BlackJackPlayer[] = [_this.currentPlayer];
      _this.game.addPlayers(players);
      _this.currentPlayer.setMoney(1000);
      _this.i++;
      // _this.currentPlayer = _this.game.getPlayers()[0];
      var amountAvailableToBet = _this.currentPlayer.getMoney();
      Utilities.printLine("You have $" + amountAvailableToBet);
      Utilities.printLine("How much would you like to bet?");
      _this.start();
      this.removeEventListener("click", getName);

    });
  }

  public makeBet() {
    var amountAvailableToBet = this.currentPlayer.getMoney();
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function getBet() {
      var amount: number = parseInt(Utilities.userInputEle.value);
      Utilities.userInputEle.value = "";
      if (amount > amountAvailableToBet || amount == NaN) {
        Utilities.printLine("Invalid Amount");
      }
      else {
        Utilities.printLine("You bet $" + amount);
        _this.game.takeBet(_this.currentPlayer, amount);
        _this.i++;
        _this.dealCards();
        this.removeEventListener("click", getBet);
      }
    });
  }

  public dealCards() {
    this.game.dealInitialCards();
    Utilities.printLine(this.currentPlayer.getHand().toString())
    this.displayDealerFaceUpCard();
    Utilities.printLine("Hit or Stand?");
    this.start()
    // this.hitOrStand();
  }

  public hitOrStand() {

    var _this = this;
    Utilities.buttonEle.addEventListener("click", function hitOrStand() {
      var choice = Utilities.userInputEle.value.toUpperCase();
      Utilities.userInputEle.value = "";
      if (choice == "HIT") {
        Utilities.printLine("Hit");
        _this.game.dealCardToHand(_this.currentPlayer);
        Utilities.printLine(_this.currentPlayer.getHand().toString())
        if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21) {
          _this.i++;
          _this.start();
          this.removeEventListener("click", hitOrStand);
        }
        else {
          Utilities.printLine("Hit or Stand?");
          _this.start();
          this.removeEventListener("click", hitOrStand);
        }
      }
      else if (choice == "STAND") {
        Utilities.printLine("Stand");
        _this.i++;
        _this.start();
        this.removeEventListener("click", hitOrStand);
      }
    });
  }

  public dealerHitsUntilFinished() {

    this.displayDealerCards();
    while (this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
      (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
      this.displayDealerCards()
      this.game.dealCardToHand(this.game.getDealer());
    }

  }

  public displayDealerFaceUpCard() {
    Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0).getIcon());
  }
  public displayDealerCards() {
    Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().toString());
  }

  /////
  public determineWinners() {

  }

  public setUpGame() {
    // Utilities.printMenuName("Welcome to " + this.getNameOfGame());
    // let numPlayers:number = this.getNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
    // let playerNames:string[] = this.getPlayerNames(numPlayers);
    // let players:Array<BlackJackPlayer>  = [];
    // for(let name in playerNames) {
    //     let player:BlackJackPlayer  = new BlackJackPlayer(playerNames[name]);
    //     players.push(player);
    // }
    // this.game.addPlayers(players);
    // this.getPlayerChips(this.game);
  }

  public playRound() {
    // for(let p in this.game.getPlayers()) {
    //   let player =this.game.getPlayers[p];
    //     if(player.getMoney() > 0) {
    //         this.makeBet(player);
    //     }
    // }
    //
    // Utilities.printLine("<br/> Dealing cards...<br/>");
    this.game.dealInitialCards();
    //
    this.displayDealerFaceUpCard();
    //
    // for(let currentPlayerIndex = 0; currentPlayerIndex < this.game.getNumPlayers(); currentPlayerIndex++) {
    //     let currentPlayer = this.game.getPlayers()[currentPlayerIndex];
    //     if(this.game.getBets()[currentPlayer.id]!=undefined) {
    //       let playerNumber = currentPlayerIndex + 1;
    //       Utilities.printLine("Player " + playerNumber + ", " + currentPlayer.getName() + " turn:");
    //       this.playerTakeTurn(currentPlayer);
    //     }
    // }
    this.dealerHitsUntilFinished();
    this.displayEndOfRound();
    this.payOutBets();
    this.game.putCardsInDiscardPile();
    this.askContinueOrCashOut();
  }



  public playerTakeTurn(player: BlackJackPlayer) {
    // let finishedTurn = false;
    // while(!finishedTurn) {
    //     Utilities.printLine("Your cards: " + player.getHand());
    //     finishedTurn = this.hitOrStay();
    // }
    // Utilities.printLine("");
  }

  public makeBetDepreciated(player: BlackJackPlayer) {
    // let amountAvailableToBet = player.getMoney();
    // let amount = 0.0;
    // let isValidInput = false;
    // while(!isValidInput) {
    //     amount = Utilities.getMoneyInput(player.getName() + ", how much would you like to bet?");
    //     if(amount <= amountAvailableToBet) {
    //         isValidInput = true;
    //     } else {
    //         Utilities.printLine("Sorry you do not have that much money to bet.");
    //     }
    // }
    // this.game.takeBet(player, amount);
  }

  public hitOrStay(): boolean {
    // if(this.game.calculatePlayerScore(this.currentPlayer) == 21) {
    //     Utilities.printLine("21!!");
    //     return true;
    // }
    // let toHit = Utilities.getYesOrNoInput("Do you want to hit? Y or N");
    // if(toHit) {
    //     this.game.dealCardToHand(this.currentPlayer);
    // } else {
    //     return true;
    // }
    // if(this.game.playerHasBust(this.currentPlayer)) {
    //     Utilities.printLine("Bust! " + this.currentPlayer.getHand());
    //     return true;
    // }
    return false;
  }



  public displayEndOfRound() {
    Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) + this.game.getDealer().getHand());
    for (let p in this.game.getPlayers()) {
      let player: BlackJackPlayer = this.game.getPlayers()[p];
      if (this.game.getBets()[player.id]) {
        Utilities.printLine(player.getName() + " score: " + this.game.calculatePlayerScore(player) +
          " " + player.getHand());
      }
    }
    Utilities.printLine("");
    this.i++;
    this.start();
  }

  public payOutBets() {
    this.game.determineWinners();
    this.game.payOutBets();
  }

  public askContinueOrCashOut() {
    Utilities.printLine(this.game.printPlayersMoney());
    Utilities.printLine(this.currentPlayer.getName() + ", Cash Out? Y or N");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function cashOrContinue() {
      // Utilities.printLine(this.game.printPlayersMoney());
      // Utilities.printLine(_this.currentPlayer.getName() + ", Cash Out? Y or N");
      let cashOut: string = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";
      if (_this.currentPlayer.getMoney() > 0) {
        if (cashOut.toUpperCase() == "Y") {
          _this.currentPlayer.cashOut();
          let casino = new Casino();
          casino.startCasino();
          this.removeEventListener("click", cashOrContinue);
        }
        else {
          Utilities.printLine("How much would you like to bet?");
          _this.i = 2;
          _this.start();
          this.removeEventListener("click", cashOrContinue);
        }
      }
    });

    // for(let p in this.game.getPlayers()) {
    //   let player = this.game.getPlayers()[p];
    //     if(player.getMoney() > 0) {
    //         let cashOut = Utilities.getYesOrNoInput(player.getName() + ", Cash Out? Y or N");
    //         if(cashOut) {
    //             player.cashOut();
    //         }
    //         else()
    //     }
    // }
  }


  public getNameOfGame(): string {
    return this.nameOfGame;
  }
}
