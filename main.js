"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackJack_1 = require("./BlackJack");
var button = document.getElementById("submit");
var userInput = document.getElementById("user_input");
var button = document.getElementById("submit_button");
var hitButton = document.getElementById("hit_button");
var startButton = document.getElementById("start_button");
var webElement = document.getElementById("display");
button.addEventListener("click", function (e) { return putToDisplay(userInput.value); });
var blackJack = new BlackJack_1.BlackJack();
startButton.addEventListener("click", function (e) { return blackJack.start(); });
function putToDisplay(text) {
    webElement.innerText += text;
}
function playGame() {
    webElement.innerText += "damn";
}
