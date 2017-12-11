import {Console} from './Console';
import {GoFish} from './GoFish';
import {GoFishPlayer} from './GoFishPlayer';
import {Utilities} from './Utilities';
import {Card} from './Card';
import {CardPile} from './CardPile';

export class GoFishConsole extends Console {

  game = new GoFish();
  numPlayers: number;
  playerNames: string[] = [];

  i = 1;

  start() {
    switch(this.i) {
      case 1:
        this.inputNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
        break;
      case 2:
        this.inputPlayerNames();
        break;
      case 3:
        this.dealInitialCards();
        break;
      case 4:
        this.playRoundsUntilAllBooksPlayed();
        break;
    }
  }

  inputNumPlayers(min: number, max: number) {
    Utilities.printMenuName("Welcome to " + this.getNameOfGame());
    if(min === max) {
      Utilities.printLine("This game is played with " + min + " players.");
      this.numPlayers = min;
    }
    else {
      Utilities.printLine("How many players? May have " + min + " to " + max + " players.");
      var _this = this;
      Utilities.buttonEle.addEventListener("click", function inputNumber() {
        let input: number = parseInt(Utilities.userInputEle.value);
        Utilities.userInputEle.value = "";
        if(input >= min && input <= max) {
          _this.numPlayers = input;
          _this.i++;
          this.removeEventListener("click", inputNumber);
          _this.start();
        }
        else {
          Utilities.printLine("Invalid input");
          this.removeEventListener("click", inputNumber);
          _this.start();
        }
      });
    }
  }

  inputPlayerNames() {
    let nextPlayerIndex = this.playerNames.length + 1;
    if(nextPlayerIndex <= this.numPlayers) {
      Utilities.printLine("Enter name of Player " + nextPlayerIndex);
      var _this = this;
      Utilities.buttonEle.addEventListener("click", function inputName() {
        let name: string = Utilities.userInputEle.value;
        Utilities.userInputEle.value = "";
        Utilities.printLine("Welcome, " + name);
        _this.playerNames.push(name);
        this.removeEventListener("click", inputName);
        _this.start();
      });
    }
    else {
      let players: GoFishPlayer[] = [];
      for(let i = 0; i < this.playerNames.length; i++) {
        players.push(new GoFishPlayer(this.playerNames[i]));
      }
      this.game.addPlayers(players);
      this.game.setNumInitialCards();
      this.i++;
      this.start();
    }
  }

  dealInitialCards() {
    Utilities.printLine("");
    Utilities.printLine("Click to deal cards");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function dealCards() {
      Utilities.clearDisplay();
      Utilities.printLine("Dealing cards...");
      _this.game.dealInitialCards();
      _this.i++;
      this.removeEventListener("click", dealCards);
      _this.start();
    });
  }

  private j = 1;
  private numBooksPlayed = 0;
  private readonly ALL_BOOKS_PLAYED = 13;
  private currentPlayer: GoFishPlayer;
  private currentPlayerIndex = 0;

  playRoundsUntilAllBooksPlayed() {
    if(this.numBooksPlayed < this.ALL_BOOKS_PLAYED) {
      switch(this.j) {
        case 1:
          this.startPlayerTurn();
          break;
        case 2:
          this.getCardValueSelection();
          break;
        case 3:
          this.getPlayerToAsk();
          break;
        case 4:
          this.questionPlayer();
          break;
        case 5:
          this.goFish();
          break;
        case 6:
          this.playBooks();
          break;
        case 7:
          this.toNextPlayer();
          break;
      }
    }
    else {
      this.displayFinalCards();
      let winner = this.game.determineWinner();
      Utilities.printLine("Congratulations, " + winner.getName() + " is the winner!");
    }
  }

  startPlayerTurn() {
    this.currentPlayer = this.game.getPlayers()[this.currentPlayerIndex];
    let playerNumber = this.currentPlayerIndex + 1;
    Utilities.printLine(this.currentPlayer.getName() + ", it's your turn Player " + playerNumber);
    Utilities.printLine("Click to show cards");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function startTurn() {
      Utilities.printLine(_this.currentPlayer.getHand().toString());
      _this.j++;
      this.removeEventListener("click", startTurn);
      _this.start();
    });
  }

  private valueAskingFor: string;

  getCardValueSelection() {
    if(this.currentPlayer.getHand().numCards() > 0) {
      Utilities.printLine("");
      Utilities.printLine("Select a card value to ask another player for:");
      let potentialValues: string[] = []
      for(let key in Object.keys(Card.faceValues)) {
        let rank: string = Object.keys(Card.faceValues)[key];
        if(this.currentPlayer.hasCardsOfRank(rank)) {
          potentialValues.push("[ " + rank + " ]");
        }
      }
      Utilities.printLine(potentialValues.toString());
      var _this = this;
      Utilities.buttonEle.addEventListener("click", function valueSelection() {
        _this.valueAskingFor = Utilities.userInputEle.value.toUpperCase();
        Utilities.userInputEle.value = "";
        if(!_this.currentPlayer.hasCardsOfRank(_this.valueAskingFor)) {
          Utilities.printLine("Invalid selection, you do not have a card of that rank to ask for.");
          this.removeEventListener("click", valueSelection);
          _this.start();
        }
        else {
          _this.j++;
          this.removeEventListener("click", valueSelection);
          _this.start();
        }
      });
    }
    else {
      Utilities.printLine("You have no cards, go fish");
      this.j = 5;
      this.start();
    }
  }

  private otherPlayer: GoFishPlayer;

  getPlayerToAsk() {
    Utilities.printLine("");
    Utilities.printLine("Select another player to fish for cards from:");
    let potentialPlayers: string[] = []
    for(let index in this.game.getPlayers()) {
      let theOtherPlayer = this.game.getPlayers()[index];
      if(this.currentPlayer.getName() != theOtherPlayer.getName()) {
        potentialPlayers.push("[ " + theOtherPlayer.getName() + " (" + theOtherPlayer.getHand().numCards() + " cards in hand) ]");
      }
    }
    Utilities.printLine(potentialPlayers.toString());
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function playerSelection() {
      let otherPlayerName: string = Utilities.userInputEle.value.toUpperCase();
      Utilities.userInputEle.value = "";
      let isValidInput = false;
      for(let index in _this.game.getPlayers()) {
        let theOtherPlayer = _this.game.getPlayers()[index];
        if(theOtherPlayer.getName().toUpperCase() === otherPlayerName) {
          _this.otherPlayer = theOtherPlayer;
          isValidInput = true;
        }
      }
      if(!isValidInput) {
        Utilities.printLine("Invalid input");
        this.removeEventListener("click", playerSelection);
        _this.start();
      }
      else {
        Utilities.clearDisplay();
        _this.j++;
        this.removeEventListener("click", playerSelection);
        _this.start();
      }
    });
  }

  questionPlayer() {
    if(this.valueAskingFor === "SIX") {
      Utilities.printLine("Asking " + this.otherPlayer.getName() + ", do you have any " + this.valueAskingFor.toLowerCase() + "es?");
    }
    else {
      Utilities.printLine("Asking " + this.otherPlayer.getName() + ", do you have any " + this.valueAskingFor.toLowerCase() + "s?");
    }
    let otherPlayerHasCardsToGive = this.currentPlayer.fishForCards(this.otherPlayer, this.valueAskingFor);
    if(otherPlayerHasCardsToGive) {
      let fished: CardPile = this.otherPlayer.handOverAllCardsRequested(this.valueAskingFor);
      this.currentPlayer.addCardsToHand(fished);
      Utilities.printLine("Received " + fished.numCards() + " cards from " + this.otherPlayer.getName());
      Utilities.printLine("You may continue asking for cards!");
      Utilities.printLine(this.currentPlayer.getHand().toString());
      this.j = 2;
      this.start();
    }
    else {
      Utilities.printLine("Sorry, " + this.otherPlayer.getName() + " does not have any to give, go fish!");
      this.j++;
      this.start();
    }
  }

  goFish() {
    Utilities.printLine("Click to draw a card");
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function drawCard() {
      if(_this.game.getStockPile().numCards() > 0) {
        _this.game.playerGoFish(_this.currentPlayer);
      }
      else {
        Utilities.printLine("No more cards to draw");
      }
      _this.j++;
      this.removeEventListener("click", drawCard);
      _this.start();
    });
  }


  playBooks() {
    let numBooksPlayed: number = this.currentPlayer.playPotentialBooksInHand();
    this.numBooksPlayed += numBooksPlayed;
    if(numBooksPlayed > 0) {
      let output: string = "Books played: ";
      for(let i = 0; i < numBooksPlayed; i++) {
        output += "[ " + this.currentPlayer.getBooks()[this.currentPlayer.getBooks().length - numBooksPlayed + i].toString() + " ] ";
      }
      Utilities.printLine(output);
    }
    this.j++;
    this.start();
  }

  toNextPlayer() {
    this.currentPlayerIndex++;
    this.currentPlayerIndex %= this.game.getNumPlayers();
    this.j = 1;
    this.start();
  }

  displayFinalCards() {
    for(let i = 0; i < this.game.getNumPlayers(); i++) {
      let player = this.game.getPlayers()[i];
      let playerNumber = i + 1;
      let output = "Player " + playerNumber + ", " + player.getName() + ": ";
      for(let book in player.getBooks()) {
        output += "[ " + player.getBooks()[book].toString() + " ] ";
      }
      Utilities.printLine(output);
    }
  }

  getNameOfGame() {
    return "Go Fish";
  }
}

// public class GoFishConsole extends Console {

//     @Override
//     public void start() {
//         displayFinalCards();
//         GoFishPlayer winner = game.determineWinner();
//         System.out.printf("Congratulations, %s is the winner!\n", winner.getName());
//     }
//
//     public void displayFinalCards() {
//         for(int i = 0; i < game.getNumPlayers(); i++) {
//             GoFishPlayer goFishPlayer = game.getPlayers().get(i);
//             System.out.printf("Player %d, %s: ", i+1, goFishPlayer.getName());
//             for(CardPile book : goFishPlayer.getBooks()) {
//                 System.out.printf("[ %s ] ", book);
//             }
//             System.out.println();
//         }
//     }
// }
