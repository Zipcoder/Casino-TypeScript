"use strict";
exports.__esModule = true;
var UI = /** @class */ (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { UI.lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    }
    UI.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.window.innerText = '';
    };
    UI.getInstance = function () {
        return this.instance || (this.instance = new UI());
    };
    UI.getlastInput = function () {
        return this.lastInput;
    };
    UI.userInput = document.getElementById("user_input");
    UI.window = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
exports.UI = UI;
var UIInstance = UI.Instance;
var App = new App();
App.main();
