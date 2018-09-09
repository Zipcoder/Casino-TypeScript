namespace game{

export class BlackJack implements GameInterface{
    

    player: Player;
    dealer: Player;
    deck: Deck;
    players: Player[] = [];
    isGameRunning: boolean;

    constructor(){
        this.deck = new Deck();
        this.players = new Array<Player>(this.player,this.dealer);
    };


    static start(): void{
        throw new Error("Method not implemented.");
    }
  
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
        if(this.players.includes(player)){
            let index: number = this.players.indexOf(player);
            this.players.splice(index,1);
        }
    }

    start(): void {
        throw new Error("Method not implemented.");
    }

    engine(): void {
        throw new Error("Method not implemented.");
    }
    end(): void {
        throw new Error("Method not implemented.");
    }

}
}