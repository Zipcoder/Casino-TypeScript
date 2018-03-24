var webWindow = document.getElementById("display");
var userInput = <HTMLInputElement>document.getElementById("user_input");
var button = document.getElementById("submitButton");

webWindow.innerText += "Welcome to the worst casino you've ever seen!";

function addToDisplayText(text: string) {
    webWindow.innerText += '\n';
    webWindow.innerText += text;
}

class Startup {
    public static main(): void {
        // var webWindow = document.getElementById("display");
        // var userInput = <HTMLInputElement>document.getElementById("user_input");
        // var button = document.getElementById("submitButton");

        button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value));
    }
}

class Profile {
    private id: number = 1;
    private name: string;
    private balance: number;
    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }
    public getBalance(){
        return this.balance;
    }
}

interface GameInterface {
    start();
}

interface GamblingInterface {
    bet();
}

class SlotMachine implements GameInterface{
    start() {
        var firstReel = Math.floor(Math.random() * 5) + 1;
        var secondReel = Math.floor(Math.random() * 5) + 1;
        var thirdReel = Math.floor(Math.random() * 5) + 1;
        // Implement gambling interface and add betting too
    }
}

Startup.main();