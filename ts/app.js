var UserInterface = /** @class */ (function () {
    function UserInterface() {
        var _this = this;
        this.userInput = document.getElementById('user_input');
        this.window = document.getElementById('display');
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
        this.button.addEventListener("click", function (e) { return console.log(_this._lastInput); });
        this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
        // this.chooseGame = this.chooseGame.bind(this);
    }
    UserInterface.prototype.display = function (input) { this.window.innerText += input + '\n'; };
    UserInterface.prototype.clearScreen = function () { this.window.innerText = ''; };
    UserInterface.prototype.lastInput = function () { return this._lastInput; };
    UserInterface.prototype.start = function () {
        var _this = this;
        this.display("Do you want to play Blackjack? (y/n)");
        this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
    };
    UserInterface.prototype.chooseGame = function () {
        var _this = this;
        // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        if (this.lastInput() === "y") {
            this.clearScreen();
            this.display("Ok, let's play Blackjack.");
            // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        }
        else if (this.lastInput() === "n") {
            this.clearScreen();
            this.display("All right, good-bye. Live your best life.");
            // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        }
        else {
            this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
            // this.display("Please try again");
        }
    };
    return UserInterface;
}());
var MathOps = /** @class */ (function () {
    function MathOps() {
    }
    MathOps.sum = function (number1, number2) { return (number1 + number2); };
    return MathOps;
}());
var RankNumber = /** @class */ (function () {
    function RankNumber() {
    }
    RankNumber.getInstance = function () {
        if (this._INSTANCE === null) {
            this._INSTANCE = new RankNumber();
        }
        return this._INSTANCE;
    };
    RankNumber.getRankNumbers = function () { return this.rankNumbers; };
    RankNumber.DEUCE = function () { return this.rankNumbers[0]; };
    RankNumber.THREE = function () { return this.rankNumbers[1]; };
    RankNumber.FOUR = function () { return this.rankNumbers[2]; };
    RankNumber.FIVE = function () { return this.rankNumbers[3]; };
    RankNumber.SIX = function () { return this.rankNumbers[4]; };
    RankNumber.SEVEN = function () { return this.rankNumbers[5]; };
    RankNumber.EIGHT = function () { return this.rankNumbers[6]; };
    RankNumber.NINE = function () { return this.rankNumbers[7]; };
    RankNumber.TEN = function () { return this.rankNumbers[8]; };
    RankNumber.JACK = function () { return this.rankNumbers[9]; };
    RankNumber.QUEEN = function () { return this.rankNumbers[10]; };
    RankNumber.KING = function () { return this.rankNumbers[11]; };
    RankNumber.ACE = function () { return this.rankNumbers[12]; };
    RankNumber.rankNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
    return RankNumber;
}());
var RankString = /** @class */ (function () {
    function RankString() {
    }
    RankString.getInstance = function () {
        if (this._INSTANCE === null) {
            this._INSTANCE = new RankString();
        }
        return this._INSTANCE;
    };
    RankString.getRankStrings = function () { return this.rankStrings; };
    RankString.DEUCE = function () { return this.rankStrings[0]; };
    RankString.THREE = function () { return this.rankStrings[1]; };
    RankString.FOUR = function () { return this.rankStrings[2]; };
    RankString.FIVE = function () { return this.rankStrings[3]; };
    RankString.SIX = function () { return this.rankStrings[4]; };
    RankString.SEVEN = function () { return this.rankStrings[5]; };
    RankString.EIGHT = function () { return this.rankStrings[6]; };
    RankString.NINE = function () { return this.rankStrings[7]; };
    RankString.TEN = function () { return this.rankStrings[8]; };
    RankString.JACK = function () { return this.rankStrings[9]; };
    RankString.QUEEN = function () { return this.rankStrings[10]; };
    RankString.KING = function () { return this.rankStrings[11]; };
    RankString.ACE = function () { return this.rankStrings[12]; };
    RankString.rankStrings = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    return RankString;
}());
var SuitString = /** @class */ (function () {
    function SuitString() {
    }
    SuitString.getInstance = function () {
        if (this._INSTANCE === null) {
            this._INSTANCE = new SuitString();
        }
        return this._INSTANCE;
    };
    SuitString.getSuitStrings = function () { return this.suitStrings; };
    SuitString.CLUBS = function () { return this.suitStrings[0]; };
    SuitString.DIAMONDS = function () { return this.suitStrings[1]; };
    SuitString.HEARTS = function () { return this.suitStrings[2]; };
    SuitString.SPADES = function () { return this.suitStrings[3]; };
    SuitString.suitStrings = ["clubs", "diamonds", "hearts", "spades"];
    return SuitString;
}());
var SuitSymbol = /** @class */ (function () {
    function SuitSymbol() {
    }
    SuitSymbol.getInstance = function () {
        if (this._INSTANCE === null) {
            this._INSTANCE = new SuitSymbol();
        }
        return this._INSTANCE;
    };
    SuitSymbol.getSuitSymbols = function () { return this.suitSymbols; };
    SuitSymbol.CLUBS = function () { return this.suitSymbols[0]; };
    SuitSymbol.DIAMONDS = function () { return this.suitSymbols[1]; };
    SuitSymbol.HEARTS = function () { return this.suitSymbols[2]; };
    SuitSymbol.SPADES = function () { return this.suitSymbols[3]; };
    SuitSymbol.suitSymbols = ["\u2663", "\u2666", "\u2665", "\u2660"];
    return SuitSymbol;
}());
var Card = /** @class */ (function () {
    function Card(rankNumber, rankString, suitSymbol, suitString) {
        this.rankNumber = rankNumber;
        this.rankString = rankString;
        this.suitSymbol = suitSymbol;
        this.suitString = suitString;
    }
    Card.prototype.getRankNumber = function () { return this.rankNumber; };
    Card.prototype.getRankString = function () { return this.rankString; };
    Card.prototype.getSuitSymbol = function () { return this.suitSymbol; };
    Card.prototype.getSuitString = function () { return this.suitString; };
    Card.prototype.toString = function () { return this.rankString + this.suitSymbol; };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                this.deck.push(new Card(RankNumber.getRankNumbers()[j], RankString.getRankStrings()[j], SuitSymbol.getSuitSymbols()[i], SuitString.getSuitStrings()[i]));
            }
        }
    }
    Deck.prototype.getDeck = function () { return this.deck; };
    return Deck;
}());
var UI = new UserInterface();
var card = new Card(RankNumber.KING(), RankString.KING(), SuitSymbol.SPADES(), SuitString.SPADES());
var deck = new Deck();
UI.start();
UI.display(RankNumber.DEUCE());
UI.display(card.toString());
UI.display(deck.getDeck()[12]);
