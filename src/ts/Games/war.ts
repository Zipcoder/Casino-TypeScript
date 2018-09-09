namespace game{

export class War implements GameInterface{

    private isGameRunning: boolean;
    players: Player[];

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
        this.engine();
    }

    display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    engine():void{}


    getPlayers(): Player[] {
        return this.players;
    }
    getPlayer(id: number): Player {
        var playerById;
        this.players.forEach(player => {
            if(player.getId()==id) playerById = player;
        });
        return playerById;
    }
    addPlayer(player: Player): void {
        this.players.push(player);
    }
    removePlayer(player: Player): void {
        let index: number;
        index = this.players.indexOf(player);
        this.players.splice(index,1);
    }

    end(): void {
        throw new Error("Method not implemented.");
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