"use strict";
var Casino;
(function (Casino) {
    var MainMenu = /** @class */ (function () {
        //constructor
        function MainMenu() {
            this.displayElement = document.getElementById("display");
            this.submitButton = document.getElementById("submit_button");
            this.menuStart = this.menuStart.bind(this);
            this.createProfile = this.createProfile.bind(this);
            this.gamePicker = this.gamePicker.bind(this);
        }
        MainMenu.prototype.menuStart = function () {
            var _this = this;
            this.displayElement.innerHTML = "Enter your name here";
            this.submitButton.addEventListener("click", function (e) { return _this.createProfile(); }, { once: true });
        };
        MainMenu.prototype.createProfile = function () {
            var _this = this;
            this.userProfile = new Casino.Profile(Casino.Input.getInput());
            this.displayElement.innerHTML += "<br>Hello " + this.userProfile.getUserName() + "!";
            this.displayElement.innerHTML += "<br>Please select a game. <br>1. Slots";
            this.submitButton.addEventListener("click", function (e) { return _this.gamePicker(); }, { once: true });
        };
        MainMenu.prototype.gamePicker = function () {
            if (Casino.Input.getInput().toLowerCase() === 'gofish') {
                var gofishGame = new gofishGame();
                gofishGame.startGame();
            }
        };
        return MainMenu;
    }());
    Casino.MainMenu = MainMenu;
})(Casino || (Casino = {}));
//# sourceMappingURL=MainMenu.js.map