abstract class GameEngine<GameTypePlayer extends PlayerInterface, GameType extends GameInterface<GameTypePlayer>> 
implements GameEngineInterfae<GameTypePlayer, GameType> {

    abstract getGame(): GameType
    abstract evaluateTurn(player: GameTypePlayer): void 
    abstract run(): void
}