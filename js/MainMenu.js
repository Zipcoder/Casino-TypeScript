var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.newCrapsGame = new Craps(this.mainPlayer);
        this.chooseGame = this.chooseGame.bind(this);
    }
    MainMenu.prototype.start = function () {
        UI.display("What game do you want to play?");
        UI.display("Craps or Craps?");
        UI.submitButton.addEventListener("click", this.chooseGame);
    };
    MainMenu.prototype.chooseGame = function () {
        UI.submitButton.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Craps") {
            this.newCrapsGame.startGame();
        }
        else {
            UI.display("Too bad you're playing Craps!");
            this.newCrapsGame.startGame();
        }
    };
    return MainMenu;
}());
//# sourceMappingURL=MainMenu.js.map