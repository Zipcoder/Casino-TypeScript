namespace game{

export class BlackJack implements GameInterface{
    

    player: Player;
    dealer: Player;
    deck: Deck;
    players: Player[] = [];
    isGameRunning: boolean;

    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor(){
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.start = this.start.bind(this);

        this.deck = new Deck();
        this.players = new Array<Player>(this.player,this.dealer);
    };


    public start(): void{
        this.button.removeEventListener("click",(e:Event)=>blackJack.start());
        this.display("Welcome to War");
        this.isGameRunning = true;
    }

    public display(input: any): void {
        this.displayWindow.innerText += input + '\n';
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

    engine(): void {
        throw new Error("Method not implemented.");
    }
    end(): void {
        throw new Error("Method not implemented.");
    }

}
let blackJack: BlackJack = new BlackJack();
blackJack.start();
}