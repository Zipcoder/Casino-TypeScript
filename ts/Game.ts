abstract class Game{
    
    protected players: Player[];

    // addPlayer(player: Player){
    //     this.players.push(player);
    // }

    getPlayers(): Player[]{
        return this.players;
    }
}