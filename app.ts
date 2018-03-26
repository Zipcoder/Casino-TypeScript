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
        UI.display("Welcome to slot machine! Win triple your bet for 3 matching numbers or 1.5x for 2.");
        while(true) {
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
                    UI.display("JACKPOT!!")
                } else if (((firstReel == secondReel) && (firstReel != thirdReel)) || 
                            ((firstReel == thirdReel) && (firstReel != secondReel)) || 
                            ((secondReel == thirdReel) && (secondReel != firstReel))) {
                                payout = Math.floor(currentInput * 1.5);
                            } else {
                                payout = 0;
                            }
                UI.display("Your payout: $" + payout);
                player.balance += payout;
            } else {
                UI.display("Invalid input! Bye-bye!");
                break;
            }
        }
    }
}

class Startup {
    public static main(): void {
        UI.display("Welcome to the worst casino you've ever seen!");
        UI.display("Please enter your name:");
        player.name = UI.lastInput;
        // button.addEventListener("click", (e: Event) => player.name = userInput.value);
        UI.display("Please enter how many dollary doos you want to start with:")
        player.balance = UI.lastInput;
        // button.addEventListener("click", (e: Event) => player.balance = +userInput.value);
    }
}

class UI {
    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: UI;

    private constructor() {
        UI.button.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
        UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });
    }

    static display(input: any): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen(): void {
        this.window.innerText = '';
    }

    public static get Instance(): UI {
        return this._instance || (this._instance = new UI());
    }

    public static get lastInput(): any {
        return this._lastInput;
    }

}

const UIInstance = UI.Instance;
Startup.main();
SlotMachine.start();