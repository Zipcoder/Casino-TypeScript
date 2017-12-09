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
define(["require", "exports", "./Console", "./GoFish"], function (require, exports, Console_1, GoFish_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishConsole = (function (_super) {
        __extends(GoFishConsole, _super);
        function GoFishConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.game = new GoFish_1.GoFish();
            return _this;
        }
        GoFishConsole.prototype.start = function () {
        };
        GoFishConsole.prototype.getNameOfGame = function () {
            return "Go Fish";
        };
        return GoFishConsole;
    }(Console_1.Console));
    exports.GoFishConsole = GoFishConsole;
});
// public class GoFishConsole extends Console {
// 
//     private String nameOfGame = "Go Fish";
// 
//     private GoFish game = new GoFish();
//     private GoFishPlayer currentPlayer;
// 
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
//     @Override
//     public void setUpGame() {
//         printMenuName(String.format("Welcome to %s", nameOfGame));
//         int numPlayers = getNumPlayers(game.MIN_NUMBER_OF_PLAYERS, game.MAX_NUMBER_OF_PLAYERS);
//         ArrayList<String> playerNames = getPlayerNames(numPlayers);
//         ArrayList<GoFishPlayer> players = new ArrayList<>();
//         for(String name : playerNames) {
//             GoFishPlayer player = new GoFishPlayer(name);
//             players.add(player);
//         }
//         game.addPlayers(players);
//         game.setNumInitialCards();
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