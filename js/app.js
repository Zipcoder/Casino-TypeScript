"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var casino = new Casino();
        casino.start();
    };
    return Startup;
}());
var Casino = /** @class */ (function () {
    function Casino() {
        this.chooser = this.chooseGame.bind(this);
    }
    Casino.prototype.start = function () {
        UI.display("What game do you want to play?");
        UI.display("Black Jack or Go Fish?");
        UI.button.addEventListener("click", this.chooser);
    };
    Casino.prototype.chooseGame = function () {
        UI.button.removeEventListener("click", this.chooser);
        if (UI.lastInput === "Black Jack") {
            BlackJack.start();
        }
        else if (UI.lastInput === "Go Fish") {
            GoFish.start();
        }
        else {
            UI.button.addEventListener("click", this.chooser);
        }
    };
    return Casino;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    }
    UI.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.window.innerText = '';
    };
    UI.getInput = function () {
        UI.button.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    };
    Object.defineProperty(UI, "Instance", {
        get: function () {
            return this._instance || (this._instance = new UI());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI, "lastInput", {
        get: function () {
            return this._lastInput;
        },
        enumerable: true,
        configurable: true
    });
    UI.userInput = document.getElementById("user_input");
    UI.window = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
var BlackJack = /** @class */ (function () {
    function BlackJack() {
    }
    BlackJack.start = function () {
        UI.clearScreen();
        UI.display("Black Jack");
    };
    return BlackJack;
}());
var GoFish = /** @class */ (function () {
    function GoFish() {
    }
    GoFish.start = function () {
        UI.clearScreen();
        UI.display("Go Fish");
    };
    return GoFish;
}());
//var lastInput : any;    
var UIInstance = UI.Instance;
Startup.main();
