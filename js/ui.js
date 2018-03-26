"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UI {
    constructor() {
    }
    display(someString) {
        document.getElementById("display").innerHTML = someString;
    }
}
exports.UI = UI;
