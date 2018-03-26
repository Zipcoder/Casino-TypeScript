namespace Casino{
    
    export interface GameInterface<T extends PlayerInterface> {
    //represents a game which handles some type of player 
        //should implement Runnable - done 

        getPlayers(): T[];

        getPlayer(playerId: number): T;

        addPlayer(player: T): void;

        removePlayer(player: T): void;

        contains(player: T): Boolean;
    }
}