import { GameEngineInterface } from '../gameEngineInterface';
import { BlackjackPlayer } from './blackjackPlayer';
import { Profile } from '../profile';
import { Blackjack } from './blackjack';
import { Deck } from './deck';

export class BlackjackEngine implements GameEngineInterface<BlackjackPlayer, Blackjack> {
	player: BlackjackPlayer;
	game: Blackjack;
	deck: Deck = new Deck();

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
		//add player
		this.game.addPlayer(this.player);

		// deal cards
		console.log(this.deck.draw().toString());
	}
}