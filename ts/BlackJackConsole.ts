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

      if (amount > amountAvailableToBet || isNaN(amount)) {
        Utilities.printLine("Invalid Amount, Enter a new bet");
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
      else {
        Utilities.printLine("Invalid Entry, Hit or Stand?");
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

  public displayEndOfRound() {
    Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) +" "+ this.game.getDealer().getHand());
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
      let cashOut: string = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";


      if (cashOut.toUpperCase() == "Y" || _this.currentPlayer.getMoney() == 0) {
        Utilities.printLine("Returning to the Lobby;");
        _this.currentPlayer.cashOut();
        Utilities.clearDisplay();
        let casino = new Casino();
        casino.startCasino();
        this.removeEventListener("click", cashOrContinue);
      }
      else if (cashOut.toUpperCase() == "N") {
        Utilities.clearDisplay();
        Utilities.printLine("How much would you like to bet?");
        _this.i = 2;
        _this.start();
        this.removeEventListener("click", cashOrContinue);
      }
      else {
        Utilities.printLine("Invalid choice. Cash Out? Y or N");
      }

    });
  }

  public getNameOfGame(): string {
    return this.nameOfGame;
  }
}
