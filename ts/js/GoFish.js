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
define(["require", "exports", "./CardGame"], function (require, exports, CardGame_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFish = (function (_super) {
        __extends(GoFish, _super);
        function GoFish() {
            var _this = _super.call(this, 1) || this;
            _this.players = [];
            return _this;
            //this.setPointValues();
        }
        GoFish.prototype.addPlayers = function (players) {
            this.players = players;
        };
        return GoFish;
    }(CardGame_1.CardGame));
    exports.GoFish = GoFish;
});
// public class GoFish extends CardGame<GoFish> {
// 
//     public final int MIN_NUMBER_OF_PLAYERS = 2;
//     public final int MAX_NUMBER_OF_PLAYERS = 5;
//     private final HashMap<Card.FaceValue, Integer> pointValues = new HashMap<Card.FaceValue, Integer>();
//     private int numPlayers = 0;
//     private int numInitialCards = 0;
// 
// 
//     public GoFish() {
//         super(1);
//         setPointValues();
//     }
// 
//     @Override
//     public ArrayList<GoFishPlayer> getPlayers() {
//         return (ArrayList<GoFishPlayer>) players;
//     }
// 
//     public void setNumInitialCards() {
//         numPlayers = getNumPlayers();
//         if(numPlayers >= MIN_NUMBER_OF_PLAYERS && numPlayers <= 3) {
//             numInitialCards = 7;
//         } else {
//             numInitialCards = 5;
//         }
//     }
// 
//     public void dealInitialCards() {
//         for(int i = 0; i < numInitialCards; i++) {
//             for(GoFishPlayer goFishPlayer : getPlayers()) {
//                 goFishPlayer.addCardToHand(drawFromStock());
//             }
//         }
//     }
// 
//     public void playerGoFish(GoFishPlayer player) {
//         player.goFish(this.drawFromStock());
//     }
// 
//     public GoFishPlayer determineWinner() {
//         int maxPoints = 0;
//         GoFishPlayer winner = null;
//         for(GoFishPlayer goFishPlayer : getPlayers()) {
//             int score = 0;
//             for(CardPile book : goFishPlayer.getBooks()) {
//                 score += pointValues.get(book.getCard(0).getFaceValue());
//             }
//             if(score > maxPoints) {
//                 winner = goFishPlayer;
//                 maxPoints = score;
//             }
//         }
//         return winner;
//     }
// 
//     @Override
//     public void setPointValues() {
//         pointValues.put(TWO, 1);
//         pointValues.put(THREE, 2);
//         pointValues.put(FOUR, 3);
//         pointValues.put(FIVE, 4);
//         pointValues.put(SIX, 5);
//         pointValues.put(SEVEN, 6);
//         pointValues.put(EIGHT, 7);
//         pointValues.put(NINE, 8);
//         pointValues.put(TEN, 9);
//         pointValues.put(JACK, 10);
//         pointValues.put(QUEEN, 11);
//         pointValues.put(KING, 12);
//         pointValues.put(ACE, 13);
//     }
// }
//# sourceMappingURL=GoFish.js.map