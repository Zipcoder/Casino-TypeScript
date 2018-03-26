class UserInterface
{
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public window: HTMLDivElement = <HTMLDivElement>document.getElementById('display')
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput : any;

    constructor()
    {
        this.button.addEventListener("click", (e: Event) => {this._lastInput = this.userInput.value});
        this.button.addEventListener("click", (e: Event) => console.log(this._lastInput));
        this.button.addEventListener("click", (e:Event) => {this.userInput.value = ''});        
    }

    display(input: string): void 
    {
        this.window.innerText += input + '\n';
    }

    clear(): void 
    {
        this.window.innerText = '';
    }

    lastInput(): any
    {
        return this._lastInput;
    } 

    start() 
    {
        this.display("Choose a game by entering it in the text field below and then click submit");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }

    chooseGame(): void 
    {
        if (this.lastInput() === "Blackjack" || this.lastInput() === "blackjack")
        {
            this.clear();
            this.display("Ok, get ready to lose son!");
        }
        else
        {
            this.clear();
            this.display("Good, you were gonna lose anyway!");
        }   
    }


}

class MathOps
{
    constructor() {}

    static sum(number1: number, number2: number): number 
    {
        return (number1 + number2);
    }

}

enum SuitString {
    CLUBS = "clubs",
    DIAMONDS = "diamonds",
    HEARTS = "hearts",
    SPADES = "spades"
}

enum SuitSymbol 
{
    CLUBS = "\u2663",
    DIAMONDS = "\u2666",
    HEARTS = "\u2665",
    SPADES = "\u2660"
}

enum RankNumber 
{
    DEUCE = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13,
    ACE = 1
}

enum RankString 
{
    DEUCE = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
    ACE = "A"
}

class Card
{
    private suitSymbol: SuitSymbol;
    private rankNumber: RankNumber;
    private rankString: RankString;


    constructor(suitSymbol : SuitSymbol, rankNumber: RankNumber, rankString: RankString )
    {
        this.suitSymbol = suitSymbol;
        this.rankNumber = rankNumber;
        this.rankString = rankString;
    }

    getSuitSymbol(): string { return this.suitSymbol; }
    getRankNumber(): number { return this.rankNumber; }
    getRankString(): string { return this.rankString; }

    toString(): string 
    {
        return this.suitSymbol + this.rankString;
    }


}

let UI: UserInterface = new UserInterface;
UI.start();







