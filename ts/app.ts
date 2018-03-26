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

    public static sum(number1: number, number2: number): number {
        return (number1 + number2);
    }
}

class RankNumber {
    private static _INSTANCE: RankNumber;
    private static rankNumbers: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

    private constructor() {
    }

    public static getInstance(): RankNumber {
        if (this._INSTANCE === null) {
            this._INSTANCE = new RankNumber();
        }
        return this._INSTANCE;
    } 

    public static getRankNumbers(): number[] {
        return this.rankNumbers;
    }
}

class RankString {
    private static _INSTANCE: RankString;
    private static rankStrings: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    private constructor() {
    }

    public static getInstance(): RankString {
        if (this._INSTANCE === null) {
            this._INSTANCE = new RankString();
        }
        return this._INSTANCE;
    }

    public static getRankStrings(): string[] {
        return this.rankStrings;
    }
}

class SuitString {
    private static _INSTANCE: SuitString;
    private static suitStrings: string[] = ["clubs", "diamonds", "hearts", "spades"];

    private constructor() {
    }

    public static getInstance() {
        if (this._INSTANCE === null) {
            this._INSTANCE = new SuitString();
        }
        return this._INSTANCE;
    }

    public static getRankStrings(): string[] {
        return this.suitStrings;
    }
}

class SuitSymbol {
    private static _INSTANCE: SuitSymbol;
    private static suitSymbols: string[] = ["\u2663", "\u2666", "\u2665", "\u2660"];

    private constructor() {
    }

    public static getInstance() {
        if (this._INSTANCE === null) {
            this._INSTANCE = new SuitSymbol();
        }
        return this._INSTANCE;
    }

    public static getSuitSymbols(): string[] {
        return this.suitSymbols;
    }
}

// class Card {
//     private rankNumber: RankNumber;
//     private rankString: RankString;
//     private suitSymbol: SuitSymbol;

//     constructor(rankNumber: RankNumber, rankString: RankString, suitSymbol: SuitSymbol) {
//         this.rankNumber = rankNumber;
//         this.rankString = rankString;
//         this.suitSymbol = suitSymbol;
//     }

//     getRankNumber(): number {
//         return this.rankNumber;
//     }

//     getRankString(): string {
//         return this.rankString;
//     }

//     getSuitSymbol(): string {
//         return this.suitSymbol;
//     }

//     toString(): string {
//         return this.rankString + this.suitSymbol;
//     }
// }

// class Deck {
//     private deck: Card[];
//     private rankNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];
//     private rankStrings = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//     private suitSymbols = ["\u2663", "\u2666", "\u2665", "\u2660"];

//     constructor() {
//         this.deck = [];
//         for (let i = 0; i < 4; i++) {
//             for (let j = 0; j < 13; j++) {
//                 this.deck.push(new Card(this.rankNumbers[j], this.rankStrings[j], this.suitSymbols[i]);
//             }
//         }
//     }

//     getDeck(): Card[] {
//         return this.deck;
//     }
// }

let UI: UserInterface = new UserInterface();
// let card: Card = new Card(RankNumber.ACE, RankString.ACE, SuitSymbol.HEARTS);
// let deck: Deck = new Deck();

UI.start();
let myNum: number = RankNumber.getRankNumbers()[12];
UI.display(RankNumber.getRankNumbers()[0]);
UI.display(myNum);
// UI.display(card.toString());

