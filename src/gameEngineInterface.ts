export interface GameEngineInterface<GamePlayer extends PlayerInterface, Game extends GameInterface<GamePlayer>> {
    getGame(): GameInterface<GamePlayer>
    evaluateTurn(player: GamePlayer): void;
    run(): void;
}
