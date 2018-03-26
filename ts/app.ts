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

    display(input: any): void { this.window.innerText += input + '\n'; }
    clearScreen(): void { this.window.innerText = ''; }
    lastInput(): any { return this._lastInput; }

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
    constructor() {}
    public static sum(number1: number, number2: number): number { return (number1 + number2); }
}

class RankNumber {
    private static _INSTANCE: RankNumber;
    private static rankNumbers: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

    private constructor() {}

    public static getInstance(): RankNumber {
        if (this._INSTANCE === null) { this._INSTANCE = new RankNumber(); }
        return this._INSTANCE;
    } 

    public static getRankNumbers(): number[] { return this.rankNumbers; }

    public static DEUCE(): number { return this.rankNumbers[0]; }
    public static THREE(): number { return this.rankNumbers[1]; }
    public static FOUR(): number { return this.rankNumbers[2]; } 
    public static FIVE(): number { return this.rankNumbers[3]; }
    public static SIX(): number { return this.rankNumbers[4]; }
    public static SEVEN(): number { return this.rankNumbers[5]; }
    public static EIGHT(): number { return this.rankNumbers[6]; }
    public static NINE(): number { return this.rankNumbers[7]; }
    public static TEN(): number { return this.rankNumbers[8]; }
    public static JACK(): number { return this.rankNumbers[9]; }
    public static QUEEN(): number { return this.rankNumbers[10]; }
    public static KING(): number { return this.rankNumbers[11]; }
    public static ACE(): number { return this.rankNumbers[12]; }
}

class RankString {
    private static _INSTANCE: RankString;
    private static rankStrings: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    private constructor() {}

    public static getInstance(): RankString {
        if (this._INSTANCE === null) { this._INSTANCE = new RankString(); }
        return this._INSTANCE;
    }

    public static getRankStrings(): string[] { return this.rankStrings; }

    public static DEUCE(): string { return this.rankStrings[0]; }
    public static THREE(): string { return this.rankStrings[1]; }
    public static FOUR(): string { return this.rankStrings[2]; } 
    public static FIVE(): string { return this.rankStrings[3]; }
    public static SIX(): string { return this.rankStrings[4]; }
    public static SEVEN(): string { return this.rankStrings[5]; }
    public static EIGHT(): string { return this.rankStrings[6]; }
    public static NINE(): string { return this.rankStrings[7]; }
    public static TEN(): string { return this.rankStrings[8]; }
    public static JACK(): string { return this.rankStrings[9]; }
    public static QUEEN(): string { return this.rankStrings[10]; }
    public static KING(): string { return this.rankStrings[11]; }
    public static ACE(): string { return this.rankStrings[12]; }
}

class SuitString {
    private static _INSTANCE: SuitString;
    private static suitStrings: string[] = ["clubs", "diamonds", "hearts", "spades"];

    private constructor() {}

    public static getInstance() {
        if (this._INSTANCE === null) { this._INSTANCE = new SuitString(); }
        return this._INSTANCE;
    }

    public static getSuitStrings(): string[] { return this.suitStrings; }

    public static CLUBS(): string { return this.suitStrings[0]; }
    public static DIAMONDS(): string { return this.suitStrings[1]; }
    public static HEARTS(): string { return this.suitStrings[2]; } 
    public static SPADES(): string { return this.suitStrings[3]; }
}

class SuitSymbol {
    private static _INSTANCE: SuitSymbol;
    private static suitSymbols: string[] = ["\u2663", "\u2666", "\u2665", "\u2660"];

    private constructor() {}

    public static getInstance() {
        if (this._INSTANCE === null) { this._INSTANCE = new SuitSymbol(); }
        return this._INSTANCE;
    }

    public static getSuitSymbols(): string[] { return this.suitSymbols; }

    public static CLUBS(): string { return this.suitSymbols[0]; }
    public static DIAMONDS(): string { return this.suitSymbols[1]; }
    public static HEARTS(): string { return this.suitSymbols[2]; } 
    public static SPADES(): string { return this.suitSymbols[3]; }
}

class Card {
    private rankNumber: number;
    private rankString: string;
    private suitSymbol: string;
    private suitString: string;

    constructor(rankNumber: number, rankString: string, suitSymbol: string, suitString: string) {
        this.rankNumber = rankNumber;
        this.rankString = rankString;
        this.suitSymbol = suitSymbol;
        this.suitString = suitString;
    }

    getRankNumber(): number { return this.rankNumber; }
    getRankString(): string { return this.rankString; }
    getSuitSymbol(): string { return this.suitSymbol; }
    getSuitString(): string { return this.suitString; }
    toString(): string { return this.rankString + this.suitSymbol; }
}

class Deck {
    private deck: Card[];

    constructor() {
        this.deck = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.deck.push(new Card(RankNumber.getRankNumbers()[j], 
                                        RankString.getRankStrings()[j],
                                        SuitSymbol.getSuitSymbols()[i], 
                                        SuitString.getSuitStrings()[i]));
            }
        }
    }

    getDeck(): Card[] { return this.deck; }
}

let UI: UserInterface = new UserInterface();
let card: Card = new Card(RankNumber.KING(), RankString.KING(), SuitSymbol.SPADES(), SuitString.SPADES());
let deck: Deck = new Deck();

UI.start();
UI.display(RankNumber.DEUCE());
UI.display(card.toString());
UI.display(deck.getDeck()[12]);

