var webWindow = document.getElementById("display");
var userInput = document.getElementById("user_input");
var button = document.getElementById("submitButton");
function addToDisplayText(text) {
    webWindow.innerText += '\n';
    webWindow.innerText += text;
}
var Profile = /** @class */ (function () {
    function Profile() {
        this.id = 1;
        this._name = null;
        this._balance = 0;
    }
    Object.defineProperty(Profile.prototype, "balance", {
        get: function () {
            return this.balance;
        },
        set: function (theBalance) {
            this.balance = theBalance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "name", {
        set: function (theName) {
            this._name = theName;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
// Player initialization had to be removed to here because this language is bleh
var player = null;
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
    }
    SlotMachine.start = function () {
        addToDisplayText("Welcome to slot machine! Win triple your bet for 3 matching numbers or 1.5x for 2.");
        while (true) {
            var currentInput;
            var currentBalance = player.balance;
            var payout;
            addToDisplayText("You have $" + currentBalance + ". Enter a number less than your total to bet.");
            addToDisplayText("Enter anything else to quit.");
            button.addEventListener("click", function (e) { return currentInput = +userInput.value; });
            player.balance = currentBalance - currentInput;
            addToDisplayText("You entered " + currentInput + ".");
            if ((!isNaN(currentInput)) && (currentInput <= currentBalance)) {
                addToDisplayText("Valid input! Spinning reels...");
                var firstReel = Math.floor(Math.random() * 5) + 1;
                var secondReel = Math.floor(Math.random() * 5) + 1;
                var thirdReel = Math.floor(Math.random() * 5) + 1;
                addToDisplayText("|| " + firstReel + " | " + secondReel + " | " + thirdReel + " ||");
                if (firstReel == secondReel && thirdReel) {
                    payout = currentInput * 3;
                    addToDisplayText("JACKPOT!!");
                }
                else if (((firstReel == secondReel) && (firstReel != thirdReel)) ||
                    ((firstReel == thirdReel) && (firstReel != secondReel)) ||
                    ((secondReel == thirdReel) && (secondReel != firstReel))) {
                    payout = Math.floor(currentInput * 1.5);
                }
                else {
                    payout = 0;
                }
                addToDisplayText("Your payout: $" + payout);
                player.balance += payout;
            }
            else {
                addToDisplayText("Invalid input! Bye-bye!");
                break;
            }
        }
    };
    return SlotMachine;
}());
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        addToDisplayText("Please enter your name:");
        button.addEventListener("click", function (e) { return player.name = userInput.value; });
        addToDisplayText("Please enter how many dollary doos you want to start with:");
        button.addEventListener("click", function (e) { return player.balance = +userInput.value; });
        addToDisplayText("My girlfriend cut her hand and we spent all weekend in the hospital so there is only a slot machine lol");
    };
    return Startup;
}());
webWindow.innerText = "Welcome to the worst casino you've ever seen!";
Startup.main();
SlotMachine.start();
// Here for posterity
// button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value));
//# sourceMappingURL=app.js.map