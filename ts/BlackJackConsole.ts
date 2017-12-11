import { Console } from './Console';
import { Utilities } from './Utilities';
import { BlackJack } from './BlackJack';
import { Player } from './Player';
import { CardPlayer } from './CardPlayer';
import { BlackJackPlayer } from './BlackJackPlayer';
import { Casino } from './Casino';
export class BlackJackConsole extends Console {

  private nameOfGame: string = "BlackJack";

  private game: BlackJack = new BlackJack(8);
  private currentPlayer: BlackJackPlayer;
  i = 1;

  public start() {

    switch (this.i) {
      case 1:
        this.inputNumPlayers();
        break;
      case 2:
        this.getPlayerName();
        break;
      case 3:
        this.makeBet();
        break;
      case 4:
        this.dealCards();
        break;
      case 5:
        this.hitOrStand();
        break;
      case 6:
        this.dealerHitsUntilFinished();
        this.displayEndOfRound();
        break;
      case 7:
        this.payOutBets();
        this.game.putCardsInDiscardPile();
        this.askContinueOrCashOut();
        break;
      default: Utilities.printLine("Error, returning to lobby.");
        let casino = new Casino();
        casino.startCasino();

    }
  }

  public inputNumPlayers() {
    Utilities.printMenuName("Welcome to " + this.getNameOfGame());
    Utilities.printLine("Enter the number of Players (up to 7)");
    let _this = this;
    Utilities.buttonEle.addEventListener("click", function getName() {
      let length: number = parseInt(Utilities.userInputEle.value);
      Utilities.userInputEle.value = "";
      if (isNaN(length) || length > _this.game.MAX_NUMBER_OF_PLAYERS)
        Utilities.printLine("Invalid selection")
      else {
        Utilities.userInputEle.value = "";
        length > 0 ? _this.game.setNumPlayers(length) : _this.game.setNumPlayers(length + 1);
        _this.i++;
        Utilities.printLine("Enter the name of Player 1");
        this.removeEventListener("click", getName);
        _this.start();
      }
    });
  }

  public getPlayerName() {
    let count = 1;
    let _this = this;
    Utilities.buttonEle.addEventListener("click", function getName() {
      let name: string = Utilities.userInputEle.value;
      if (count < _this.game.getNumPlayers()) {
        Utilities.clearDisplay();
        count++
        Utilities.userInputEle.value = "";
        Utilities.printLine("Welcome, " + name);

        let player = new BlackJackPlayer(name);
        player.setMoney(1000);
        _this.game.addPlayer(player);
        Utilities.printLine("Enter name of Player " + (count));
      }
      else {
        Utilities.clearDisplay();
        Utilities.printLine("Welcome, " + name);
        Utilities.userInputEle.value = "";
        let player = new BlackJackPlayer(name);
        player.setMoney(1000);
        _this.game.addPlayer(player);

        _this.i++;
        _this.currentPlayer = _this.game.getPlayers()[0];
        let amountAvailableToBet = _this.currentPlayer.getMoney();
        Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + amountAvailableToBet);
        Utilities.printLine("How much would you like to bet?");
        this.removeEventListener("click", getName);
        _this.start();
      }
    });
  }

  public makeBet() {
    let playerIndex = 1;
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function getBet() {
      let amountAvailableToBet = _this.currentPlayer.getMoney();
      let amount: number = parseInt(Utilities.userInputEle.value);
      Utilities.userInputEle.value = "";
      if (amount > amountAvailableToBet || isNaN(amount)) {
        Utilities.printLine("Invalid Amount, Enter a new bet");
      }
      else {
        Utilities.clearDisplay();
        Utilities.printLine(_this.currentPlayer.getName() + " bet $" + amount);
        _this.game.takeBet(_this.currentPlayer, amount);
        if (playerIndex < _this.game.getNumPlayers()) {
          _this.currentPlayer = _this.game.getPlayer(playerIndex);
          playerIndex++;
          Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + amountAvailableToBet);
          Utilities.printLine("How much would you like to bet?");
        }
        else {

          Utilities.printLine("Dealing...");
          _this.i++;
          this.removeEventListener("click", getBet);
          _this.start();
        }
      }
    });
  }

  public dealCards() {
    this.game.dealInitialCards();
    this.displayAllHands();
    this.displayDealerFaceUpCard();
    this.i++;
    this.currentPlayer = this.game.getPlayer(0);
    Utilities.printLine(this.currentPlayer.getName() + ", Hit or Stand?");
    this.start()
  }

  public hitOrStand() {
    let playerIndex = 1;
    let _this = this;
    Utilities.buttonEle.addEventListener("click", function hitOrStand() {

      var choice = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";
      if (choice.match(/^(Hit\b|H\b)/gi) != null) {
        Utilities.printLine("Hit");
        _this.game.dealCardToHand(_this.currentPlayer);
        Utilities.printLine(_this.currentPlayer.getHand().toString())
        if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21 && playerIndex < _this.game.getNumPlayers()) {
          Utilities.clearDisplay();
          _this.currentPlayer = _this.game.getPlayer(playerIndex);
          playerIndex++;
          _this.displayAllHands();
          Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
        }
        else if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21) {
          _this.i++;
          _this.currentPlayer = _this.game.getPlayer(0);
          this.removeEventListener("click", hitOrStand);
          _this.start();
        }
        else {
          Utilities.clearDisplay();
          _this.displayAllHands();
          Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
        }
      }
      else if (choice.match(/^(Stand\b|s\b|Stay\b)/gi) != null) {
        Utilities.printLine("Stand");

        if (playerIndex < _this.game.getNumPlayers()) {
          _this.currentPlayer = _this.game.getPlayer(playerIndex);
          playerIndex++;
          Utilities.clearDisplay();
          _this.displayAllHands();
          Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
        }
        else {
          _this.i++;
          _this.currentPlayer = _this.game.getPlayer(0);
          this.removeEventListener("click", hitOrStand);
          _this.start();
        }
      }
      else {
        Utilities.printLine("Invalid Entry, Hit or Stand?");
      }
    });
  }

  public dealerHitsUntilFinished() {
    Utilities.clearDisplay();
    this.displayAllHands();
    this.displayDealerCards();
    while (this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
      (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
      Utilities.printLine("Dealer Hits");
      this.game.dealCardToHand(this.game.getDealer());
      this.displayDealerCards();
    }

  }

  public displayOverTwenty(player:BlackJackPlayer) {
    if (this.game.calculatePlayerScore(player) == 21){
      Utilities.printLine(player.getName() + " got 21!");
    }
    else if (this.game.calculatePlayerScore(player) > 21){
      Utilities.printLine(player.getName() + " busted!");
    }
  }

  public displayDealerFaceUpCard() {
    Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0).getIcon());
  }
  public displayDealerCards() {
    Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().toString());
  }

  public displayAllHands() {
    for (let ind = 0; ind < this.game.getNumPlayers(); ind++) {
      let player = this.game.getPlayer(ind)
      Utilities.printLine(player.getName() + ": " + player.getHand().toString());
      this.displayOverTwenty(player);
    }
  }
  public displayEndOfRound() {
    Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) + " " + this.game.getDealer().getHand());
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
    let _this = this;
    Utilities.buttonEle.addEventListener("click", function cashOrContinue() {
      let cashOut: string = Utilities.userInputEle.value;
      Utilities.userInputEle.value = "";
      if (cashOut.match(/^(Yes\b|Y\b)/gi) != null) {
        _this.currentPlayer.cashOut();
        let casino = new Casino();
        Utilities.clearDisplay();
        this.removeEventListener("click", cashOrContinue);
        casino.startCasino();
      }
      else if (cashOut.match(/^(No\b|N\b)/gi) != null) {
        Utilities.clearDisplay();
        if (_this.currentPlayer.getMoney() == 0) {
          let casino = new Casino();
          Utilities.printLine("You have no more money, returning to lobby...");
          this.removeEventListener("click", cashOrContinue);
          casino.startCasino();
        }
        else {
          Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + _this.currentPlayer.getMoney);
          Utilities.printLine(_this.currentPlayer.getName() + ", how much would you like to bet?");
          _this.i = 3;
          this.removeEventListener("click", cashOrContinue);
          _this.start();
        }
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
