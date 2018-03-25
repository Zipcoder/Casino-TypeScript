import { GameEngineInterface } from '../gameEngineInterface';
import { BlackjackPlayer } from './blackjackPlayer';
import { Profile } from '../profile';
import { Blackjack } from './blackjack';

export class BlackjackEngine implements GameEngineInterface<BlackjackPlayer, Blackjack> {
	player: BlackjackPlayer;
	game: Blackjack;

	constructor(profile: Profile) {
		this.player = new BlackjackPlayer(profile);
		this.game = new Blackjack();
	}

	getGame(): Blackjack {
		return this.game;
	}

	evaluateTurn(player: BlackjackPlayer): void {

	}

	run(): void {
		
	}
}