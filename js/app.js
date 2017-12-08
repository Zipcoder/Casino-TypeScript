var Craps = /** @class */ (function () {
    function Craps(player) {
        this.displayEle = document.getElementById("displayCraps");
        this.userInputEle = document.getElementById("user_input");
        this.betInput = document.getElementById("betAmount");
        this.player = player;
    }
    Craps.prototype.init = function () {
        this.welcomePlayer();
    };
    Craps.prototype.welcomePlayer = function () {
        this.displayEle.innerHTML += "<br/>Hello " + this.player.getName() + " you have $" + this.player.getBalance() + " in your account.";
    };
    Craps.prototype.play = function () {
        var bet = parseInt(this.betInput.value);
        this.displayEle.innerHTML += bet + "</br";
    };
    Craps.prototype.roll = function () {
        var rollOne = this.callRoll();
        if (rollOne == 2 || rollOne == 3 || rollOne == 12) {
            this.displayEle.innerHTML += rollOne + " You lose </br>";
        }
        else if (rollOne == 7 || rollOne == 11) {
            this.displayEle.innerHTML += rollOne + " You Won </br>";
        }
        else {
            this.displayEle.innerHTML += rollOne + "<br/>";
            this.displayEle.innerHTML += "You need a " + rollOne + " to win the game .Press RollTwo <br/>";
            this.point = rollOne;
        }
    };
    Craps.prototype.setPoint = function () {
        var setPlayerpoint = this.point;
        return setPlayerpoint;
    };
    Craps.prototype.checkRollTwo = function () {
        var rollTwo = this.callRoll();
        console.log("next roll point " + rollTwo);
        if (rollTwo == 7) {
            console.log("next roll point is Seven" + rollTwo);
            this.displayEle.innerHTML += "You got " + rollTwo + " You lose the game<br/>";
        }
        else if (rollTwo == this.point) {
            this.displayEle.innerHTML += "You got " + rollTwo + " You Won </br>";
        }
        else {
            this.displayEle.innerHTML += "next roll point " + rollTwo + ". You need " + this.point + " to win</br>";
        }
    };
    Craps.prototype.callRoll = function () {
        var roll = Math.floor(Math.random() * (12 - 2 + 1) + 2);
        return roll;
    };
    return Craps;
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
/// <reference path="Craps.ts" />
/// <reference path="Player.ts" />
var merin = new Player("Merin", 400);
var craps = new Craps(merin);
craps.init();
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
//# sourceMappingURL=app.js.map