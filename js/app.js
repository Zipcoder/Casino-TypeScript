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
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("user_input");
        // this.betInput = document.getElementById("betAmount");
        // this.player= player;
    }
    //telling it to go to the html file and link it to this typescript class
    Craps.prototype.play = function () {
        var play = document.getElementById("playStreetCraps");
        var firstThrow = document.getElementById("firstThrow");
        var secondThrow = document.getElementById("secondThrow");
        var newGame = document.getElementById("newStreetCrapsGame");
        play.setAttribute("hidden", "true");
        firstThrow.removeAttribute("hidden");
        secondThrow.removeAttribute("hidden");
        newGame.removeAttribute("hidden");
    };
    Craps.prototype.showOpeningMessage = function () {
        this.openingMessage = "~Welcome to Street Craps~";
        return this.openingMessage;
    };
    // getName(){
    // }
    Craps.prototype.showOpeningMsgCrapsHTML = function () {
        this.displayElement.innerHTML = this.showOpeningMessage();
    };
    Craps.prototype.initialThrow = function () {
        var diceRollSumOne = dice.rollDice(2);
        switch (diceRollSumOne) {
            case 7:
            case 11:
                this.messageAfterFirstThrow = "Your rolled a " + diceRollSumOne + ". " + "You Win!";
                //gambling money + betamount 
                break;
            case 2:
            case 3:
            case 12:
                this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". " + "Sorry, you lose...";
                //gambling money - betamount
                break;
            default:
                this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". " + "Click on Second Throw.";
                this.point = diceRollSumOne;
                break;
        }
        return this.messageAfterFirstThrow;
    };
    Craps.prototype.firstThrowHTML = function () {
        this.displayElement.innerHTML += "<br/>" + this.initialThrow();
    };
    Craps.prototype.secondThrow = function () {
        var diceRollSumTwo = dice.rollDice(2);
        console.log("You rolled a " + diceRollSumTwo);
        if (diceRollSumTwo == this.point) {
            this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Win!";
        }
        else if (diceRollSumTwo == 7) {
            this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Lose!";
        }
        else {
            this.messageAfterSecondThrow = "Meep, you rolled a " + diceRollSumTwo + ". Roll Again. ";
        }
        return this.messageAfterSecondThrow;
    };
    Craps.prototype.secondThrowHTML = function () {
        this.displayElement.innerHTML += "<br/>" + this.secondThrow();
    };
    return Craps;
}());
var IO = /** @class */ (function () {
    function IO() {
    }
    IO.display = function (displayString) {
        this.displayEle.innerHTML += "<br/>" + displayString;
    };
    IO.getStringInput = function (prompt) {
        this.display(prompt);
        return this.userInputEle.value;
    };
    IO.getNumberInput = function (prompt) {
        this.display(prompt);
        return this.moneyInputEle.value;
    };
    IO.displayEle = document.getElementById("display");
    IO.userInputEle = document.getElementById("user_input");
    IO.moneyInputEle = document.getElementById("money_input");
    return IO;
}());
///<reference path="IO.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.askForName = function () {
        var name = IO.getStringInput("Player Name:");
        IO.display(name);
    };
    Casino.prototype.askForMoney = function () {
        var amount = IO.getNumberInput("Money Pot:");
        IO.display(amount);
    };
    Casino.prototype.createPlayer = function () {
        var namePlayer = document.getElementById("user_input");
        var moneyPlayer = document.getElementById("money_input");
        IO.display(namePlayer);
        IO.display(moneyPlayer);
    };
    return Casino;
}());
var Dice = /** @class */ (function () {
    function Dice() {
        this.displayElement = document.getElementById("display");
    }
    Dice.prototype.rollDice = function (diceNumber) {
        var diceSum = 0;
        var singleRandomNumber;
        for (var i = 0; i < diceNumber; i++) {
            singleRandomNumber = Math.ceil(Math.random() * 6); // gives you one random number from one dice
            diceSum += singleRandomNumber; //adds up my random number from each dice
        }
        return diceSum;
    };
    Dice.prototype.showDice = function () {
        this.displayElement.innerHTML += this.rollDice(2);
    };
    return Dice;
}());
var Player = /** @class */ (function () {
    function Player(name, gamblingMoney) {
        this.name = name;
        this.gamblingMoney = gamblingMoney;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getGamblingMoney = function () {
        return this.gamblingMoney;
    };
    Player.prototype.setGamblingMoney = function (amount) {
        this.gamblingMoney = amount;
    };
    Player.prototype.addGamblingMoney = function (amount) {
        this.gamblingMoney += amount;
    };
    Player.prototype.sayHi = function () {
        var txtName = document.getElementById("getAccount");
        var txtOutput = document.getElementById("txtOutput");
    };
    return Player;
}());
/// <reference path="Craps.ts" />
/// <reference path="Casino.ts" />
/// <reference path="Dice.ts" />
/// <reference path="Player.ts" />
var dice = new Dice();
var casino = new Casino();
var craps = new Craps(name);
var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Object.defineProperty(Card.prototype, "rankName", {
        get: function () {
            return Card.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suitName", {
        get: function () {
            return Suit[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this.rankName + ' of ' + this.suitName;
        },
        enumerable: true,
        configurable: true
    });
    Card.rankNames = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King'
    ];
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var s = 0; s < 4; s++) {
            for (var r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }
    return Deck;
}());
///<reference path="../cards/deck.ts"/>
var Dealer = /** @class */ (function (_super) {
    __extends(Dealer, _super);
    function Dealer() {
        var _this = _super.call(this) || this;
        _this.dealer = Dealer;
        _this.dealtCard = Card;
        _this.deck = Deck;
        return _this;
    }
    Dealer.prototype.shuffle = function () {
        this.cards.sort(function () { return Math.floor(Math.random() * 2 - 1); });
    };
    Dealer.prototype.draw = function () {
        var cardDrawn = this.cards[0];
        return cardDrawn.name;
    };
    return Dealer;
}(Deck));
///<reference path="../dealers/dealer.ts"/>
var Blackjack = /** @class */ (function (_super) {
    __extends(Blackjack, _super);
    function Blackjack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dealer = Dealer;
        _this.dealtCard = Card;
        _this.deck = Deck;
        _this.blackjack = Blackjack;
        return _this;
    }
    Blackjack.prototype.hitMe = function () {
        var c = new Deck();
        var d = new Blackjack();
        console.log(d.hand());
    };
    Blackjack.prototype.hitDealer = function () {
        var c = new Deck();
        var d = new Blackjack();
        console.log(d.hand());
    };
    Blackjack.prototype.hand = function () {
        var c = new Deck();
        var d = new Dealer();
        for (var i = 0; i <= 1; i++) {
            d.shuffle();
            IO.display((d.draw()));
        }
    };
    return Blackjack;
}(Dealer));
var Games;
(function (Games) {
    Games[Games["GoFish"] = 0] = "GoFish";
    Games[Games["Blackjack"] = 1] = "Blackjack";
    Games[Games["Craps"] = 2] = "Craps";
})(Games || (Games = {}));
var Game = /** @class */ (function () {
    function Game(rank, game) {
        this.rank = rank;
        this.suit = game;
    }
    Object.defineProperty(Game.prototype, "rankName", {
        get: function () {
            return Game.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "suitName", {
        get: function () {
            return Games[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "name", {
        get: function () {
            return this.suitName + ', level ' + this.rankName;
        },
        enumerable: true,
        configurable: true
    });
    Game.rankNames = [
        '1',
        '2',
        '3'
    ];
    return Game;
}());
//# sourceMappingURL=app.js.map