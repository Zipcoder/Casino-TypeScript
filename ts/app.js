var UserInterface = /** @class */ (function () {
    // private static _instance: UI;
    function UserInterface() {
        var _this = this;
        this.userInput = document.getElementById('user_input');
        this.window = document.getElementById('display');
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
        this.button.addEventListener("click", function (e) { return console.log(_this._lastInput); });
        this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
        this.chooseGame = this.chooseGame.bind(this);
    }
    UserInterface.prototype.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UserInterface.prototype.clearScreen = function () {
        this.window.innerText = '';
    };
    // public static get Instance(): UI {
    //     return this._instance || (this._instance = new UI());
    // }
    UserInterface.prototype.lastInput = function () {
        return this._lastInput;
    };
    UserInterface.prototype.start = function () {
        var _this = this;
        this.display("What game do you want to play?");
        this.display("Black Jack or Go Fish?");
        this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
    };
    UserInterface.prototype.chooseGame = function () {
        var _this = this;
        this.button.removeEventListener("click", function (e) { return _this.chooseGame(); });
        if (this.lastInput() === "Black Jack") {
            this.display("Black Jack worked");
        }
        else if (this.lastInput() === "Go Fish") {
            this.display("Go Fish worked");
        }
        else {
            this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
        }
    };
    return UserInterface;
}());
var UI = new UserInterface();
UI.start();
