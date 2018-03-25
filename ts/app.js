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
// enum Rank {
//     DEUCE(2,"2"),
//     THREE(3,"3"),
//     FOUR(4,"4"),
//     FIVE(5,"5"),
//     SIX(6,"6"),
//     SEVEN(7,"7"),
//     EIGHT(8,"8"),
//     NINE(9,"9"),
//     TEN(10,"10"),
//     JACK(11,"J"),
//     QUEEN(12,"Q"),
//     KING(13,"K"),
//     ACE(1,"A");
// }
var UI = new UserInterface();
UI.start();
UI.display(SuitString.CLUBS);
UI.display(SuitUnicode.CLUBS);
UI.display(SuitUnicode.DIAMONDS);
UI.display(SuitUnicode.HEARTS);
UI.display(SuitUnicode.SPADES);
