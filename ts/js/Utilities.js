define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.printLine = function (input) {
            Utilities.displayEle.innerHTML += input + "<br/>";
        };
        Utilities.printMenuName = function (menuName) {
            Utilities.printLine(menuName);
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
        Utilities.getUserInput = function (thePrompt) {
            Utilities.displayEle.innerHTML += thePrompt + "<br/>";
            var input = "";
            setTimeout(function () {
                input = prompt(thePrompt);
            }, 1000);
            return input;
        };
        Utilities.getIntegerInput = function (thePrompt) {
            var userIntegerInput = 0;
            setTimeout(function () {
                var isValidInput = false;
                while (!isValidInput) {
                    var input = Utilities.getDoubleInput(thePrompt);
                    if (Math.floor(input) - input === 0) {
                        isValidInput = true;
                    }
                    else {
                        alert("Invalid selection");
                    }
                }
            }, 1000);
            return userIntegerInput;
        };
        Utilities.getDoubleInput = function (thePrompt) {
            var userDoubleInput = 0.0;
            setTimeout(function () {
                var isValidInput = false;
                while (!isValidInput) {
                    var input = Utilities.getUserInput(thePrompt);
                    if (typeof (input) === 'number') {
                        isValidInput = true;
                    }
                    else {
                        alert("Invalid selection");
                    }
                }
            }, 1000);
            return userDoubleInput;
        };
        Utilities.getMoneyInput = function (thePrompt) {
            var userIntegerInput = 0;
            setTimeout(function () {
                var isValidInput = false;
                while (!isValidInput) {
                    var input = Utilities.getDoubleInput(thePrompt);
                    if (input >= 0) {
                        if (Math.floor(input * 100) - input * 100 === 0) {
                            isValidInput = true;
                        }
                        else {
                            alert("Must enter an amount with up to two decimal places in accuracy");
                        }
                    }
                    else {
                        alert("Must enter a positive amount");
                    }
                }
            }, 1000);
            return userIntegerInput;
        };
        Utilities.getYesOrNoInput = function (thePrompt) {
            var result = false;
            setTimeout(function () {
                var isValidInput = false;
                while (!isValidInput) {
                    var input = Utilities.getUserInput(thePrompt);
                    if ("Y" === input.toUpperCase()) {
                        result = true;
                        isValidInput = true;
                    }
                    else if ("N" === input.toUpperCase()) {
                        result = false;
                        isValidInput = true;
                    }
                    else {
                        alert("Invalid selection, must enter Y or N");
                    }
                }
            }, 1000);
            return result;
        };
        Utilities.displayEle = document.getElementById("display");
        Utilities.userInputEle = document.getElementById("user_input");
        Utilities.buttonEle = document.getElementById("my_button");
        Utilities.getNameButton = document.getElementById("get_name_button");
        Utilities.betAmountButton = document.getElementById("bet_amount_button");
        Utilities.passOrDontPassButton = document.getElementById("pass_or_dont_pass_button");
        return Utilities;
    }());
    exports.Utilities = Utilities;
});
//# sourceMappingURL=Utilities.js.map