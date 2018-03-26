"use strict";
exports.__esModule = true;
var BlackjackPlayer_1 = require("./BlackjackPlayer");
var Casino = /** @class */ (function () {
    function Casino() {
        this.isPlaying = true;
        this.displayElement = document.getElementById("display");
        this.submitButton = document.getElementById("submitButton");
    }
    Casino.prototype.start = function () {
        var _this = this;
        var firstName = document.getElementById("first").innerHTML;
        var lastName = document.getElementById("last").innerHTML;
        var balance = parseInt(document.getElementById("balance").innerHTML);
        this.submitButton.addEventListener("click", function (e) { return _this.setupUserProfile(firstName, lastName, balance); }, { once: true });
    };
    Casino.prototype.setupUserProfile = function (firstName, lastName, balance) {
        this.player = new BlackjackPlayer_1["default"](firstName, lastName, balance);
        this.displayElement.innerHTML += "Hello " + this.player.getName();
    };
    return Casino;
}());
