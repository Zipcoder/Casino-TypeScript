"use strict";
var Casino;
(function (Casino) {
    window.addEventListener("DOMContentLoaded", function (e) { return loadMainMenu(); });
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.getInputEntered = function () {
            var element = document.getElementById("user_input");
            this.userinput = element.value;
            element.value = "";
        };
        Input.getInput = function () {
            return this.userinput;
        };
        return Input;
    }());
    Casino.Input = Input;
    document.getElementById("submit_button").addEventListener("click", function (e) { return Input.getInputEntered; });
    function loadMainMenu() {
        var menu = new loadMainMenu();
        menu.menuStart();
    }
})(Casino || (Casino = {}));
//# sourceMappingURL=casinoGameApp.js.map