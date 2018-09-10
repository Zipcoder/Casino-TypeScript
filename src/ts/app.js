var game;
(function (game) {
    var UserInterface = /** @class */ (function () {
        function UserInterface() {
            var _this = this;
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
            this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
            this.chooseGame = this.chooseGame.bind(this);
            this.war = new War();
            this.blackJack = new BlackJack();
        }
        UserInterface.prototype.display = function (input) {
            this.displayWindow.innerText += input + '\n';
        };
        UserInterface.prototype.clearScreen = function () {
            this.displayWindow.innerText = '';
        };
        UserInterface.prototype.lastInput = function () {
            return this._lastInput;
        };
        UserInterface.prototype.start = function () {
            var _this = this;
            this.display("Do you want to play? (yes/no)");
            this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
        };
        UserInterface.prototype.chooseGame = function () {
            var _this = this;
            if (this.lastInput() === "yes") {
                this.button.removeEventListener("click", function (e) { return _this.chooseGame(); });
                this.clearScreen();
                this.display("Let's Go To War!");
                this.button.addEventListener("click", function (e) { return _this.war.start(); });
            }
            else if (this.lastInput() === "no") {
                this.clearScreen();
                this.display("Well fine then, be that way.  Bye.");
            }
            else {
                this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
            }
        };
        return UserInterface;
    }());
    game.UserInterface = UserInterface;
    var UI = new UserInterface();
    UI.start();
})(game || (game = {}));
