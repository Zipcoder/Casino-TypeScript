
class War{

    private isGameRunning: boolean;
    private dealer: Player;
    private player: Player;
    private deck: Deck;
    private dealerHand: Card[] = [];
    private playerHand: Card[] = [];
    private dealerPlayedCards: Card[] = [];
    private playerPlayedCards: Card[] = [];

    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.start = this.start.bind(this);
    }

    public start():void{
        this.button.removeEventListener("click",(e:Event)=>war.start());
        this.display("Welcome to War");
        this.isGameRunning = true;
        this.dealerHand = this.deck.shuffleDeck();
        this.playerHand = this.deck.splitDeck();
        console.log(this.dealerHand.length);
        this.engine();
    }

    display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    engine():void{
        while(((this.dealerHand.length + this.dealerPlayedCards.length) < 52) 
        && ((this.playerHand.length + this.playerPlayedCards.length) <52)){
            if(this.playerHand.length == 0 && this.playerPlayedCards.length>0){
                this.playerHand.
            }
            let card1 = this.dealerHand.pop();
            let card2 = this.playerHand.pop();
            if(card1.rank>card2.rank){
                  this.dealerPlayedCards.push(card1, card2);
                } else if(card1.rank == card2.rank){
                    this.iDeclareWar();
                }
                else{
                    this.playerPlayedCards.push(card1, card2);
                }
        }
    }

    private iDeclareWar():void{

    }

}

let war: War = new War();
war.start();