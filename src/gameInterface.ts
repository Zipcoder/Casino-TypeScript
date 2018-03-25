interface GameInterface<PlayerType extends PlayerInterface> {
    getPlayers(): PlayerType[];
    getPlayer(playerId: number): PlayerType;
    addPlayer(player: PlayerType): void;
    contains(player: PlayerType): Boolean;
}
