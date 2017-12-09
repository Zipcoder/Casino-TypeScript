var GoFish = /** @class */ (function () {
    function GoFish() {
        this.displayEle = document.getElementById("goFishConsole");
        this.userInputEle = document.getElementById("user_inputGoFish");
    }
    GoFish.prototype.welcome = function () {
        this.displayEle.innerHTML += "Welcome to Go Fish";
    };
    return GoFish;
}());
// /// <reference path="Casino.ts" />
// let casino = new Casino();
// casino.welcome();
/// <reference path="GoFish.ts" />
var goFish = new GoFish();
goFish.welcome();
var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("displayCasino");
        this.userInputEle = document.getElementById("user_inputCasino");
        this.listener = document.getElementById("submitCasino");
        this.visibility = document.getElementById("buttonsArea");
    }
    Casino.prototype.welcome = function () {
        this.displayEle.innerHTML += "Welcome To Grahmerro Casino!!!<br/>What is your name?";
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
        this.displayEle.innerHTML = "Player: " + this.player.getName() + "<br/>Money: " + this.player.getBalance() + "<br/>" +
            "<br/><br/><br/>What game would you like to play???<br/><br/><br/><br/><br/><br/>          <-------------------<br/>" +
            "<-------------------<br/>          <-------------------<br/>";
        this.changeButtonVisability();
        var goFish = new GoFish();
        goFish.init();
    };
    Casino.prototype.changeButtonVisability = function () {
        this.visibility.removeAttribute("hidden");
    };
    return Casino;
}());
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