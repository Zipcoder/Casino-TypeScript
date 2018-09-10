namespace game{

    export interface GameInterface {

    players: Array<Player>;

    start():void;
    engine():void;
    end():void;

    getPlayers(): Player[];
    getPlayer(id:number): Player;
    addPlayer(player:Player): void;
    removePlayer(player:Player): void;
}

}