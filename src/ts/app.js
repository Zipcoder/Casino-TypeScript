var game;
(function (game) {
    class UserInterface {
        constructor() {
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", (e) => { this._lastInput = this.userInput.value; });
            this.button.addEventListener("click", (e) => { this.userInput.value = ''; });
            this.chooseGame = this.chooseGame.bind(this);
            this.war = new game.War();
            this.blackJack = new game.BlackJack();
        }
        display(input) {
            this.displayWindow.innerText += input + '\n';
        }
        clearScreen() {
            this.displayWindow.innerText = '';
        }
        lastInput() {
            return this._lastInput;
        }
        start() {
            this.display("Do you want to play? (yes/no)");
            this.button.addEventListener("click", (e) => this.chooseGame());
        }
        chooseGame() {
            if (this.lastInput() === "yes") {
                this.button.removeEventListener("click", (e) => this.chooseGame());
                this.clearScreen();
                this.display("Let's Go To War!");
                this.button.addEventListener("click", (e) => this.war.start());
            }
            else if (this.lastInput() === "no") {
                this.clearScreen();
                this.display("Well fine then, be that way.  Bye.");
            }
            else {
                this.button.addEventListener("click", (e) => this.chooseGame());
            }
        }
    }
    game.UserInterface = UserInterface;
    let UI = new UserInterface();
    UI.start();
})(game || (game = {}));
//# sourceMappingURL=app.js.map