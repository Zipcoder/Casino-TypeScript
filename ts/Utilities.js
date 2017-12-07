define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.printMenuName = function (menuName) {
            Utilities.displayEle.innerHTML += menuName + "<br/>";
        };
        Utilities.printMenuOptions = function (menuOptions) {
            Utilities.displayEle.innerHTML += "[ " + menuOptions.join(" ] * [ ") + " ]" + "<br/>";
        };
        Utilities.getMenuInput = function (thePrompt, menuOptions) {
            Utilities.displayEle.innerHTML += thePrompt + "<br/>";
            var input = "";
            setTimeout(function () {
                var isValidInput = false;
                while (!isValidInput) {
                    input = prompt(thePrompt);
                    for (var optionKey in menuOptions) {
                        if (menuOptions[optionKey].toLowerCase() === input.toLowerCase()) {
                            isValidInput = true;
                            break;
                        }
                    }
                    if (!isValidInput) {
                        alert("Invalid selection");
                    }
                }
            }, 1000);
            return input;
        };
        Utilities.displayEle = document.getElementById("display");
        Utilities.userInputEle = document.getElementById("user_input");
        Utilities.buttonEle = document.getElementById("my_button");
        return Utilities;
    }());
    exports.Utilities = Utilities;
});
//# sourceMappingURL=Utilities.js.map