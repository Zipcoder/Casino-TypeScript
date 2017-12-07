define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.printMenuName = function (menuName) {
            Utilities.displayEle.innerHTML += menuName;
        };
        Utilities.printMenuOptions = function (menuOptions) {
        };
        Utilities.getMenuInput = function (prompt, menuOptions) {
            return "";
        };
        Utilities.displayEle = document.getElementById("display");
        Utilities.userInputEle = document.getElementById("user_input");
        Utilities.buttonEle = document.getElementById("my_button");
        return Utilities;
    }());
    exports.Utilities = Utilities;
});
//# sourceMappingURL=Utilities.js.map