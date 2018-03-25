interface GameEngineInterface<GameTypePlayer extends PlayerInterface, GameType extends GameInterface<GameTypePlayer>>{
    getGame():GameType;
    evaluateTurn(player:GameTypePlayer):void;
    run():void;
}