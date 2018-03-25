class UserInterface {
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public window: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e:Event) => console.log(this._lastInput));
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        // this.chooseGame = this.chooseGame.bind(this);
    }

    display(input: any): void {
        this.window.innerText += input + '\n';
    }

    clearScreen(): void {
        this.window.innerText = '';
    }

    lastInput(): any {
        return this._lastInput;
    }

    start() {
        this.display("Do you want to play Blackjack? (y/n)");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }
    
    chooseGame(): void {
        // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        if (this.lastInput() === "y") {
            this.clearScreen();
            this.display("Ok, let's play Blackjack.");
            // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        }
        else if (this.lastInput() === "n") {
            this.clearScreen();
            this.display("All right, good-bye. Live your best life.");
            // this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        }
        else {
            this.button.addEventListener("click", (e:Event) => this.chooseGame());
            // this.display("Please try again");
        }
    }

}

class MathOps {
    constructor() {
    }

    static sum(number1: number, number2: number): number {
        return (number1 + number2);
    }
}

enum Suit {
    CLUBS = "clubs",
    DIAMONDS = "diamonds",
    HEARTS = "hearts",
    SPADES = "spades"
}

let UI: UserInterface = new UserInterface();
UI.start();
