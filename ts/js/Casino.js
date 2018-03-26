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
//# sourceMappingURL=Casino.js.map