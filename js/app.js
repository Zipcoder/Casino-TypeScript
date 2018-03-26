// var window = document.getElementById("display");
// var userInput = <HTMLInputElement>document.getElementById("user_input");
// var button = document.getElementById("submitButton");
// var TEST_INPUT;
// function addToDisplayText(text: string) {
//     window.innerText += '\n';
//     window.innerText += text;
// }
// function waitAndGetUserInputString(): string {
//     var theNumber;
//     button.addEventListener("onclick", (e: Event) => theNumber = userInput.value);
//     while (theNumber == null) {
//         if (theNumber != null) {
//             break;
//         }
//     }
//     button.removeEventListener("onclick", waitAndGetUserInputString);
//     return theNumber;
// }
// function waitAndGetUserInputNumber(): number {
//     var theNumber;
//     button.addEventListener("click", (e: Event) => theNumber = +userInput.value);
//     while (theNumber == null) {
//         if (theNumber != null) {
//             break;
//         }
//     }
//     button.removeEventListener("click", waitAndGetUserInputNumber);
//     return theNumber;
// }
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
        UI.display("Welcome to slot machine! Win triple your bet for 3 matching numbers or 1.5x for 2.");
        while (true) {
            var currentInput;
            var currentBalance = player.balance;
            var payout;
            UI.display("You have $" + currentBalance + ". Enter a number less than your total to bet.");
            UI.display("Enter anything else to quit.");
            currentInput = UI.lastInput;
            player.balance = currentBalance - currentInput;
            UI.display("You entered " + currentInput + ".");
            if ((!isNaN(currentInput)) && (currentInput <= currentBalance)) {
                UI.display("Valid input! Spinning reels...");
                var firstReel = Math.floor(Math.random() * 5) + 1;
                var secondReel = Math.floor(Math.random() * 5) + 1;
                var thirdReel = Math.floor(Math.random() * 5) + 1;
                UI.display("|| " + firstReel + " | " + secondReel + " | " + thirdReel + " ||");
                if (firstReel == secondReel && thirdReel) {
                    payout = currentInput * 3;
                    UI.display("JACKPOT!!");
                }
                else if (((firstReel == secondReel) && (firstReel != thirdReel)) ||
                    ((firstReel == thirdReel) && (firstReel != secondReel)) ||
                    ((secondReel == thirdReel) && (secondReel != firstReel))) {
                    payout = Math.floor(currentInput * 1.5);
                }
                else {
                    payout = 0;
                }
                UI.display("Your payout: $" + payout);
                player.balance += payout;
            }
            else {
                UI.display("Invalid input! Bye-bye!");
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
        UI.display("Welcome to the worst casino you've ever seen!");
        UI.display("Please enter your name:");
        player.name = UI.lastInput;
        // button.addEventListener("click", (e: Event) => player.name = userInput.value);
        UI.display("Please enter how many dollary doos you want to start with:");
        player.balance = UI.lastInput;
        // button.addEventListener("click", (e: Event) => player.balance = +userInput.value);
    };
    return Startup;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    }
    UI.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.window.innerText = '';
    };
    Object.defineProperty(UI, "Instance", {
        get: function () {
            return this._instance || (this._instance = new UI());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI, "lastInput", {
        get: function () {
            return this._lastInput;
        },
        enumerable: true,
        configurable: true
    });
    UI.userInput = document.getElementById("user_input");
    UI.window = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
var UIInstance = UI.Instance;
Startup.main();
SlotMachine.start();
//# sourceMappingURL=app.js.map