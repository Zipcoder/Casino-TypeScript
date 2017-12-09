var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Console", "./GoFish", "./GoFishPlayer", "./Utilities", "./Card"], function (require, exports, Console_1, GoFish_1, GoFishPlayer_1, Utilities_1, Card_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishConsole = (function (_super) {
        __extends(GoFishConsole, _super);
        function GoFishConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.game = new GoFish_1.GoFish();
            _this.playerNames = [];
            _this.i = 1;
            _this.j = 1;
            _this.numBooksPlayed = 0;
            _this.ALL_BOOKS_PLAYED = 13;
            _this.currentPlayerIndex = 0;
            return _this;
        }
        GoFishConsole.prototype.start = function () {
            switch (this.i) {
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
        };
        GoFishConsole.prototype.inputNumPlayers = function (min, max) {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            if (min === max) {
                Utilities_1.Utilities.printLine("This game is played with " + min + " players.");
                this.numPlayers = min;
            }
            else {
                Utilities_1.Utilities.printLine("How many players? May have " + min + " to " + max + " players.");
                var _this = this;
                Utilities_1.Utilities.buttonEle.addEventListener("click", function inputNumber() {
                    var input = parseInt(Utilities_1.Utilities.userInputEle.value);
                    Utilities_1.Utilities.userInputEle.value = "";
                    if (input >= min && input <= max) {
                        _this.numPlayers = input;
                        _this.i++;
                        this.removeEventListener("click", inputNumber);
                        _this.start();
                    }
                    else {
                        Utilities_1.Utilities.printLine("Invalid input");
                        this.removeEventListener("click", inputNumber);
                        _this.start();
                    }
                });
            }
        };
        GoFishConsole.prototype.inputPlayerNames = function () {
            var nextPlayerIndex = this.playerNames.length + 1;
            if (nextPlayerIndex <= this.numPlayers) {
                Utilities_1.Utilities.printLine("Enter name of Player " + nextPlayerIndex);
                var _this = this;
                Utilities_1.Utilities.buttonEle.addEventListener("click", function inputName() {
                    var name = Utilities_1.Utilities.userInputEle.value;
                    Utilities_1.Utilities.userInputEle.value = "";
                    Utilities_1.Utilities.printLine("Welcome, " + name);
                    _this.playerNames.push(name);
                    this.removeEventListener("click", inputName);
                    _this.start();
                });
            }
            else {
                var players = [];
                for (var i = 0; i < this.playerNames.length; i++) {
                    players.push(new GoFishPlayer_1.GoFishPlayer(this.playerNames[i]));
                }
                this.game.addPlayers(players);
                this.game.setNumInitialCards();
                this.i++;
                this.start();
            }
        };
        GoFishConsole.prototype.dealInitialCards = function () {
            Utilities_1.Utilities.printLine("");
            Utilities_1.Utilities.printLine("Click to deal cards");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function dealCards() {
                Utilities_1.Utilities.clearDisplay();
                Utilities_1.Utilities.printLine("Dealing cards...");
                _this.game.dealInitialCards();
                _this.i++;
                this.removeEventListener("click", dealCards);
                _this.start();
            });
        };
        GoFishConsole.prototype.playRoundsUntilAllBooksPlayed = function () {
            if (this.numBooksPlayed < this.ALL_BOOKS_PLAYED) {
                switch (this.j) {
                    case 1:
                        this.startPlayerTurn();
                        break;
                    case 2:
                        this.getCardValueSelection();
                        break;
                }
            }
            else {
                // end game, go to next, i++
                this.i++;
            }
        };
        GoFishConsole.prototype.startPlayerTurn = function () {
            this.currentPlayer = this.game.getPlayers()[this.currentPlayerIndex];
            var playerNumber = this.currentPlayerIndex + 1;
            Utilities_1.Utilities.printLine(this.currentPlayer.getName() + ", it's your turn Player " + playerNumber);
            Utilities_1.Utilities.printLine("Click to show cards");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function startTurn() {
                Utilities_1.Utilities.printLine(_this.currentPlayer.getHand().toString());
                _this.j++;
                this.removeEventListener("click", startTurn);
                _this.start();
            });
        };
        GoFishConsole.prototype.getCardValueSelection = function () {
            Utilities_1.Utilities.printLine("");
            Utilities_1.Utilities.printLine("Select a card value to ask another player for:");
            var potentialValues = [];
            for (var key in Object.keys(Card_1.Card.faceValues)) {
                var rank = Object.keys(Card_1.Card.faceValues)[key];
                console.log(rank + " " + this.currentPlayer.hasCardsOfRank(rank));
                if (this.currentPlayer.hasCardsOfRank(rank)) {
                    potentialValues.push("[ " + rank + " ]");
                }
            }
            Utilities_1.Utilities.printLine(potentialValues.toString());
            var value;
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function valueSelection() {
                var rank = Utilities_1.Utilities.userInputEle.value;
                Utilities_1.Utilities.userInputEle.value = "";
            });
            //         Card.FaceValue value = null;
            //         boolean isValidInput = false;
            //         while(!isValidInput) {
            //             System.out.println(currentPlayer.getHand());
            //             value = getValueInput("Select a card value to ask another player for:");
            //             if(currentPlayer.hasCardsOfRank(value)) {
            //                 isValidInput = true;
            //             } else {
            //                 System.out.println("Invalid selection, you do not have a card of that rank to ask for.");
            //             }
            //         }
            //         return value;
        };
        GoFishConsole.prototype.getNameOfGame = function () {
            return "Go Fish";
        };
        return GoFishConsole;
    }(Console_1.Console));
    exports.GoFishConsole = GoFishConsole;
});
// public class GoFishConsole extends Console {
//     @Override
//     public void start() {
//         setUpGame();
//
//         System.out.println("\nDealing cards...\n");
//         game.dealInitialCards();
//
//         playRoundsUntilAllBooksPlayed();
//         displayFinalCards();
//         GoFishPlayer winner = game.determineWinner();
//         System.out.printf("Congratulations, %s is the winner!\n", winner.getName());
//     }
//
//     public void playRoundsUntilAllBooksPlayed() {
//         int numBooksPlayed = 0;
//         final int ALL_BOOKS_PLAYED = 13;
//
//         int currentPlayerIndex = 0;
//         while(numBooksPlayed < ALL_BOOKS_PLAYED) {
//             currentPlayer = game.getPlayers().get(currentPlayerIndex);
//             System.out.printf("Player %d turn:\n", currentPlayerIndex+1);
//             numBooksPlayed += playerTakeTurn(currentPlayer);
//             currentPlayerIndex++;
//             currentPlayerIndex %= game.getNumPlayers();
//         }
//     }
//
//     @Override
//     public void playRound() {
//
//     }
//
//     public Integer playerTakeTurn(GoFishPlayer player) {
//         int totalBooksPlayed = 0;
//         boolean continueFishing = true;
//         while(continueFishing) {
//             if (player.getHand().numCards() > 0) {
//                 String enter = getUserInput("Press enter to show cards:");
//                 Card.FaceValue value = getCardValueSelection();
//                 GoFishPlayer playerToAsk = getPlayerToAsk();
//                 if (value.equals(Card.FaceValue.SIX)) {
//                     System.out.printf("Asking %s, do you have any %ses?\n", playerToAsk.getName(), value.name().toLowerCase());
//                 } else {
//                     System.out.printf("Asking %s, do you have any %ss?\n", playerToAsk.getName(), value.name().toLowerCase());
//                 }
//                 boolean otherPlayerHasCardsToGive = currentPlayer.fishForCards(playerToAsk, value);
//                 if (otherPlayerHasCardsToGive) {
//                     CardPile fished = playerToAsk.handOverAllCardsRequested(value);
//                     currentPlayer.addCardsToHand(fished);
//                     System.out.printf("Received %d cards from %s\n", fished.numCards(), playerToAsk.getName());
//                 } else {
//                     System.out.printf("Sorry, %s does not have any to give, go fish\n", playerToAsk.getName());
//                     continueFishing = false;
//                     if (game.getStockPile().numCards() > 0) {
//                         game.playerGoFish(currentPlayer);
//                     } else {
//                         System.out.println("No more cards to draw");
//                     }
//                 }
//             } else {
//                 System.out.println("You have no cards, go fish");
//                 continueFishing = false;
//                 if (game.getStockPile().numCards() > 0) {
//                     game.playerGoFish(currentPlayer);
//                 } else {
//                     System.out.println("No more cards to draw");
//                 }
//             }
//             int numBooksPlayed = currentPlayer.playPotentialBooksInHand();
//             totalBooksPlayed += numBooksPlayed;
//             if (numBooksPlayed > 0) {
//                 String output = "Books played: ";
//                 for (int i = 0; i < numBooksPlayed; i++) {
//                     output += String.format("[ %s ] ", currentPlayer.getBooks().get(currentPlayer.getBooks().size() - numBooksPlayed + i));
//                 }
//                 System.out.println(output);
//             }
//         }
//         return totalBooksPlayed;
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
//
//     public Card.FaceValue getCardValueSelection() {
//         Card.FaceValue value = null;
//         boolean isValidInput = false;
//         while(!isValidInput) {
//             System.out.println(currentPlayer.getHand());
//             value = getValueInput("Select a card value to ask another player for:");
//             if(currentPlayer.hasCardsOfRank(value)) {
//                 isValidInput = true;
//             } else {
//                 System.out.println("Invalid selection, you do not have a card of that rank to ask for.");
//             }
//         }
//         return value;
//     }
//
//     public static Card.FaceValue getValueInput(String prompt) {
//         System.out.println(prompt);
//         StringJoiner stringJoiner = new StringJoiner(" ] * [ ", "[ ", " ]\n");
//         for(Card.FaceValue value : Card.FaceValue.values()) {
//             stringJoiner.add(value.name());
//         }
//         System.out.println(stringJoiner.toString());
//         boolean isValidInput = false;
//         Card.FaceValue value = null;
//         while(!isValidInput) {
//             String input = getUserInput("").toUpperCase();
//             try {
//                 value = Card.FaceValue.valueOf(input);
//                 isValidInput = true;
//             } catch (IllegalArgumentException iae) {
//                 System.out.println("Invalid input");
//             }
//         }
//         return value;
//     }
//
//     public GoFishPlayer getPlayerToAsk() {
//         StringJoiner stringJoiner = new StringJoiner(" ] * [ ", "[ ", " ]\n");
//         ArrayList<GoFishPlayer> players = game.getPlayers();
//         for(GoFishPlayer player : players) {
//             if(!player.equals(currentPlayer)) {
//                 stringJoiner.add(String.format("%s (%d cards in hand)", player.getName(), player.getHand().numCards()));
//             }
//         }
//         System.out.println(stringJoiner.toString());
//         boolean isValidInput = false;
//         GoFishPlayer otherPlayer = null;
//         while(!isValidInput) {
//             String input = getUserInput("Select another player to fish for cards from:");
//             for(GoFishPlayer player : players) {
//                 if(!player.equals(currentPlayer) && player.getName().equalsIgnoreCase(input)) {
//                     otherPlayer = player;
//                     isValidInput = true;
//                 }
//             }
//             if(!isValidInput) {
//                 System.out.println("Invalid input");
//             }
//         }
//         return otherPlayer;
//     }
//
//     @Override
//     public String getNameOfGame() {
//         return nameOfGame;
//     }
// }
//# sourceMappingURL=GoFishConsole.js.map