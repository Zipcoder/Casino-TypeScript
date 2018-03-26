import { PlayerInterface } from './playerInterface';
import { GameInterface } from './gameInterface';

export interface GameEngineInterface<GameTypePlayer extends PlayerInterface, GameType extends GameInterface<GameTypePlayer>> {
    getGame(): GameInterface<GameTypePlayer>
    evaluateTurn(player: GameTypePlayer): void;
    run(): void;
}
