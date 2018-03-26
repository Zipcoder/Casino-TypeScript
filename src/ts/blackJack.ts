class BlackJack implements GameInterface, Card{
    suit: string;
    rank: number;
    player: Player;
    dealer: Player;
    deck: Deck;
    players: Player[] = [];
    isGameRunning: boolean;
    playerH

    constructor(player: Player, dealer:Player, deck:Deck, players:Player[]=[]){
    };

    playerArray(players:Player[]):void{
        this.players.push(this.player);
        this.players.push(this.dealer);
    }
    
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
        
    }
    removePlayer(player: Player): void {
        throw new Error("Method not implemented.");
    }
    contains(player: Player): boolean {
        throw new Error("Method not implemented.");
    }

}