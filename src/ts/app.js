var UserInterface = /** @class */ (function () {
    function UserInterface() {
        var _this = this;
        this.userInput = document.getElementById('user_input');
        this.displayWindow = document.getElementById('display');
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
        this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
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
        this.display("Do you want to play War? (yes/no)");
        this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
    };
    UserInterface.prototype.chooseGame = function () {
        var _this = this;
        if (this.lastInput() === "yes") {
            this.clearScreen();
            this.display("Let's Go To War!");
            this.war.start();
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
var UI = new UserInterface();
UI.start();
var War = /** @class */ (function () {
    function War() {
        this.dealerHand = [];
        this.playerHand = [];
        this.dealerPlayedCards = [];
        this.playerPlayedCards = [];
        // engine():void{
        //     if()
        // }
        // checkIfGameIsOver():void{
        // }
        // handOfPersonIsEmpty(person: Player):boolean{
        //     return false;
        // }
        // announceWinner()
    }
    War.prototype.start = function () {
        this.isGameRunning = true;
        this.dealerHand = this.deck.shuffleDeck();
        this.playerHand = this.deck.splitDeck();
        this.dealerHand = this.deck.shuffleDeck();
        this.ui.display("War commensing");
    };
    return War;
}());
