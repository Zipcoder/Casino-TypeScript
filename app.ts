var webWindow = document.getElementById("display");
var userInput = <HTMLInputElement>document.getElementById("user_input");
var button = document.getElementById("submitButton");

function addToDisplayText(text: string) {
    webWindow.innerText += '\n';
    webWindow.innerText += text;
}

function waitAndGetUserInputString(): string {
    var theNumber;
    while (theNumber = null) {
        button.addEventListener("click", (e: Event) => theNumber = userInput.value);
    }
    button.removeEventListener("click", (e: Event) => userInput);
    return theNumber;
}

function waitAndGetUserInputNumber(): number {
    var theNumber;
    while (theNumber = null) {
        button.addEventListener("click", (e: Event) => theNumber = +userInput.value);
    }
    button.removeEventListener("click", (e: Event) => userInput);
    return theNumber;
}

class Profile {
    private id: number = 1;
    private _name: string = null;
    private _balance: number = 0;
    constructor() {}
    get balance(): number {
        return this.balance;
    }
    set balance(theBalance: number) {
        this.balance = theBalance;
    }
    set name(theName: string) {
        this._name = theName;
    }
}

// sigh
interface GameInterface {
    start();
}

interface GamblingInterface {
    bet();
}

// Player initialization had to be removed to here because this language is bleh
var player:Profile = null;

class SlotMachine {
    public static start() {
        addToDisplayText("Welcome to slot machine! Win triple your bet for 3 matching numbers or 1.5x for 2.");
        while(true) {
            var currentInput;
            var currentBalance = player.balance;
            var payout;
            addToDisplayText("You have $" + currentBalance + ". Enter a number less than your total to bet.");
            addToDisplayText("Enter anything else to quit.");
            button.addEventListener("click", (e: Event) => currentInput = +userInput.value);
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
                    addToDisplayText("JACKPOT!!")
                } else if (((firstReel == secondReel) && (firstReel != thirdReel)) || 
                            ((firstReel == thirdReel) && (firstReel != secondReel)) || 
                            ((secondReel == thirdReel) && (secondReel != firstReel))) {
                                payout = Math.floor(currentInput * 1.5);
                            } else {
                                payout = 0;
                            }
                addToDisplayText("Your payout: $" + payout);
                player.balance += payout;
            } else {
                addToDisplayText("Invalid input! Bye-bye!");
                break;
            }
        }
    }
}

class Startup {
    public static main(): void {
        addToDisplayText("Please enter your name:");
        player.name = waitAndGetUserInputString();
        // button.addEventListener("click", (e: Event) => player.name = userInput.value);
        addToDisplayText("Please enter how many dollary doos you want to start with:")
        player.balance = waitAndGetUserInputNumber();
        // button.addEventListener("click", (e: Event) => player.balance = +userInput.value);
    }
}

webWindow.innerText = "Welcome to the worst casino you've ever seen!";
Startup.main();
SlotMachine.start();



// Here for posterity
// button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value));
