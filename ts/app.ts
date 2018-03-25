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

enum SuitString {
    CLUBS = "clubs",
    DIAMONDS = "diamonds",
    HEARTS = "hearts",
    SPADES = "spades"
}

enum SuitUnicode {
    CLUBS = "\u2663",
    DIAMONDS = "\u2666",
    HEARTS = "\u2665",
    SPADES = "\u2660"
}

// enum Rank {
//     DEUCE(2,"2"),
//     THREE(3,"3"),
//     FOUR(4,"4"),
//     FIVE(5,"5"),
//     SIX(6,"6"),
//     SEVEN(7,"7"),
//     EIGHT(8,"8"),
//     NINE(9,"9"),
//     TEN(10,"10"),
//     JACK(11,"J"),
//     QUEEN(12,"Q"),
//     KING(13,"K"),
//     ACE(1,"A");
// }

let UI: UserInterface = new UserInterface();
UI.start();
UI.display(SuitString.CLUBS);
UI.display(SuitUnicode.CLUBS);
UI.display(SuitUnicode.DIAMONDS);
UI.display(SuitUnicode.HEARTS);
UI.display(SuitUnicode.SPADES);

