interface GameInterface {
    start():void;
    getPlayers(): Player[];
    getPlayer(id:number): Player;
    addPlayer(player:Player): void;
    removePlayer(player:Player): void;
    contains(player:Player): boolean;
}