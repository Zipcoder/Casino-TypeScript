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
    UserInterface.prototype.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UserInterface.prototype.clearScreen = function () {
        this.window.innerText = '';
    };
    UserInterface.prototype.lastInput = function () {
        return this._lastInput;
    };
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
    MathOps.sum = function (number1, number2) {
        return (number1 + number2);
    };
    return MathOps;
}());
var RankNumber;
(function (RankNumber) {
    RankNumber[RankNumber["DEUCE"] = 2] = "DEUCE";
    RankNumber[RankNumber["THREE"] = 3] = "THREE";
    RankNumber[RankNumber["FOUR"] = 4] = "FOUR";
    RankNumber[RankNumber["FIVE"] = 5] = "FIVE";
    RankNumber[RankNumber["SIX"] = 6] = "SIX";
    RankNumber[RankNumber["SEVEN"] = 7] = "SEVEN";
    RankNumber[RankNumber["EIGHT"] = 8] = "EIGHT";
    RankNumber[RankNumber["NINE"] = 9] = "NINE";
    RankNumber[RankNumber["TEN"] = 10] = "TEN";
    RankNumber[RankNumber["JACK"] = 11] = "JACK";
    RankNumber[RankNumber["QUEEN"] = 12] = "QUEEN";
    RankNumber[RankNumber["KING"] = 13] = "KING";
    RankNumber[RankNumber["ACE"] = 1] = "ACE";
})(RankNumber || (RankNumber = {}));
var RankString;
(function (RankString) {
    RankString["DEUCE"] = "2";
    RankString["THREE"] = "3";
    RankString["FOUR"] = "4";
    RankString["FIVE"] = "5";
    RankString["SIX"] = "6";
    RankString["SEVEN"] = "7";
    RankString["EIGHT"] = "8";
    RankString["NINE"] = "9";
    RankString["TEN"] = "10";
    RankString["JACK"] = "J";
    RankString["QUEEN"] = "Q";
    RankString["KING"] = "K";
    RankString["ACE"] = "A";
})(RankString || (RankString = {}));
var SuitString;
(function (SuitString) {
    SuitString["CLUBS"] = "clubs";
    SuitString["DIAMONDS"] = "diamonds";
    SuitString["HEARTS"] = "hearts";
    SuitString["SPADES"] = "spades";
})(SuitString || (SuitString = {}));
var SuitSymbol;
(function (SuitSymbol) {
    SuitSymbol["CLUBS"] = "\u2663";
    SuitSymbol["DIAMONDS"] = "\u2666";
    SuitSymbol["HEARTS"] = "\u2665";
    SuitSymbol["SPADES"] = "\u2660";
})(SuitSymbol || (SuitSymbol = {}));
var Card = /** @class */ (function () {
    function Card(suitSymbol, rankNumber, rankString) {
        this.suitSymbol = suitSymbol;
        this.rankNumber = rankNumber;
        this.rankString = rankString;
    }
    Card.prototype.getSuitSymbol = function () {
        return this.suitSymbol;
    };
    Card.prototype.getRankNumber = function () {
        return this.rankNumber;
    };
    Card.prototype.getRankString = function () {
        return this.rankString;
    };
    Card.prototype.toString = function () {
        return this.suitSymbol + this.rankString;
    };
    return Card;
}());
var UI = new UserInterface();
var card = new Card(SuitSymbol.HEARTS, RankNumber.KING, RankString.KING);
UI.start();
