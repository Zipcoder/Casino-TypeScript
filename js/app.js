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
var BlackJack = /** @class */ (function () {
    function BlackJack() {
    }
    return BlackJack;
}());
var BlackJackConsole = /** @class */ (function () {
    function BlackJackConsole() {
    }
    return BlackJackConsole;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
///<reference path="player.ts"/>
var BlackJackPlayer = /** @class */ (function (_super) {
    __extends(BlackJackPlayer, _super);
    function BlackJackPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlackJackPlayer;
}(Player));
var Display = /** @class */ (function () {
    function Display() {
    }
    Display.print = function (input) {
        this.displayEle.innerHTML += input + "<br/><br/>";
    };
    Display.displayEle = document.getElementById("display");
    return Display;
}());
var UserInput = /** @class */ (function () {
    function UserInput() {
    }
    UserInput.userInput = document.getElementById("user_input");
    return UserInput;
}());
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.ChooseGame = function () {
    };
    return Game;
}());
/// <reference path="display.ts"/>
/// <reference path="userInput.ts"/>
///<reference path="game.ts"/>
var game = new Game();
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.enterCasino = function () {
        Display.print("Welcome to Zip Code Casino." +
            "<br/>You are going to have lots of fun while you are here." +
            "<br/>Use the drop down menu below to choose whether or not to play a game.");
    };
    Casino.prototype.chooseWhatToDo = function () {
        console.log("Something anyting");
        switch (UserInput.userInput.value) {
            case "1":
                game.ChooseGame();
                break;
            case "2":
                Display.print("We currently only have games inside Zip Code Casino." +
                    "<br/>I'm sorry if there is nothing else to do." +
                    "<br/>If you'd like a drink ask Tariq :-)");
                break;
        }
    };
    return Casino;
}());
/// <reference path="casino.ts"/>
var casinoStart = new Casino();
casinoStart.enterCasino();
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
var CardGame = /** @class */ (function () {
    function CardGame() {
    }
    return CardGame;
}());
var CardValue;
(function (CardValue) {
})(CardValue || (CardValue = {}));
var Craps = /** @class */ (function () {
    function Craps() {
    }
    return Craps;
}());
var CrapsConsole = /** @class */ (function () {
    function CrapsConsole() {
    }
    return CrapsConsole;
}());
///<reference path="player.ts"/>
var CrapsPlayer = /** @class */ (function (_super) {
    __extends(CrapsPlayer, _super);
    function CrapsPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrapsPlayer;
}(Player));
var Deck = /** @class */ (function () {
    function Deck() {
    }
    return Deck;
}());
var DiceGame = /** @class */ (function () {
    function DiceGame() {
    }
    return DiceGame;
}());
var Die = /** @class */ (function () {
    function Die() {
    }
    return Die;
}());
var GoFish = /** @class */ (function () {
    function GoFish() {
    }
    return GoFish;
}());
var GoFishConsole = /** @class */ (function () {
    function GoFishConsole() {
    }
    return GoFishConsole;
}());
///<reference path="player.ts"/>
var GoFishPlayer = /** @class */ (function (_super) {
    __extends(GoFishPlayer, _super);
    function GoFishPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GoFishPlayer;
}(Player));
var Suit;
(function (Suit) {
})(Suit || (Suit = {}));
//# sourceMappingURL=app.js.map