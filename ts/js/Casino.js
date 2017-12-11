define(["require", "exports", "./BlackJackConsole", "./CrapsConsole", "./GoFishConsole", "./SlotsConsole", "./Utilities"], function (require, exports, BlackJackConsole_1, CrapsConsole_1, GoFishConsole_1, SlotsConsole_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Casino = (function () {
        // displayEle: any;
        // userInputEle: any;
        //static buttonEle = document.getElementById("my_button");
        function Casino() {
            this.gameConsoles = [];
            // this.displayEle = document.getElementById("display");
            // this.userInputEle = document.getElementById("user_input");
        }
        Casino.prototype.startCasino = function () {
            this.gameConsoles.push(new BlackJackConsole_1.BlackJackConsole());
            this.gameConsoles.push(new CrapsConsole_1.CrapsConsole());
            this.gameConsoles.push(new GoFishConsole_1.GoFishConsole());
            this.gameConsoles.push(new SlotsConsole_1.SlotsConsole());
            // while(true) {
            this.selectGameToPlay();
            // }
        };
        Casino.prototype.selectGameToPlay = function () {
            var gameNames = [];
            for (var consoleKey in this.gameConsoles) {
                gameNames.push(this.gameConsoles[consoleKey].getNameOfGame());
            }
            Utilities_1.Utilities.printMenuName("Select a game to play");
            Utilities_1.Utilities.printMenuOptions(gameNames);
            // var choice = Utilities.getMenuInput(">> ", gameNames).toUpperCase();
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getChoice() {
                var choice = Utilities_1.Utilities.userInputEle.value.toUpperCase();
                Utilities_1.Utilities.userInputEle.value = "";
                _this.goToGame(choice);
                this.removeEventListener("click", getChoice);
            });
        };
        Casino.prototype.goToGame = function (gameName) {
            switch (gameName) {
                case "BLACKJACK":
                    this.startBlackJack();
                    break;
                case "CRAPS":
                    this.startCraps();
                    break;
                case "GO FISH":
                    this.startGoFish();
                    break;
                case "SLOTS":
                    this.startSlots();
                    break;
            }
        };
        Casino.prototype.startBlackJack = function () {
            this.gameConsoles[0].start();
        };
        Casino.prototype.startCraps = function () {
            this.gameConsoles[1].start();
        };
        Casino.prototype.startGoFish = function () {
            this.gameConsoles[2].start();
        };
        Casino.prototype.startSlots = function () {
            this.gameConsoles[3].start();
        };
        return Casino;
    }());
    exports.Casino = Casino;
});
//# sourceMappingURL=Casino.js.map