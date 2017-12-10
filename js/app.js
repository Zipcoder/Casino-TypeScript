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
        document.getElementById("roll").disabled = false;
        document.getElementById("rollTwo").disabled = false;
        this.bet = parseInt(this.betInput.value);
        if (this.bet < this.player.getBalance() || this.betInput.value.length == 0) {
            if (this.betInput.value.length == 0) {
                this.displayEle.innerHTML += "</br> Please enter your bet amount </br>";
            }
            else {
                this.displayEle.innerHTML += "</br> Your bet amount is " + this.bet + "</br";
            }
        }
        else {
            this.displayEle.innerHTML += "</br> You don't have enough balance </br>";
        }
    };
    Craps.prototype.roll = function () {
        var rollOne = this.callRoll();
        if (rollOne == 2 || rollOne == 3 || rollOne == 12) {
            this.player.setBalance(this.player.getBalance() - this.bet);
            this.displayEle.innerHTML += "</br>" + rollOne + " You lose and your balance is :"
                + this.player.getBalance() + "</br>";
            // this.clearBox("displayCraps");
            document.getElementById("roll").disabled = true;
            document.getElementById("rollTwo").disabled = true;
        }
        else if (rollOne == 7 || rollOne == 11) {
            this.player.setBalance(this.player.getBalance() + this.bet);
            this.displayEle.innerHTML += "</br>" + rollOne + " You Won !!!and your balance is :"
                + this.player.getBalance() + "</br>";
            // this.clearBox("displayCraps");
            document.getElementById("roll").disabled = true;
            document.getElementById("rollTwo").disabled = true;
        }
        else {
            this.displayEle.innerHTML += "</br>" + rollOne + "<br/>";
            this.displayEle.innerHTML += "</br>" + "You need a " + rollOne + " to win the game .Press Roll Again <br/>";
            this.point = rollOne;
            document.getElementById("roll").disabled = true;
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
            this.player.setBalance(this.player.getBalance() - this.bet);
            console.log("next roll point is Seven" + rollTwo);
            this.displayEle.innerHTML += "</br>" + "You got " + rollTwo + " You lose the game and your balance is " +
                this.player.getBalance() + "<br/>";
            // this.clearBox("displayCraps");
            document.getElementById("rollTwo").disabled = true;
        }
        else if (rollTwo == this.point) {
            this.player.setBalance(this.player.getBalance() + this.bet);
            this.displayEle.innerHTML += "</br>" + "You got " + rollTwo + " You Won!!! and your balance is " +
                this.player.getBalance() + "<br/>";
            // this.clearBox("displayCraps");
            document.getElementById("rollTwo").disabled = true;
        }
        else {
            this.displayEle.innerHTML += "</br>You got  " + rollTwo + ". You need " + this.point + " to win. Press Roll Again</br>";
        }
    };
    Craps.prototype.callRoll = function () {
        var die1 = Math.floor(Math.random() * 6) + 1;
        var die2 = Math.floor(Math.random() * 6) + 1;
        var roll = die1 + die2;
        document.getElementById("hDie1").innerHTML = this.showDice(die1);
        document.getElementById("hDie2").innerHTML = this.showDice(die2);
        return roll;
    };
    Craps.prototype.showDice = function (x) {
        return "<img src=\"./images/dice/dice_" + x + ".png\" align=\"middle\" />";
    };
    Craps.prototype.clearBox = function (elementID) {
        document.getElementById(elementID).innerHTML = "";
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