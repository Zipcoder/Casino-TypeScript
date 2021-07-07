import { PlayerInterface } from "./PlayerInterface";

namespace Casino {



    export abstract class GameEngine<GameTypePlayer extends PlayerInterface, GameTypePlayer extends GameInterface<GameTypePlayer>>
        implements GameEngineInterface<GameTypePlayer, GameType>{

        abstract getGame(): GameType;
        abstract evaluateTurn(player: GameTypePlayer): void;
        abstract run(): void;
        }
    
}