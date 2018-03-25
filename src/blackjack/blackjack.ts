import { GameInterface } from '../gameInterface';
import { BlackjackPlayer } from './blackjackPlayer';

export class Blackjack implements GameInterface<BlackjackPlayer> {
	players: BlackjackPlayer[];

	getPlayers(): BlackjackPlayer[] {
		return this.players;
	}

	getPlayer(playerId: number): BlackjackPlayer {
		return this.players[playerId];
	}

	addPlayer(player: BlackjackPlayer): void {
		this.players[player.getId()] = player;
	}

	contains(player: BlackjackPlayer): Boolean {
		for (let p: BlackjackPlayer of this.players) {
			if (p.getName() == player.getName()) {
				return true;
			}
		}
		return false;
	}
}