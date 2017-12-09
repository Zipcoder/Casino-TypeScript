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
            _this.MIN_NUMBER_OF_PLAYERS = 2;
            _this.MAX_NUMBER_OF_PLAYERS = 5;
            _this.pointValues = {
                "TWO": 1,
                "THREE": 2,
                "FOUR": 3,
                "FIVE": 4,
                "SIX": 5,
                "SEVEN": 6,
                "EIGHT": 7,
                "NINE": 8,
                "TEN": 9,
                "JACK": 10,
                "QUEEN": 11,
                "KING": 12,
                "ACE": 13,
            };
            _this.numPlayers = 0;
            _this.numInitialCards = 0;
            _this.players = [];
            return _this;
        }
        GoFish.prototype.setNumInitialCards = function () {
            this.numPlayers = this.getNumPlayers();
            if (this.numPlayers >= this.MIN_NUMBER_OF_PLAYERS && this.numPlayers <= 3) {
                this.numInitialCards = 7;
            }
            else {
                this.numInitialCards = 5;
            }
        };
        GoFish.prototype.dealInitialCards = function () {
            for (var i = 0; i < this.numInitialCards; i++) {
                for (var player in this.players) {
                    this.players[player].addCardToHand(this.drawFromStock());
                }
            }
        };
        GoFish.prototype.playerGoFish = function (player) {
            player.goFish(this.drawFromStock());
        };
        GoFish.prototype.determineWinner = function () {
            var maxPoints = 0;
            var winner = undefined;
            for (var player in this.players) {
                var goFishPlayer = this.players[player];
                var score = 0;
                for (var book in goFishPlayer.getBooks()) {
                    var currentBook = goFishPlayer.getBooks()[book];
                    var rankOfBook = currentBook.getCard(0).getFaceValue();
                    score += this.pointValues[rankOfBook];
                }
                if (score > maxPoints) {
                    winner = goFishPlayer;
                    maxPoints = score;
                }
            }
            return winner;
        };
        GoFish.prototype.addPlayers = function (players) {
            this.players = players;
        };
        GoFish.prototype.getPlayers = function () {
            return this.players;
        };
        GoFish.prototype.getNumPlayers = function () {
            return this.players.length;
        };
        return GoFish;
    }(CardGame_1.CardGame));
    exports.GoFish = GoFish;
});
//# sourceMappingURL=GoFish.js.map