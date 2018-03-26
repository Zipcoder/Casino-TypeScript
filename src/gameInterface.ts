import { PlayerInterface } from './playerInterface';

export interface GameInterface<GameTypePlayer extends PlayerInterface> {
    getPlayers(): GameTypePlayer[];
    getPlayer(playerId: number): GameTypePlayer;
    addPlayer(player: GameTypePlayer): void;
    contains(player: GameTypePlayer): Boolean;
}