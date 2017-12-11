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
var Player = /** @class */ (function () {
    function Player(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getAge = function () {
        return this.age;
    };
    Player.prototype.getAmount = function () {
        return this.amount;
    };
    Player.prototype.toString = function () {
        return "Name: " + this.name + " | Age: " + this.age + " | Amount: " + this.amount;
    };
    return Player;
}());
var Card = /** @class */ (function () {
    function Card(suit, numValue, faceValue) {
        this.suit = suit;
        this.numValue = numValue;
        this.faceValue = faceValue;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getNumValue = function () {
        return this.numValue;
    };
    Card.prototype.getFaceValue = function () {
        return this.faceValue;
    };
    Card.prototype.toString = function () {
        return this.faceValue + " of " + this.suit;
        //return "Suit: "+this.suit+" Value: "+this.value;
    };
    return Card;
}());
/// <reference path="card.ts"/>
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];
        this.faceValues = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];
    }
    Deck.prototype.createFullDeck = function () {
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var i = 0; i < this.faceValues.length; i++) {
                var num = i + 1;
                if (num > 10) {
                    num = 10;
                }
                this.cards.push(new Card(suit, num, this.faceValues[i]));
            }
        }
        this.shuffle();
    };
    Deck.prototype.getDeck = function () {
        this.createFullDeck();
        return this.cards;
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var randonNum = Math.floor(Math.random() * this.cards.length);
            _a = [this.cards[randonNum], this.cards[i]], this.cards[i] = _a[0], this.cards[randonNum] = _a[1];
        }
        var _a;
    };
    return Deck;
}());
/// <reference path="player.ts"/>
var CardPlayer = /** @class */ (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer() {
        var _this = _super.call(this, "CardPlayer", 0, 0) || this;
        _this.cardHeight = 117;
        _this.cardWidth = 81;
        _this.finalStringImg = ".png width=" + _this.cardWidth + "height=" + _this.cardHeight + ">";
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
    CardPlayer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    CardPlayer.prototype.sort = function () {
        this.hand.sort();
    };
    CardPlayer.prototype.displayHand = function (sort) {
        if (sort) {
            this.sort();
        }
        var displayHand = document.getElementById("playerHand");
        displayHand.innerHTML = "";
        for (var i = 0; i < this.hand.length; i++) {
            var currentCard = this.hand[i];
            displayHand.innerHTML += this.cardImg(currentCard);
        }
    };
    CardPlayer.prototype.getDisplayHand = function () {
        var displayString = "";
        for (var i = 0; i < this.hand.length; i++) {
            var currentCard = this.hand[i];
            displayString += this.cardImg(currentCard);
        }
        return displayString;
    };
    CardPlayer.prototype.getFirstCardImg = function () {
        var jokerCard = "<img src = ././images/cards/red_joker" + this.finalStringImg;
        return this.cardImg(this.hand[0]) + jokerCard;
    };
    CardPlayer.prototype.logHand = function () {
        for (var i = 0; i < this.hand.length; i++) {
            console.log(this.hand[i].getFaceValue() + " " + this.hand[i].getSuit());
        }
    };
    CardPlayer.prototype.cardImg = function (card) {
        return "<img src = ././images/cards/" + card.getFaceValue() + "_of_" + card.getSuit() + this.finalStringImg;
    };
    return CardPlayer;
}(Player));
/// <reference path="../Util/deck.ts"/>
/// <reference path="../Player/cardPlayer.ts"/>
/// <reference path="../casino.ts"/>
var CardGame = /** @class */ (function () {
    function CardGame() {
        this.deck = new Deck().getDeck();
    }
    CardGame.prototype.dealCards = function (dealer, player, amount) {
        dealer.clearHand();
        player.clearHand();
        for (var i = 0; i < amount; i++) {
            dealer.addCard(this.deck.pop());
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.giveCards = function (player, amount) {
        for (var i = 0; i < amount; i++) {
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.getDeck = function () {
        return this.deck;
    };
    return CardGame;
}());
/// <reference path="cardGame.ts"/>
var GoFish = /** @class */ (function (_super) {
    __extends(GoFish, _super);
    function GoFish(player) {
        var _this = _super.call(this) || this;
        _this.display = document.getElementById("display");
        _this.input = document.getElementById("text_input");
        _this.button = document.getElementById("submit");
        _this.player = new GoFishPlayer(player);
        _this.dealer = new GoFishPlayer(new Player("Dealer", 0, 0));
        return _this;
    }
    GoFish.prototype.init = function () {
        this.display.innerHTML = "";
        document.getElementById("header").innerHTML = "Welcome to Go Fish!";
        document.getElementById("cardGame").hidden = false;
        this.input.setAttribute("placeholder", "ASK CARD");
        this.input.value = "";
        this.button.setAttribute("onclick", "casino.goFish.askPlayerForCardClick()");
        this.dealCards(this.dealer, this.player, 7);
        this.playerTurn();
    };
    GoFish.prototype.playerTurn = function () {
        this.display.innerHTML += "What would you like to ask for?";
        this.player.displayHand(true);
        document.getElementById("userNameHand").innerHTML = "User Hand | You have " + this.player.getBookCount() + this.spelling(this.player.getBookCount());
        console.clear();
        console.log("Dealer Hand");
        this.dealer.logHand();
    };
    GoFish.prototype.spelling = function (num) {
        if (num == 1) {
            return " book";
        }
        return " books";
    };
    GoFish.prototype.dealerTurn = function () {
        var randonNum = Math.floor(Math.random() * this.dealer.getHand().length);
        var dealerAsk = this.dealer.getHand()[randonNum].getFaceValue();
        this.display.innerHTML += "<br>Dealer asks for " + dealerAsk + ".";
        this.dealerCheck(dealerAsk);
    };
    GoFish.prototype.dealerCheck = function (askCard) {
        if (this.checkInHand(askCard, this.player)) {
            this.swapCards(this.player, this.dealer, askCard);
            this.checkHandSize(this.player);
            this.display.innerHTML += "<br>Dealer got a match<br>";
            this.checkBooks(this.dealer);
            this.dealerTurn();
        }
        else {
            this.display.innerHTML += "<br>Dealer did not get a match<br>";
            _super.prototype.giveCards.call(this, this.dealer, 1);
            this.playerTurn();
        }
    };
    GoFish.prototype.askPlayerForCardClick = function () {
        var playerInput = this.input.value.toLowerCase();
        this.input.value = "";
        if (this.checkInHand(playerInput, this.dealer)) {
            this.swapCards(this.dealer, this.player, playerInput);
            this.checkHandSize(this.dealer);
            this.display.innerHTML = "You got a match<br>";
            this.checkBooks(this.player);
            this.playerTurn();
        }
        else {
            this.display.innerHTML = "No match GO FISH!<br>";
            _super.prototype.giveCards.call(this, this.player, 1);
            this.dealerTurn();
        }
    };
    GoFish.prototype.checkHandSize = function (player) {
        if (player.getHand().length == 0) {
            _super.prototype.giveCards.call(this, player, 5);
        }
    };
    GoFish.prototype.swapCards = function (fromPlayer, toPlayer, swap) {
        var newHand = [];
        for (var i = 0; i < fromPlayer.getHand().length; i++) {
            var currentCard = fromPlayer.getHand()[i];
            if (currentCard.getFaceValue().toLowerCase() == swap.toLowerCase()) {
                toPlayer.addCard(currentCard);
            }
            else {
                newHand.push(currentCard);
            }
        }
        fromPlayer.setHand(newHand);
    };
    GoFish.prototype.checkInHand = function (input, player) {
        for (var i = 0; i < player.getHand().length; i++) {
            if (input.toLowerCase() == player.getHand()[i].getFaceValue().toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    GoFish.prototype.checkBooks = function (player) {
        var map = [];
        for (var i = 0; i < player.getHand().length; i++) {
            var place = player.getHand()[i].getFaceValue();
            if (map[place] == undefined) {
                map[place] = 1;
            }
            else {
                map[place] += 1;
            }
        }
        for (var key in map) {
            if (map[key] == 4) {
                console.log("Book Found");
                this.makeBook(player, key);
            }
        }
    };
    GoFish.prototype.makeBook = function (player, value) {
        var newHand = [];
        for (var i = 0; i < player.getHand().length; i++) {
            var currentCard = player.getHand()[i];
            if (currentCard.getFaceValue().toLowerCase() != value.toLowerCase()) {
                newHand.push(currentCard);
            }
        }
        player.setHand(newHand);
        player.addBook();
    };
    return GoFish;
}(CardGame));
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.display = document.getElementById("display");
        this.input = document.getElementById("text_input");
        this.button = document.getElementById("submit");
    }
    Craps.prototype.init = function () {
        document.getElementById("display").innerHTML = "Welcome to Craps!";
        this.button.value = "Roll The Dice";
        this.button.setAttribute("onclick", "casino.craps.wonRound()");
        //this.input.hidden = true;
    };
    Craps.prototype.wonRound = function () {
        var win = 0;
        var lose = 0;
        var diceValue = Dice.getRandomInt(2, 12);
        document.getElementById("display").innerHTML += "<br>" + diceValue;
        if (diceValue === 7 || diceValue === 11) {
            win = 1;
            var rollWin = "You rolled " + diceValue + ". <br>You Win!";
            document.getElementById("display").innerHTML += "<br>" + rollWin;
        }
        else if (diceValue === 2 || diceValue === 3 || diceValue === 12) {
            lose = 1;
            var rollLose = "You rolled " + diceValue + ". You Lose.";
            document.getElementById("display").innerHTML += "<br>" + rollLose;
        }
        else {
            document.getElementById("display").innerHTML += "<br>" + "Keep rolling until you hit the point number.";
            var secondRoll = Dice.getRandomInt(2, 12);
            while (secondRoll != diceValue && secondRoll != 7) {
                secondRoll = Dice.getRandomInt(2, 12);
            }
            if (secondRoll === 7) {
                document.getElementById("display").innerHTML += "<br>" + "You rolled a 7. You Lost!";
                lose = 1;
            }
            else {
                document.getElementById("display").innerHTML += "<br>" + "You rolled the point number " + secondRoll + "<br>You Win!";
                win = 1;
            }
        }
        return win > lose;
    };
    return Craps;
}());
var BlackjackPlayer = /** @class */ (function (_super) {
    __extends(BlackjackPlayer, _super);
    function BlackjackPlayer(player) {
        var _this = _super.call(this) || this;
        _this.player = player;
        return _this;
    }
    BlackjackPlayer.prototype.displayScore = function () {
        document.getElementById("userNameHand").innerHTML = "User Hand Score: " + this.getScore();
    };
    BlackjackPlayer.prototype.getScore = function () {
        var total = 0;
        for (var i = 0; i < _super.prototype.getHand.call(this).length; i++) {
            total += _super.prototype.getHand.call(this)[i].getNumValue();
        }
        if (this.aceInHand() && total <= 11) {
            total += 10;
        }
        return total;
    };
    BlackjackPlayer.prototype.aceInHand = function () {
        for (var i = 0; i < _super.prototype.getHand.call(this).length; i++) {
            if (_super.prototype.getHand.call(this)[i].getNumValue() == 1) {
                return true;
            }
        }
        return false;
    };
    return BlackjackPlayer;
}(CardPlayer));
/// <reference path="../Player/blackjackPlayer.ts"/>
var Blackjack = /** @class */ (function (_super) {
    __extends(Blackjack, _super);
    function Blackjack(player) {
        var _this = _super.call(this) || this;
        _this.display = document.getElementById("display");
        _this.input = document.getElementById("text_input");
        _this.submit = document.getElementById("submit");
        _this.player = new BlackjackPlayer(player);
        _this.dealer = new BlackjackDealer();
        _this.potEle = document.getElementById("pot");
        _this.blackjackInput = document.getElementById("blackjack");
        _this.cardGameEle = document.getElementById("cardGame");
        _this.playAgainEle = document.getElementById("playAgain");
        return _this;
    }
    Blackjack.prototype.init = function () {
        document.getElementById("header").innerHTML = "Welcome to Blackjack!";
        this.playAgainEle.setAttribute("onclick", "casino.blackjack.playAgain()");
        this.takeBet();
    };
    Blackjack.prototype.takeBet = function () {
        this.input.setAttribute("placeholder", "BET");
        this.input.setAttribute("type", "number");
        this.input.value = "";
        this.submit.setAttribute("onclick", "casino.blackjack.inputBet()");
        this.display.innerHTML = "How much would you like to bet?";
    };
    Blackjack.prototype.swapHideElements = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].hidden = (elements[i].hidden) ? false : true;
        }
    };
    Blackjack.prototype.showStart = function () {
        this.swapHideElements(this.cardGameEle, this.input, this.submit, this.potEle, this.blackjackInput);
    };
    Blackjack.prototype.inputBet = function () {
        this.pot = parseInt(this.input.value);
        this.showStart();
        this.input.setAttribute("type", "text");
        this.potEle.innerHTML = "Pot: " + this.pot;
        _super.prototype.dealCards.call(this, this.dealer, this.player, 2);
        this.playerTurn();
    };
    Blackjack.prototype.displayUserInfo = function () {
        this.player.displayHand(false);
        this.player.displayScore();
    };
    Blackjack.prototype.playerTurn = function () {
        this.displayUserInfo();
        console.clear();
        this.dealer.logHand();
        this.displayDealerHand();
    };
    Blackjack.prototype.displayDealerHand = function () {
        this.setDisplay("Dealer is showing<br>" + this.dealer.getFirstCardImg());
    };
    Blackjack.prototype.hit = function () {
        _super.prototype.giveCards.call(this, this.player, 1);
        if (this.player.getScore() > 21) {
            this.setDisplay("Bust");
            this.endGame();
        }
        else {
            this.playerTurn();
        }
    };
    Blackjack.prototype.stay = function () {
        this.getDealerFinalScore();
        this.compareScores();
    };
    Blackjack.prototype.compareScores = function () {
        if ((this.player.getScore() == 21 && this.dealer.getScore() != 21) ||
            (this.player.getScore() < 21 && this.dealer.getScore() < this.player.getScore()) ||
            (this.player.getScore() < 21 && this.dealer.getScore() > 21)) {
            this.setDisplay("You win");
        }
        else {
            this.setDisplay("You lose");
        }
        this.endGame();
    };
    Blackjack.prototype.endGame = function () {
        this.displayUserInfo();
        this.addToDisplay("<br>Dealer had: " + this.dealer.getScore() + "<br>" + this.dealer.getDisplayHand());
        this.swapHideElements(this.potEle, this.playAgainEle, document.getElementById("mainMenu"), document.getElementById("blackjack"));
    };
    Blackjack.prototype.playAgain = function () {
        this.swapHideElements(this.blackjackInput, this.potEle, this.submit, this.input, this.potEle, this.playAgainEle, document.getElementById("mainMenu"), document.getElementById("blackjack"));
        document.getElementById("cardGame").hidden = true;
        this.player.clearHand();
        this.dealer.clearHand();
        this.takeBet();
    };
    Blackjack.prototype.getDealerFinalScore = function () {
        while (this.dealer.hitDealer()) {
            _super.prototype.giveCards.call(this, this.dealer, 1);
        }
    };
    Blackjack.prototype.setDisplay = function (output) {
        this.display.innerHTML = output;
    };
    Blackjack.prototype.addToDisplay = function (output) {
        this.display.innerHTML += output;
    };
    return Blackjack;
}(CardGame));
/// <reference path="Player/player.ts"/>
/// <reference path="games/goFish.ts"/>
/// <reference path="games/craps.ts"/>
/// <reference path="games/blackjack.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("display");
        this.textInput = document.getElementById("text_input");
        this.submit = document.getElementById("submit");
    }
    Casino.prototype.init = function () {
        this.loginOptions();
        //this.gameOptions();
    };
    Casino.prototype.loginOptions = function () {
        this.displayEle.innerHTML = "Enter your name";
    };
    Casino.prototype.refresh = function () {
        window.location.reload();
    };
    Casino.prototype.getName = function () {
        this.name = this.textInput.value;
        this.textInput.value = "";
        this.textInput.setAttribute("placeholder", "AGE");
        this.textInput.setAttribute("type", "number");
        this.submit.setAttribute("onclick", "casino.getAge()");
        this.displayEle.innerHTML = "Enter age";
    };
    Casino.prototype.getAge = function () {
        this.age = parseInt(this.textInput.value);
        this.textInput.value = "";
        this.textInput.setAttribute("placeholder", "AMOUNT");
        this.submit.setAttribute("onclick", "casino.getAmount()");
        this.displayEle.innerHTML = "Enter amount";
    };
    Casino.prototype.getAmount = function () {
        this.amount = parseInt(this.textInput.value);
        this.textInput.value = "";
        this.textInput.setAttribute("type", "text");
        this.player = new Player(this.name, this.age, this.amount);
        document.getElementById("userInfo").innerHTML = this.player.toString();
        document.getElementById("userInfo").hidden = false;
        this.gameOptions();
    };
    Casino.prototype.gameOptions = function () {
        document.getElementById("cardGame").hidden = true;
        this.displayEle.innerHTML = "What game would you like to play?<br>Options:<br>| BLACKJACK | GO FISH | CRAPS |";
        this.submit.setAttribute("onclick", "casino.takeOptions()");
        this.textInput.setAttribute("placeholder", "GAME");
        // document.getElementById("gameOptions").hidden = false;
        // this.submit.hidden = true;
        // this.textInput.hidden = true;
        // this.goFish = new GoFish(this.player);
        // this.craps = new Craps(this.player);
        // this.blackjack = new Blackjack(this.player);
    };
    Casino.prototype.takeOptions = function () {
        var input = this.textInput.value;
        switch (input.toLowerCase()) {
            case "go fish": {
                this.goFish = new GoFish(this.player);
                this.goFish.init();
                break;
            }
            case "craps": {
                this.craps = new Craps(this.player);
                this.craps.init();
                break;
            }
            case "blackjack": {
                this.blackjack = new Blackjack(this.player);
                this.blackjack.init();
                break;
            }
        }
    };
    Casino.prototype.nameInput = function () {
        this.displayEle.innerHTML += "<br>Enter name below";
    };
    Casino.prototype.getPlayer = function () {
        return this.player;
    };
    return Casino;
}());
/// <reference path="cardPlayer.ts"/>
var GoFishPlayer = /** @class */ (function (_super) {
    __extends(GoFishPlayer, _super);
    function GoFishPlayer(player) {
        var _this = _super.call(this) || this;
        _this.bookCounter = 0;
        return _this;
    }
    GoFishPlayer.prototype.addBook = function () {
        this.bookCounter += 1;
    };
    GoFishPlayer.prototype.getBookCount = function () {
        return this.bookCounter;
    };
    return GoFishPlayer;
}(CardPlayer));
/// <reference path="casino.ts"/>
/// <reference path="games/craps.ts"/>
/// <reference path="Util/deck.ts"/>
/// <reference path="games/goFish.ts"/>
/// <reference path="Player/gofishPlayer.ts"/>
var casino = new Casino();
casino.init();
// var craps = new Craps();
// var deck = new Deck()
// let goFish = new GoFish(casino.getPlayer())
//goFish.init();
/// <reference path="player.ts"/>
var BlackjackDealer = /** @class */ (function (_super) {
    __extends(BlackjackDealer, _super);
    function BlackjackDealer() {
        return _super.call(this, new Player("DEALER", 0, 0)) || this;
    }
    BlackjackDealer.prototype.hitDealer = function () {
        return _super.prototype.getScore.call(this) < 17;
    };
    return BlackjackDealer;
}(BlackjackPlayer));
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Dice;
}());
//# sourceMappingURL=app.js.map