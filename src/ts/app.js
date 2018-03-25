var App = /** @class */ (function () {
    function App() {
        this.chooseGame = this.chooseGame.bind(this);
    }
    App.prototype.start = function () {
        UI.display("Do you want to play BlackJack?");
        UI.button.addEventListener("click", this.chooseGame);
    };
    App.prototype.chooseGame = function () {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.Input == "BlackJack") {
            //            BlackJack.start();
        }
        else {
            UI.button.addEventListener("click", this.chooseGame);
        }
    };
    return App;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { return UI.input.value = ""; });
        UI.button.addEventListener("click", function (e) { return UI._lastInput = UI.input.value; });
    }
    UI.display = function (input) {
        this.displayWindow.innerText = "";
    };
    UI.clear = function () {
        this.displayWindow.innerText = "";
    };
    Object.defineProperty(UI, "Instance", {
        get: function () {
            return this._instance || (this._instance = new UI());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI, "Input", {
        get: function () {
            return this._lastInput;
        },
        enumerable: true,
        configurable: true
    });
    UI.input = document.getElementById("user_input");
    UI.displayWindow = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
var x = UI.Instance;
UI.display;
