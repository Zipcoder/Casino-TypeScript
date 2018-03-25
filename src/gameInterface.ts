interface GameInterface<PlayerType extends PlayerInterface> {
    getPlayers(): PlayerType[];
    getPlayer(playerId: number): PlayerType;
    addPlayer(player: PlayerType);
    contains(player: PlayerType): Boolean;
}
