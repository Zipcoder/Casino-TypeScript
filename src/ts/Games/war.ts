namespace game{

export class War implements GameInterface{

    isGameRunning: boolean;
    players: Player[];
    userHand: Card[];
    dealerHand: Card[];
    tableCards: Card[];

    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.start = this.start.bind(this);

        this.isGameRunning = true;
        this.players = new Array<Player>(new Player("dealer") ,new Player("player"));
        let deck: Deck = new Deck();
        this.userHand = deck.splitDeck();
        this.dealerHand = deck.getDeck();
        this.tableCards = new Array<Card>();
    }

    getPlayers(): Player[] {
        return this.players;
    }

    getPlayer(id: number): Player {
        return this.players.find(p => p.getId() == id);
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    removePlayer(player: Player): void {
        this.players = this.players.filter(p => p.getId() != player.getId());
    }

    public start():void{
        this.button.removeEventListener("click",(e:Event)=>war.start());

        this.display("Welcome to War");
        do{
            this.engine();
        } while (this.dealerHand.length<52 && this.userHand.length<52);
        
    }

    public display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    public engine():void{
        let dealerTableCard: Card;
        let userTableCard: Card;
        
    }

    public iDeclareWar():void{

    }


    public end(): void {
        this.isGameRunning = false;
    }
}


let war: War = new War();
war.start();
}

//while(((this.dealerHand.length + this.dealerPlayedCards.length) < 52) 
//         && ((this.playerHand.length + this.playerPlayedCards.length) <52)){
//             // if(this.playerHand.length == 0 && this.playerPlayedCards.length>0){
//             //     this.playerHand = this.playerPlayedCards;
//             //     this.playerPlayedCards = 
//             // }
//             let card1 = this.dealerHand.pop();
//             let card2 = this.playerHand.pop();
//             if(card1.rank>card2.rank){
//                   this.dealerPlayedCards.push(card1, card2);
//                 } else if(card1.rank == card2.rank){
//                     this.iDeclareWar();
//                 }
//                 else{
//                     this.playerPlayedCards.push(card1, card2);
//                 }
//         }
//     }