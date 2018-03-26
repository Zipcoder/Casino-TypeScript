import { PlayerInterface } from "./PlayerInterface";

namespace Casino {
    export interface GameEngineInterface <GamePlayerType extends PlayerInterface, GameType extends GameInterface<GameTypePlayer>> {
        getGame(): GameType;
         //return the composite Game object to the client.\

        evaluateTurn(player: T);
        //evaluate the turn of a player.
   
        run();
         //begin game.
    }    
    
}