interface GameInterface<T extends PlayerInterface>{

    getPlayers(): T[];
    getPlayer(playerId: number): T;
    addPlayer(player: T): void;
    removePlayer(player: T): void;
    contains(played: T): boolean;
}