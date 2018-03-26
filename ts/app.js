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
var RankNumber = /** @class */ (function () {
    function RankNumber() {
    }
    RankNumber.getInstance = function () {
        if (this._INSTANCE === null) {
            this._INSTANCE = new RankNumber();
        }
        return this._INSTANCE;
    };
    RankNumber.getRankNumbers = function () {
        return this.rankNumbers;
    };
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
    RankString.getRankStrings = function () {
        return this.rankStrings;
    };
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
    SuitString.getRankStrings = function () {
        return this.suitStrings;
    };
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
    SuitSymbol.getSuitSymbols = function () {
        return this.suitSymbols;
    };
    SuitSymbol.suitSymbols = ["\u2663", "\u2666", "\u2665", "\u2660"];
    return SuitSymbol;
}());
// class Card {
//     private rankNumber: RankNumber;
//     private rankString: RankString;
//     private suitSymbol: SuitSymbol;
//     constructor(rankNumber: RankNumber, rankString: RankString, suitSymbol: SuitSymbol) {
//         this.rankNumber = rankNumber;
//         this.rankString = rankString;
//         this.suitSymbol = suitSymbol;
//     }
//     getRankNumber(): number {
//         return this.rankNumber;
//     }
//     getRankString(): string {
//         return this.rankString;
//     }
//     getSuitSymbol(): string {
//         return this.suitSymbol;
//     }
//     toString(): string {
//         return this.rankString + this.suitSymbol;
//     }
// }
// class Deck {
//     private deck: Card[];
//     private rankNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
//     private rankStrings = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//     private suitSymbols = ["\u2663", "\u2666", "\u2665", "\u2660"];
//     constructor() {
//         this.deck = [];
//         for (let i = 0; i < 4; i++) {
//             for (let j = 0; j < 13; j++) {
//                 this.deck.push(new Card(this.rankNumbers[j], this.rankStrings[j], this.suitSymbols[i]);
//             }
//         }
//     }
//     getDeck(): Card[] {
//         return this.deck;
//     }
// }
var UI = new UserInterface();
// let card: Card = new Card(RankNumber.ACE, RankString.ACE, SuitSymbol.HEARTS);
// let deck: Deck = new Deck();
UI.start();
var myNum = RankNumber.getRankNumbers()[12];
UI.display(RankNumber.getRankNumbers()[0]);
UI.display(myNum);
// UI.display(card.toString());
