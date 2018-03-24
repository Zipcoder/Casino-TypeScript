class Startup {
    public static main(): void {
        var webElement = document.getElementById("display");
        var userInput = <HTMLInputElement>document.getElementById("user_input");
        var button = document.getElementById("submitButton");

        webElement.innerText += "Welcome to the worst casino you've ever seen!";
        button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value));

        function addToDisplayText(text: string) {
            webElement.innerText += '\n';
            webElement.innerText += text;
        }
    }
}

Startup.main();

class Profile {
    id: number = 1;
    name: string;
    balance: number;
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
    end();
}

interface GamblingInterface {
    bet();
}

class SlotMachine {
    
}