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
    BlackJackConsole.prototype.printPlay = function () {
        Display.print("Your are now in the Black Jack Game." +
            "<br/>Ryan will get you from HERE!!!");
    };
    BlackJackConsole.prototype.play = function () {
    };
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
    Display.setCurrentStep = function (step) {
        this.currentStep = step;
    };
    Display.displayEle = document.getElementById("display");
    Display.currentStep = "enterCasino";
    return Display;
}());
var UserInput = /** @class */ (function () {
    function UserInput() {
    }
    UserInput.userInput = document.getElementById("user_input");
    return UserInput;
}());
var GoFishConsole = /** @class */ (function () {
    function GoFishConsole() {
    }
    GoFishConsole.prototype.printPlay = function () {
    };
    GoFishConsole.prototype.play = function () {
    };
    return GoFishConsole;
}());
///<reference path="blackJackConsole.ts"/>
///<reference path="goFishConsole.ts"/>
var blackJack = new BlackJackConsole();
var goFish = new GoFishConsole();
var CardGame = /** @class */ (function () {
    function CardGame() {
    }
    CardGame.prototype.printChooseCardGame = function () {
        Display.print("What type of card game would you like tp play?" +
            "<br/>Please enter goFish or blackJack");
    };
    CardGame.prototype.chooseCardGame = function () {
        switch (UserInput.userInput.value) {
            case "goFish":
                goFish.printPlay();
                document.getElementById("button").setAttribute("onclick", "goFish.play()");
                break;
            case "blackJacK":
                blackJack.printPlay();
                document.getElementById("button").setAttribute("onclick", "blackJack.play()");
                break;
            default:
                Display.print("Invalid choice.");
                // this.chooseCardGame();
                break;
        }
    };
    return CardGame;
}());
var CrapsConsole = /** @class */ (function () {
    function CrapsConsole() {
    }
    CrapsConsole.prototype.printStartCraps = function () {
        Display.print("Hello Welcome to the craps table." +
            "<br/>Ryan is the man and is going to make this shit rock!!!");
    };
    CrapsConsole.prototype.startCraps = function () {
        //I just throw this in here for you to run your craps game
        //You'll have to change the button one level up if this is not the name of this method
    };
    return CrapsConsole;
}());
///<reference path="crapsConsole.ts"/>
var craps = new CrapsConsole();
var DiceGame = /** @class */ (function () {
    function DiceGame() {
    }
    DiceGame.prototype.printChooseDiceGame = function () {
        Display.print("What type of dice game would you like tp play?" +
            "<br/>Please enter craps or you can roll out cause this is the only dice game.");
    };
    DiceGame.prototype.chooseDiceGame = function () {
        switch (UserInput.userInput.value) {
            case "craps":
                craps.printStartCraps();
                document.getElementById("button").setAttribute("onclick", "craps.startCraps");
        }
    };
    return DiceGame;
}());
///<reference path="cardGame.ts"/>
///<reference path="diceGame.ts"/>
var cardGame = new CardGame();
var diceGame = new DiceGame();
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.ChooseGame = function () {
        // Display.setCurrentStep("game.ChooseGame");
        Display.print("Here at ZipCode Casino we have both card games and dice games." +
            "<br/>What type of game would you like to play?" +
            "<br/><br/>Please enter cardgame for or dicegames.");
    };
    Game.prototype.pickGame = function () {
        switch (UserInput.userInput.value) {
            case "cardgame":
                cardGame.printChooseCardGame();
                document.getElementById("button").setAttribute("onclick", "cardGame.chooseCardGame()");
                break;
            case "dicegame":
                diceGame.printChooseDiceGame();
                document.getElementById("button").setAttribute("onclick", "diceGame.chooseDiceGame()");
                break;
            default:
                Display.print("Invalid answer please try again.");
                this.ChooseGame();
                break;
        }
        Display.print("Would you like to leave the game area?");
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
            "<br/><br/>Please enter [game] to choose a game or [other] for other options.");
    };
    Casino.prototype.chooseWhatToDo = function () {
        switch (UserInput.userInput.value) {
            case "game":
                game.ChooseGame();
                document.getElementById("button").setAttribute("onclick", "game.pickGame()");
                break;
            case "other":
                Display.print("We currently only have games inside Zip Code Casino." +
                    "<br/>I'm sorry if there is nothing else to do.");
                break;
            default:
                Display.print("Invalid answer please try again.");
                this.enterCasino();
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
var CardValue;
(function (CardValue) {
})(CardValue || (CardValue = {}));
var Craps = /** @class */ (function () {
    function Craps() {
    }
    return Craps;
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