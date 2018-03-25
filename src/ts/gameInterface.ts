interface GameInterface<T extends PlayerInterface> {
    
    getPlayers(): T[];
    getPlayer(id:number): T;
    addPlayer(player:T): void;
    removePlayer(player:T): void;
    contains(player:T): boolean;
}