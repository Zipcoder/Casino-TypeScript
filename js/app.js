var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("displayCasino");
        this.userInputEle = document.getElementById("user_inputCasino");
        this.listener = document.getElementById("submitCasino");
    }
    Casino.prototype.welcome = function () {
        this.displayEle.innerHTML += "<br/>Welcome To Chewy's Casino!!!<br/>What is your name?";
    };
    Casino.prototype.getName = function () {
        this.name = this.userInputEle.value;
        if (this.name.length < 1) {
            this.displayEle.innerHTML += "<br/>Invalid input. What is your name?";
            this.name = this.userInputEle.value;
        }
        else {
            this.displayEle.innerHTML += "<br/>Hello, " + this.name;
            this.listener.setAttribute("onClick", "casino.getMoney()");
            this.howMuchMoney();
        }
    };
    Casino.prototype.howMuchMoney = function () {
        this.displayEle.innerHTML += "<br/>How much money would you like to play with?";
    };
    Casino.prototype.getMoney = function () {
        this.money = this.userInputEle.value;
        this.createPlayer();
        this.displayOptions();
    };
    Casino.prototype.createPlayer = function () {
        this.player = new Player(this.name, this.money);
    };
    Casino.prototype.displayOptions = function () {
        this.displayEle.innerHTML += "<br/>Player: " + this.player.getName() + "<br/>Money: " + this.player.getBalance() + "<br/>" +
            "What would you like to do?";
        this.displayEle.innerHTML += "<br/><button> <a href = \"index.html\">Play BlackJack</a> </button>" + "     " +
            "<br/><button> <a href = \"craps.html\">Play Craps</a> </button>" + "     " +
            "<br/><button> <a href = \"goFish.html\">Play Go Fish</a> </button>";
    };
    return Casino;
}());
/// <reference path="Casino.ts" />
var casino = new Casino();
casino.welcome();
var Card = /** @class */ (function () {
    function Card(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
    }
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.suits = ["hearts", "diamonds", "spades", "clubs"];
        this.cards = [];
    }
    Deck.prototype.populate = function () {
        for (var i = 0; i < 4; i++) {
            for (var value = 1; value <= 13; value++) {
                if (value < 11) {
                    if (value === 1) {
                        this.cards.push(new Card(this.suits[i], "ace", value));
                    }
                    else {
                        this.cards.push(new Card(this.suits[i], value, value));
                    }
                }
                else {
                    this.cards.push(new Card(this.suits[i], faceCard(value), numValue(value)));
                }
            }
        }
        function faceCard(value) {
            switch (value) {
                case (11):
                    return "jack";
                case (12):
                    return "queen";
                case (13):
                    return "king";
            }
        }
        function numValue(value) {
            switch (value) {
                case (11):
                    return 10;
                case (12):
                    return 10;
                case (13):
                    return 10;
            }
        }
    };
    Deck.prototype.getDeck = function () {
        this.populate();
        return this.cards;
    };
    return Deck;
}());
var Player = /** @class */ (function () {
    function Player(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getBalance = function () {
        return this.balance;
    };
    Player.prototype.getHand = function () {
        return this.hand;
    };
    Player.prototype.setBalance = function (amount) {
        this.balance = amount;
    };
    Player.prototype.addToBalance = function (amount) {
        this.balance += amount;
    };
    return Player;
}());
//# sourceMappingURL=app.js.map