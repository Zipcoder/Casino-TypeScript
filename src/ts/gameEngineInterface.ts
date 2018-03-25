interface GameEngineInterface<GameTypePlayer extends PlayerInterface, GameType extends GameInterface>{
    
    getGame():GameType;
    evaluateTurn(player:GameTypePlayer):void;
    run():void;
}