abstract class GameEngine<Game> implements GameEngineInterface<GameTypePlayer, GameType> {
    getGame(): GameType {
        throw new Error("Method not implemented.");
    }
    evaluateTurn(player: GameTypePlayer): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
}