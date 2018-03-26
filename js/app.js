"use strict";
// python -m SimpleHTTPServer 8000
// import {Deck} from "./cardgames/utilities/deck"
Object.defineProperty(exports, "__esModule", { value: true });
function legend() {
    var first = "Larry";
    var last = "Legend";
    var full = first + " " + last;
    document.getElementById("display").innerHTML = full;
}
legend();
var ui_1 = require("./ui");
var App = /** @class */ (function () {
    function App(theHouse) {
        this._theHouse = theHouse;
        this._ui = new ui_1.UI();
    }
    Object.defineProperty(App.prototype, "theHouse", {
        get: function () {
            return this._theHouse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "theUI", {
        get: function () {
            return this._ui;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
// let theHouse = new House();
// let myCasino = new App(theHouse);
// myCasino.theUI.display("Welcome to the Casino!");
var first = "Larry";
var last = "Legend";
var full = first + " " + last;
document.getElementById("display").innerHTML = full;
// document.getElementById("display")!.innerHTML = "Hello";
// document.getElementById("display")!.innerHTML = testPrint;
// function startCasino() {
//     // document.getElementById("display")!.innerHTML = "Hello";
//     // let displayElement: HTMLElement | null = document.getElementById('display');
//     // displayElement!.innerText = 'Welcome to the Casino';
// }
// document.getElementById('startCasino')!.addEventListener('click', startCasino);
