"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var button = document.getElementById("submit");
        var userInput = document.getElementById("user_input");
        var button = document.getElementById("submit_button");
        var welcomeCasino = document.getElementById("display");
        welcomeCasino.innerText += "Welcome to the Zip Code Casino! Would you like to play?";
        welcomeCasino.innerText += "\nPress Y/N to play.";
        button.addEventListener("click", function (e) { return putToDisplay(userInput.value); });
    };
    return Startup;
}());
var webElement = document.getElementById("display");
function putToDisplay(text) {
    webElement.innerText += "\n";
    webElement.innerText += text;
}
Startup.main();
