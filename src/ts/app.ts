
class UserInterface {
    war: War;
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
    }

    display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    clearScreen(): void {
        this.displayWindow.innerText = '';
    }

    lastInput(): any {
        return this._lastInput;
    }

    start() {
        this.display("Do you want to play War? (yes/no)");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }
    
    chooseGame(): void {

        if (this.lastInput() === "yes") {
            this.clearScreen();
            this.display("Let's Go To War!");
            this.war.start();

        }
        else if (this.lastInput() === "no") {
            this.clearScreen();
            this.display("Well fine then, be that way.  Bye.");

        }
        else {
            this.button.addEventListener("click", (e:Event) => this.chooseGame());

        }
    }

}
let UI: UserInterface = new UserInterface();
UI.start();

class War{
    ui: UserInterface;
    private isGameRunning: boolean;
    private dealer: Player;
    private player: Player;
    private deck: Deck
    private dealerHand: Card[] = [];
    private playerHand: Card[] = [];
    private dealerPlayedCards: Card[] = [];
    private playerPlayedCards: Card[] = [];

    public start():void{
        this.isGameRunning = true;
        this.dealerHand = this.deck.shuffleDeck();
        this.playerHand = this.deck.splitDeck();
        this.dealerHand = this.deck.shuffleDeck();
        this.ui.display("War commensing");
    }

    // engine():void{
    //     if()
    // }

    // checkIfGameIsOver():void{

    // }

    // handOfPersonIsEmpty(person: Player):boolean{
    //     return false;
    // }

    // announceWinner()

}