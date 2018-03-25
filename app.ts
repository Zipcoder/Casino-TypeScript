var webWindow = document.getElementById("display");
var userInput = <HTMLInputElement>document.getElementById("user_input");
var button = document.getElementById("submitButton");

function addToDisplayText(text: string) {
    webWindow.innerText += '\n';
    webWindow.innerText += text;
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

interface GameInterface {
    start();
}

interface GamblingInterface {
    bet();
}

// Player initialization had to be removed to here because this language is bleh
var player:Profile = null;

class SlotMachine implements GameInterface{
    start() {
        addToDisplayText("Welcome to slot machine! Win triple your bet for 3 matching numbers or 1.5x for 2.");
        while(true) {
            var currentInput;
            var currentBalance = player.balance;
            addToDisplayText("You have $" + currentBalance + ". Enter a number less than your total to bet.");
            addToDisplayText("Enter anything else to quit.");
            button.addEventListener("click", (e: Event) => currentInput = userInput.value);
            addToDisplayText("You entered " + currentInput + ".");
            if ((!isNaN(currentInput)) && (currentInput <= currentBalance)) {
                addToDisplayText("Valid input! Spinning reels...");
                var firstReel = Math.floor(Math.random() * 5) + 1;
                var secondReel = Math.floor(Math.random() * 5) + 1;
                var thirdReel = Math.floor(Math.random() * 5) + 1;

            // More logic please
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
        button.addEventListener("click", (e: Event) => player.name = userInput.value);
        addToDisplayText("Please enter how many dollary doos you want to start with:")
        button.addEventListener("click", (e: Event) => player.balance = +userInput.value);
        addToDisplayText("My girlfriend cut her hand and we spent all weekend in the hospital so there is only a slot machine lol");
        
    }
}

webWindow.innerText = "Welcome to the worst casino you've ever seen!";
Startup.main();



// Here for posterity
// button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value));
