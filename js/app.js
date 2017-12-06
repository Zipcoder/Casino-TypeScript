var GoFish = /** @class */ (function () {
    function GoFish() {
        this.playerHand = [];
        this.computerHand = [];
        this.goFishPlayer = new Player();
        this.deck = new Deck();
        this.computerPlayer = new Player;
        this.computerHand = [];
        this.playerHand = [];
    }
    GoFish.prototype.getPlayerHand = function () {
        var i = 0;
        while (this.playerHand.length != 7) {
            this.playerHand.push(this.deck[i]);
            this.deck.cards.shift;
            i++;
        }
        return this.playerHand;
    };
    GoFish.prototype.getComputerHand = function () {
        var i = 0;
        while (this.computerHand.length != 7) {
            this.computerHand.push(this.deck[i]);
            this.deck.cards.shift;
            i++;
        }
        return this.computerHand;
    };
    GoFish.prototype.getGoFishPlayer = function () {
        return this.goFishPlayer;
    };
    return GoFish;
}());
/// <reference path="GoFish.ts" />
var GoFishGame = /** @class */ (function () {
    function GoFishGame() {
        this.goFish = new GoFish;
        this.goFishPlayer = new Player;
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
    }
    GoFishGame.prototype.init = function () {
        this.getUserResponse();
    };
    GoFishGame.prototype.getUserResponse = function () {
        var response = this.userInputElement.value;
        this.displayElement.innerHTML += "Welcome, " + this.userInputElement.value + ". Press the GetHand button to continue!";
    };
    return GoFishGame;
}());
/// <reference path="GoFishGame.ts" />
var goFishGame = new GoFishGame();
var goFish = new GoFish();
goFishGame.init();
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Card.prototype.getRank = function () {
        return this.rank;
    };
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.tostring = function () {
        return this.rank + " " + this.suit;
    };
    return Card;
}());
/// <reference path="Card.ts" />
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var i = 0; i < 4; i++) {
            var suitArray = [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
            for (var j = 0; j < 13; j++) {
                var rankArray = [Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE,
                    Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING];
                var card = new Card(rankArray[j], suitArray[i]);
                console.log(card);
                this.cards.push(card);
            }
        }
        console.log(this.cards.length);
    }
    Deck.prototype.getDeck = function () {
        return this.cards;
    };
    return Deck;
}());
var Player = /** @class */ (function () {
    function Player() {
        this.name = name;
        this.score = 0;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getscore = function () {
        return this.score;
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    return Player;
}());
var Rank;
(function (Rank) {
    Rank["ACE"] = "11";
    Rank["TWO"] = "2";
    Rank["THREE"] = "3";
    Rank["FOUR"] = "4";
    Rank["FIVE"] = "5";
    Rank["SIX"] = "6";
    Rank["SEVEN"] = "7";
    Rank["EIGHT"] = "8";
    Rank["NINE"] = "9";
    Rank["TEN"] = "10";
    Rank["JACK"] = "J";
    Rank["QUEEN"] = "Q";
    Rank["KING"] = "K";
})(Rank || (Rank = {}));
var Suit;
(function (Suit) {
    Suit["HEART"] = "\u2661";
    Suit["DIAMOND"] = "\u2662";
    Suit["CLUB"] = "\u2664";
    Suit["SPADE"] = "\u2667";
})(Suit || (Suit = {}));
//# sourceMappingURL=app.js.map