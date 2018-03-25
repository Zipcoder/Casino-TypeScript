var UserInterface = (function () {
    function UserInterface() {
        var _this = this;
        this.userInput = document.getElementById('user_input');
        this.window = document.getElementById('display');
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
        this.button.addEventListener("click", function (e) { return console.log(_this._lastInput); });
        this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
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
        if (this.lastInput() === "y") {
            this.clearScreen();
            this.display("Ok, let's play Blackjack.");
        }
        else if (this.lastInput() === "n") {
            this.clearScreen();
            this.display("All right, good-bye. Live your best life.");
        }
        else {
            this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
        }
    };
    return UserInterface;
}());
var MathOps = (function () {
    function MathOps() {
    }
    MathOps.sum = function (number1, number2) {
        return (number1 + number2);
    };
    return MathOps;
}());
var SuitString;
(function (SuitString) {
    SuitString["CLUBS"] = "clubs";
    SuitString["DIAMONDS"] = "diamonds";
    SuitString["HEARTS"] = "hearts";
    SuitString["SPADES"] = "spades";
})(SuitString || (SuitString = {}));
var SuitUnicode;
(function (SuitUnicode) {
    SuitUnicode["CLUBS"] = "\u2663";
    SuitUnicode["DIAMONDS"] = "\u2666";
    SuitUnicode["HEARTS"] = "\u2665";
    SuitUnicode["SPADES"] = "\u2660";
})(SuitUnicode || (SuitUnicode = {}));
var RankInteger;
(function (RankInteger) {
    RankInteger[RankInteger["DEUCE"] = 2] = "DEUCE";
    RankInteger[RankInteger["THREE"] = 3] = "THREE";
    RankInteger[RankInteger["FOUR"] = 4] = "FOUR";
    RankInteger[RankInteger["FIVE"] = 5] = "FIVE";
    RankInteger[RankInteger["SIX"] = 6] = "SIX";
    RankInteger[RankInteger["SEVEN"] = 7] = "SEVEN";
    RankInteger[RankInteger["EIGHT"] = 8] = "EIGHT";
    RankInteger[RankInteger["NINE"] = 9] = "NINE";
    RankInteger[RankInteger["TEN"] = 10] = "TEN";
    RankInteger[RankInteger["JACK"] = 11] = "JACK";
    RankInteger[RankInteger["QUEEN"] = 12] = "QUEEN";
    RankInteger[RankInteger["KING"] = 13] = "KING";
    RankInteger[RankInteger["ACE"] = 1] = "ACE";
})(RankInteger || (RankInteger = {}));
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
var UI = new UserInterface();
UI.start();
UI.display(SuitString.CLUBS);
UI.display(SuitUnicode.CLUBS);
UI.display(SuitUnicode.DIAMONDS);
UI.display(SuitUnicode.HEARTS);
UI.display(SuitUnicode.SPADES);
//# sourceMappingURL=app.js.map