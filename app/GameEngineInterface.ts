interface GameEngineInterface<T extends PlayerInterface, E extends GameInterface<T>>{
    getGame(): E;
    evaluateTurn(player: T): void;
    run(): void;
}