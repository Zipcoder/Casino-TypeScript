"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.display = function (someString) {
        document.getElementById("display").innerHTML = someString;
    };
    return UI;
}());
exports.UI = UI;
