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
var Card = (function () {
    function Card(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;
    }
    return Card;
}());
var Deck = (function () {
    function Deck() {
        this.suits = ["hearts", "diamonds", "spades", "clubs"];
        this.cards = [];
        this.populate();
        this.shuffle();
        console.log(this.cards[this.cards.length - 1].suit);
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
    Deck.prototype.getCard = function () {
        this.shuffle();
        var card = this.cards.pop();
        return card;
    };
    Deck.prototype.getAllCards = function () {
        return this.cards;
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var randomChoiceIndex = this.getRandomInt(i, this.cards.length);
            _a = [this.cards[randomChoiceIndex], this.cards[i]], this.cards[i] = _a[0], this.cards[randomChoiceIndex] = _a[1];
        }
        var _a;
    };
    Deck.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Deck;
}());
var Player = (function () {
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
    Player.prototype.setBalance = function (amount) {
        this.balance = amount;
    };
    Player.prototype.addToBalance = function (amount) {
        this.balance += amount;
    };
    return Player;
}());
///<reference path="Deck.ts" />
///<reference path="Player.ts" />
var CardPlayer = (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer(player) {
        var _this = _super.call(this, player.getName(), player.getBalance()) || this;
        _this.hand = [];
        return _this;
    }
    CardPlayer.prototype.getHand = function () {
        return this.hand;
    };
    CardPlayer.prototype.addCard = function (card) {
        this.hand.push(card);
    };
    CardPlayer.prototype.clearHand = function () {
        this.hand = [];
    };
    CardPlayer.prototype.getFullHand = function () {
        var output = [];
        for (var i = 0; i < this.hand.length; i++) {
            var face = this.hand[i].faceValue;
            var suit = this.hand[i].suit;
            output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        }
        return output;
    };
    CardPlayer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    return CardPlayer;
}(Player));
///<reference path="CardPlayer.ts" />
var BlackJackPlayer = (function (_super) {
    __extends(BlackJackPlayer, _super);
    function BlackJackPlayer(player) {
        var _this = _super.call(this, player) || this;
        _this.score = 0;
        _this.score = 0;
        return _this;
    }
    BlackJackPlayer.prototype.getScore = function () {
        return this.score;
    };
    BlackJackPlayer.prototype.calculateScore = function () {
        this.score = 0;
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            this.score += card.value;
        }
        if (this.isAceInHand() && this.score <= 11) {
            this.score += 10;
        }
    };
    BlackJackPlayer.prototype.getName = function () {
        return this.name;
    };
    BlackJackPlayer.prototype.isAceInHand = function () {
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.faceValue === "ace") {
                return true;
            }
        }
        return false;
    };
    BlackJackPlayer.prototype.getInitialPlayerHand = function () {
        var output = [];
        var face = this.hand[0].faceValue;
        var suit = this.hand[0].suit;
        output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        output.push("<img src = ./images/cards/backofcard.jpg width=\"90\" height=\"130\">");
        return output;
    };
    return BlackJackPlayer;
}(CardPlayer));
///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />
var BlackJackDealer = (function (_super) {
    __extends(BlackJackDealer, _super);
    function BlackJackDealer(dealer) {
        return _super.call(this, dealer) || this;
    }
    BlackJackDealer.prototype.hitDealer = function () {
        return this.getScore() < 17;
    };
    BlackJackDealer.prototype.getInitialDealerHand = function () {
        var output = [];
        var face = this.hand[0].faceValue;
        var suit = this.hand[0].suit;
        output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        output.push("<img src = ./images/cards/backofcard.jpg width=\"90\" height=\"130\">");
        return output;
    };
    return BlackJackDealer;
}(BlackJackPlayer));
///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="CardPlayer.ts" />
var CardGame = (function () {
    function CardGame() {
        this.deck = new Deck();
    }
    CardGame.prototype.deal = function (player, dealer, amount) {
        this.clearHands(player, dealer);
        for (var i = 0; i < amount; i++) {
            this.deck.shuffle();
            dealer.addCard(this.deck.getCard());
            player.addCard(this.deck.getCard());
        }
    };
    CardGame.prototype.giveCard = function (player) {
        var addCard = this.deck.getCard();
        if (addCard !== null) {
            player.addCard(this.deck.getCard());
            return true;
        }
        return false;
    };
    CardGame.prototype.clearHands = function (player, dealer) {
        player.clearHand();
        dealer.clearHand();
    };
    return CardGame;
}());
/// <reference path="BlackJack.ts" />
///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />
///<reference path="BlackJackDealer.ts" />
///<reference path="CardGame.ts" />
var UI = (function () {
    function UI() {
        this.displayBalance = document.getElementById("balanceOut");
        this.displayEle = document.getElementById("display");
        this.displayElePLAYER = document.getElementById("player");
        this.userBet = document.getElementById("betAmountBox");
        this.displayBet = document.getElementById("betOut");
        this.CasinoScreen = document.getElementById("casinoBody");
        this.BlackJackScreen = document.getElementById("blackJackMain");
    }
    UI.prototype.setHitButtonVis = function (input) {
        document.getElementById("hit").hidden = input;
    };
    UI.prototype.setStayButtonVis = function (input) {
        document.getElementById("stay").hidden = input;
    };
    UI.prototype.setBetButtonVis = function (input) {
        document.getElementById("bet").hidden = input;
    };
    UI.prototype.setPlayAgainButtonVis = function (input) {
        document.getElementById("playagain").hidden = input;
    };
    UI.prototype.setBetAmountBoxButtonVis = function (input) {
        document.getElementById("betAmountBox").hidden = input;
    };
    UI.prototype.setLeaveButtonVis = function (input) {
        document.getElementById("leave").hidden = input;
    };
    UI.prototype.initDisplay = function (player) {
        this.displayBalance.value = player.balance;
        this.displayBet.value = " ENTER BET BELOW";
        this.printToDealer("Dealer's Cards:</br>");
        this.printToPlayer(player.getName() + "\'s Cards:</br>");
        this.initButtonDisplay();
    };
    UI.prototype.initButtonDisplay = function () {
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
        this.setBetAmountBoxButtonVis(false);
        this.setBetButtonVis(false);
        this.setPlayAgainButtonVis(true);
        this.setLeaveButtonVis(true);
    };
    UI.prototype.endOfHandButtonsDisplay = function () {
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
        this.setPlayAgainButtonVis(false);
        this.setLeaveButtonVis(false);
    };
    UI.prototype.resetPlayButtons = function () {
        this.setBetAmountBoxButtonVis(true);
        this.setBetButtonVis(true);
        this.setLeaveButtonVis(true);
        this.setPlayAgainButtonVis(true);
        this.setHitButtonVis(false);
        this.setStayButtonVis(false);
    };
    UI.prototype.outOfMoney = function () {
        this.printToPlayer("</br>OUT OF MONEY! GET OUT!");
        this.setBetAmountBoxButtonVis(true);
        this.setBetButtonVis(true);
        this.setLeaveButtonVis(false);
        this.setPlayAgainButtonVis(true);
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
    };
    UI.prototype.displayInitialHands = function (player, dealer) {
        var dealerHandDisplay = dealer.getInitialDealerHand();
        var playerHandDisplay = player.getInitialPlayerHand();
        for (var i = 0; i < 2; i++) {
            this.printToDealer(dealerHandDisplay[i]);
            this.printToPlayer(playerHandDisplay[i]);
        }
    };
    UI.prototype.displayDealtCard = function (player) {
        this.printToPlayer(this.displayCard(player.hand[player.hand.length - 1]));
    };
    UI.prototype.displayCard = function (card) {
        var cardDisplay = "<img src = ./images/cards/" + card.faceValue
            + "_of_" + card.suit + ".png width=\"90\" height=\"130\">";
        return cardDisplay;
    };
    UI.prototype.displayScore = function (player) {
        if (player.getName() === "Dealer") {
            this.printToDealer("</br>Dealer's Score: " + player.getScore());
        }
        else {
            this.printToPlayer("Your Score: " + player.getScore());
        }
    };
    UI.prototype.displayScores = function (player, dealer) {
        this.printToDealer("</br>Dealer's Score: " + dealer.getScore());
        this.printToPlayer("Your Score: " + player.getScore());
    };
    UI.prototype.displayHand = function (player) {
        var hand = player.getFullHand();
        if (player.getName() === "Dealer") {
            this.clearDealerScreen();
            this.printToDealer("Dealer's Cards:</br>");
            for (var i = 0; i < hand.length; i++) {
                this.printToDealer(hand[i]);
            }
        }
        else {
            this.clearPlayerScreen();
            this.printToPlayer(player.getName() + "\'s Cards:</br>");
            for (var i = 0; i < hand.length; i++) {
                this.printToPlayer(hand[i]);
            }
        }
    };
    UI.prototype.updateBalance = function (player) {
        this.displayBalance.value = player.getBalance();
    };
    UI.prototype.printToPlayer = function (prompt) {
        this.displayElePLAYER.innerHTML += prompt;
    };
    UI.prototype.printToDealer = function (prompt) {
        this.displayEle.innerHTML += prompt;
    };
    UI.prototype.invalidInput = function () {
        this.userBet.value = "INVALID INPUT";
    };
    UI.prototype.clearDealerScreen = function () {
        this.displayEle.innerHTML = "";
    };
    UI.prototype.clearPlayerScreen = function () {
        this.displayElePLAYER.innerHTML = "";
    };
    UI.prototype.clearScreen = function () {
        this.displayEle.innerHTML = "";
        this.displayElePLAYER.innerHTML = "";
    };
    UI.prototype.clearBetAmountBox = function () {
        this.userBet.value = "";
    };
    return UI;
}());
///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />
///<reference path="BlackJackDealer.ts" />
///<reference path="CardGame.ts" />
/// <reference path="UI.ts" />
var BlackJack = (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(player, dealer) {
        var _this = _super.call(this) || this;
        _this.ui = new UI();
        _this.player = new BlackJackPlayer(player);
        _this.dealer = new BlackJackDealer(dealer);
        _this.CasinoButtons = document.getElementById("buttonsArea");
        _this.CasinoMain = document.getElementById("CasinoMain");
        _this.BlackJackScreen = document.getElementById("blackJackMain");
        return _this;
    }
    BlackJack.prototype.getPlayer = function () {
        return this.player;
    };
    BlackJack.prototype.getDealer = function () {
        return this.dealer;
    };
    BlackJack.prototype.init = function () {
        this.CasinoMain.hidden = true;
        this.BlackJackScreen.hidden = false;
        this.ui.clearBetAmountBox();
        this.ui.initDisplay(this.player);
        this.play();
    };
    BlackJack.prototype.play = function () {
        this.deal(this.player, this.dealer, 2);
        this.ui.displayInitialHands(this.player, this.dealer);
    };
    BlackJack.prototype.hit = function () {
        this.player.addCard(this.deck.getCard());
        this.ui.displayDealtCard(this.player);
        this.checkForOver21();
    };
    BlackJack.prototype.stay = function () {
        this.player.calculateScore();
        this.dealerPlay();
        this.checkForWin();
        this.ui.displayScores(this.player, this.dealer);
        this.ui.updateBalance(this.player);
        this.checkBalanceAmount();
    };
    BlackJack.prototype.checkBalanceAmount = function () {
        if (this.player.balance < 1) {
            this.ui.outOfMoney();
        }
    };
    BlackJack.prototype.checkForOver21 = function () {
        this.player.calculateScore();
        if (this.player.getScore() > 21) {
            this.checkForWin();
            this.ui.displayHand(this.dealer);
            this.dealer.calculateScore();
            this.ui.displayScore(this.dealer);
        }
    };
    BlackJack.prototype.checkForWin = function () {
        this.ui.endOfHandButtonsDisplay();
        if (this.didPlayerWin()) {
            this.ui.printToPlayer("</br> YOU WIN!!!</br>");
            this.player.balance += parseInt(this.betAmount);
        }
        else {
            this.ui.printToPlayer("<br> YOU LOSE!!!</br>");
            this.player.balance -= this.betAmount;
        }
    };
    BlackJack.prototype.didPlayerWin = function () {
        var playerScore = this.player.getScore();
        var dealerScore = this.dealer.getScore();
        if ((playerScore == 21 && dealerScore != 21) ||
            (playerScore < 21 && dealerScore < playerScore) ||
            (playerScore < 21 && dealerScore > 21)) {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJack.prototype.dealerPlay = function () {
        this.dealer.calculateScore();
        while (this.dealer.getScore() < 17) {
            this.dealer.addCard(this.deck.getCard());
            this.dealer.calculateScore();
        }
        this.ui.clearDealerScreen();
        this.ui.displayHand(this.dealer);
    };
    BlackJack.prototype.playAgain = function () {
        this.deck = new Deck();
        this.ui.clearScreen();
        this.init();
    };
    BlackJack.prototype.placeBet = function () {
        if (this.checkBetInput(this.ui.userBet.value)) {
            this.betAmount = this.ui.userBet.value;
            this.ui.displayBet.value = this.betAmount;
            this.ui.resetPlayButtons();
            this.ui.displayHand(this.player);
        }
        else {
            this.ui.invalidInput();
        }
    };
    BlackJack.prototype.checkBetInput = function (input) {
        if (input > 0 && input <= this.player.balance) {
            return true;
        }
        else {
            return false;
        }
    };
    return BlackJack;
}(CardGame));
var Craps = (function () {
    function Craps(player) {
        this.displayEle = document.getElementById("displayCraps");
        this.userInputEle = document.getElementById("user_input");
        this.betInput = document.getElementById("betAmount");
        this.CasinoButtons = document.getElementById("buttonsArea");
        this.CasinoMain = document.getElementById("CasinoMain");
        this.CrapsMain = document.getElementById("mainCraps");
        this.player = player;
        // this.bet = parseInt(this.betInput);
    }
    Craps.prototype.init = function () {
        this.CasinoButtons.hidden = true;
        this.CasinoMain.hidden = true;
        this.CrapsMain.hidden = false;
        this.welcomePlayer();
    };
    Craps.prototype.welcomePlayer = function () {
        this.displayEle.innerHTML += "<br/>Hello " + this.player.getName() + " you have $" + this.player.getBalance() + " in your account.";
    };
    Craps.prototype.play = function () {
        document.getElementById("roll").disabled = false;
        document.getElementById("rollTwo").disabled = false;
        this.bet = parseInt(this.betInput.value);
        if (this.bet <= this.player.getBalance() || this.bet == 0) {
            if (this.bet == 0) {
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
            document.getElementById("roll").disabled = true;
            document.getElementById("rollTwo").disabled = true;
        }
        else if (rollOne == 7 || rollOne == 11) {
            this.player.setBalance(this.player.getBalance() + this.bet);
            this.displayEle.innerHTML += "</br>" + rollOne + " You Won and your balance is :"
                + this.player.getBalance() + "</br>";
            document.getElementById("roll").disabled = true;
            document.getElementById("rollTwo").disabled = true;
        }
        else {
            this.displayEle.innerHTML += "</br>" + rollOne + "<br/>";
            this.displayEle.innerHTML += "</br>" + "You need a " + rollOne + " to win the game .Press RollTwo <br/>";
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
            document.getElementById("rollTwo").disabled = true;
        }
        else if (rollTwo == this.point) {
            this.player.setBalance(this.player.getBalance() + this.bet);
            this.displayEle.innerHTML += "</br>" + "You got " + rollTwo + " You Won and your balance is " +
                this.player.getBalance() + "<br/>";
            document.getElementById("rollTwo").disabled = true;
        }
        else {
            this.displayEle.innerHTML += "</br>You got  " + rollTwo + ". You need " + this.point + " to win</br>";
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
        return "<img src=\"./images/logos/dice_" + x + ".png\" align=\"middle\" />";
    };
    return Craps;
}());
/// <reference path="Player.ts" />
/// <reference path="BlackJack.ts" />
/// <reference path="Craps.ts" />
var Casino = (function () {
    function Casino() {
        this.displayEle = document.getElementById("displayCasino");
        this.userInputEle = document.getElementById("user_inputCasino");
        this.listener = document.getElementById("submitCasino");
        this.visibility = document.getElementById("buttonsArea");
        this.CasinoMain = document.getElementById("CasinoMain");
        this.BlackJackScreen = document.getElementById("blackJackMain");
        this.CrapsScreen = document.getElementById("mainCraps");
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
    Casino.prototype.createBlackJackGame = function () {
        var dealer = new Player("Dealer", 1000);
        this.blackJack = new BlackJack(this.player, dealer);
        this.blackJack.init();
    };
    Casino.prototype.createCrapsGame = function () {
        this.craps = new Craps(this.player);
        this.craps.init();
    };
    Casino.prototype.displayOptions = function () {
        this.displayEle.innerHTML = "Player: " + this.player.getName() + "<br/>Money: " + this.player.getBalance() + "<br/>" +
            "<br/><br/><br/>What game would you like to play???<br/><br/><br/><br/><br/><br/>          <-------------------<br/>" +
            "<-------------------<br/>          <-------------------<br/>";
        this.changeButtonVisability();
    };
    Casino.prototype.changeButtonVisability = function () {
        this.visibility.removeAttribute("hidden");
        this.CrapsScreen.hidden = true;
        this.BlackJackScreen.hidden = true;
        this.CasinoMain.hidden = false;
    };
    Casino.prototype.callPlay = function () {
        this.craps.play();
    };
    Casino.prototype.callRoll = function () {
        this.craps.roll();
    };
    Casino.prototype.callRollTwo = function () {
        this.craps.checkRollTwo();
    };
    Casino.prototype.callPlaceBet = function () {
        this.blackJack.placeBet();
    };
    Casino.prototype.callHit = function () {
        this.blackJack.hit();
    };
    Casino.prototype.callStay = function () {
        this.blackJack.stay();
    };
    Casino.prototype.callBJPlayAgain = function () {
        this.blackJack.playAgain();
    };
    return Casino;
}());
/// <reference path="Casino.ts" />
var casino = new Casino();
casino.welcome();
var GoFish = (function () {
    function GoFish() {
        this.displayEle = document.getElementById("goFishConsole");
        this.userInputEle = document.getElementById("user_inputGoFish");
    }
    GoFish.prototype.welcome = function () {
        this.displayEle.innerHTML += "Welcome to Go Fish";
    };
    return GoFish;
}());
//# sourceMappingURL=app.js.map