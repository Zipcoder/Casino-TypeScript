constructor();
{
    this.chooseGame = this.chooseGame.bind(this);
}
start();
{
    UI.display("What game do you want to play?");
    UI.display("Black Jack or Go Fish?");
    UI.button.addEventListener("click", this.chooseGame);
}
chooseGame();
void {
    UI: .button.removeEventListener("click", this.chooseGame),
    if: function (UI, lastInput) { }
} === "Black Jack";
{
    BlackJack.start();
}
if (UI.lastInput === "Go Fish") {
    GoFish.start();
}
else {
    UI.button.addEventListener("click", this.chooseGame);
}
var UserInterface = (function () {
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
var UI = (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { return console.log(UI._lastInput); });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    }
    UI.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.window.innerText = '';
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
    UI.userInput = document.getElementById('user_input');
    UI.window = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
var Choose = (function () {
    function Choose() {
        this.chooseGame = this.chooseGame.bind(this);
    }
    Choose.prototype.start = function () {
        var _this = this;
        UI.display("What game do you want to play?");
        UI.display("Black Jack or Go Fish?");
        UI.button.addEventListener("click", function (e) { return _this.chooseGame; });
    };
    Choose.prototype.chooseGame = function () {
        var _this = this;
        UI.button.removeEventListener("click", function (e) { return _this.chooseGame; });
        if (UI.lastInput === "Black Jack") {
            UI.display("Black Jack worked");
        }
        else if (UI.lastInput === "Go Fish") {
            UI.display("Go Fish worked");
        }
        else {
            UI.button.addEventListener("click", function (e) { return _this.chooseGame; });
        }
    };
    return Choose;
}());
UI;
UI.display("text from display method");
var chooseGame = new Choose();
chooseGame.chooseGame();
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
var num1 = 1;
var num2 = 2;
var sum = sumTwoNumbers(num1, num2);
console.log("My sum is: " + sum);
var test = prompt("type something: ", "");
//# sourceMappingURL=app.js.map