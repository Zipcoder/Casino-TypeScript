"use strict";
// import { BlackJack } from "./BlackJack";
var button = document.getElementById("submit");
var userInput = document.getElementById("user_input");
var button = document.getElementById("submit_button");
var hitButton = document.getElementById("hit_button");
var startButton = document.getElementById("start_button");
button.addEventListener("click", function (e) { return putToDisplay(userInput.value); });
// var blackJack: BlackJack = new BlackJack();
// startButton.addEventListener("click", (e:Event)=> blackJack.start());
function putToDisplay(text) {
    webElement.innerText += "\n";
    webElement.innerText += text;
}
function playGame() {
    webElement.innerText += "damn";
}
