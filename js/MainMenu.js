var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.displayElement = document.getElementById("display");
    }
    MainMenu.prototype.menuStart = function () {
        var test = getInput();
        var playingGame = true;
        while (playingGame) {
            this.displayElement.textContent = "Please enter your name or exit to quit";
            var userInput = getInput();
            if (userInput == "exit") {
                playingGame = false;
                break;
            }
            var userProfile = new Profile(userInput);
        }
    };
    return MainMenu;
}());
