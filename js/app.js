var Player = /** @class */ (function () {
    //private playerHand : new Array<>();
    function Player(name, balance, age) {
        this._name = name;
        this._balance = balance;
        this._age = age;
    }
    Object.defineProperty(Player.prototype, "name", {
        // getName(): string {
        //     return this.name;
        // }
        //
        // setName(newName: string): void {
        //     this.name = newName;
        // }
        //
        // getBalance(): number {
        //     return this.balance;
        // }
        //
        // setBalance(newBalance: number): void {
        //     this.balance = newBalance;
        // }
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.addToBalance = function (amount) {
        this._balance += amount;
    };
    return Player;
}());
///<reference path="Player.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
        Casino.displayHTMLElement = document.getElementById("display");
        Casino.userInputHTMLElement = document.getElementById("user_input");
        Casino.greetingElement = document.getElementById("greeting");
        Casino.submitButtonHTMLElement = document.getElementById("submit");
    }
    Casino.prototype.startCasino = function () {
        this.printWelcomeMessage();
        this.appendToDisplay("What is your name?", true);
    };
    Casino.lineBreak = function () {
        return "<br />";
    };
    Casino.prototype.appendToDisplay = function (message, lineBreak) {
        if (lineBreak) {
            Casino.displayHTMLElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            Casino.displayHTMLElement.innerHTML += message;
        }
    };
    Casino.prototype.printWelcomeMessage = function () {
        this.appendToDisplay("Welcome to the Casino!", false);
    };
    Casino.prototype.onSubmitButtonClick = function () {
        console.log("Hello from getUserName()");
        var value = Casino.userInputHTMLElement.value;
        if (value.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
            return null;
        }
        else {
            Casino.lastUserInput = value;
            this.appendToDisplay(Casino.lastUserInput, true);
            Casino.casinoPlayer.name = value;
        }
    };
    Casino.casinoPlayer = new Player();
    return Casino;
}());
///<reference path="Casino.ts"/>
var casino = new Casino();
casino.startCasino();
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.player = player;
    }
    return Craps;
}());
//# sourceMappingURL=app.js.map