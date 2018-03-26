"use strict";
// python -m SimpleHTTPServer 8000
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("./ui");
class App {
    constructor(theHouse) {
        this._theHouse = theHouse;
        this._ui = new ui_1.UI();
    }
    get theHouse() {
        return this._theHouse;
    }
    get theUI() {
        return this._ui;
    }
}
// let theHouse = new House();
// let myCasino = new App(theHouse);
// myCasino.theUI.display("Welcome to the Casino!");
let first = "Larry";
let last = "Legend";
let full = first + " " + last;
document.getElementById("display").innerHTML = full;
// document.getElementById("display")!.innerHTML = "Hello";
// document.getElementById("display")!.innerHTML = testPrint;
// function startCasino() {
//     // document.getElementById("display")!.innerHTML = "Hello";
//     // let displayElement: HTMLElement | null = document.getElementById('display');
//     // displayElement!.innerText = 'Welcome to the Casino';
// }
// document.getElementById('startCasino')!.addEventListener('click', startCasino);
// constructor(){
//     this.chooseGame = this.chooseGame.bind(this);
// }
// start() {
//     UI.display("What game do you want to play?");
//     UI.display("Black Jack or Go Fish?");
//     UI.button.addEventListener("click", this.chooseGame);
// }
//  chooseGame(): void {
//     UI.button.removeEventListener("click", this.chooseGame);
//     if (UI.lastInput === "Black Jack") {
//         BlackJack.start();
//     }
//     else if (UI.lastInput === "Go Fish") {
//         GoFish.start();
//     }
//     else {
//         UI.button.addEventListener("click", this.chooseGame);
//     }
// }
