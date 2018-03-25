var Craps = /** @class */ (function () {
    function Craps(player) {
        this.betAmount = 0;
        this.betUserPlaces = 0;
        this.crapsPlayer = player;
    }
    Craps.prototype.userPlacesBet = function () {
        document.write("Hello!, please enter in Pass Line or Don't pass line for you bet below");
        // event handler here for the bet type
        // set user bet places to the input
        UI.clearScreen();
    };
    Craps.prototype.userBetAmount = function () {
        document.write("Please enter your bet amount down below");
        if (this.betAmount > this.crapsPlayer.getBalance()) {
            UI.display("You can't bet that much!");
        }
        else {
        }
        //event handler here for bet amount
        UI.clearScreen();
    };
    Craps.prototype.startGame = function () {
    };
    return Craps;
}());
//# sourceMappingURL=CrapsGame.js.map