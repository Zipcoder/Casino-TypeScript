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
var Casino = (function () {
    function Casino() {
    }
    return Casino;
}());
/// <reference path="casino.ts"/>
var casinoStart = new Casino();
var Game = (function () {
    function Game() {
    }
    return Game;
}());
var CardGame = (function () {
    function CardGame() {
    }
    return CardGame;
}());
var DiceGame = (function () {
    function DiceGame() {
    }
    return DiceGame;
}());
var Player = (function () {
    function Player() {
    }
    return Player;
}());
var CrapsPlayer = (function (_super) {
    __extends(CrapsPlayer, _super);
    function CrapsPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrapsPlayer;
}(Player));
var GoFishPlayer = (function (_super) {
    __extends(GoFishPlayer, _super);
    function GoFishPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GoFishPlayer;
}(Player));
var BlackJackPlayer = (function (_super) {
    __extends(BlackJackPlayer, _super);
    function BlackJackPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlackJackPlayer;
}(Player));
var Card = (function () {
    function Card() {
    }
    return Card;
}());
var CardValue;
(function (CardValue) {
})(CardValue || (CardValue = {}));
var Deck = (function () {
    function Deck() {
    }
    return Deck;
}());
var Suit;
(function (Suit) {
})(Suit || (Suit = {}));
var Craps = (function () {
    function Craps() {
    }
    return Craps;
}());
var GoFish = (function () {
    function GoFish() {
    }
    return GoFish;
}());
var BlackJack = (function () {
    function BlackJack() {
    }
    return BlackJack;
}());
var Die = (function () {
    function Die() {
    }
    return Die;
}());
var CrapsConsole = (function () {
    function CrapsConsole() {
    }
    return CrapsConsole;
}());
var BlackJackConsole = (function () {
    function BlackJackConsole() {
    }
    return BlackJackConsole;
}());
var GoFishConsole = (function () {
    function GoFishConsole() {
    }
    return GoFishConsole;
}());
//# sourceMappingURL=app.js.map