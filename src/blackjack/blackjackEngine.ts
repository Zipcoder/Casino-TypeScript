import { GameEngineInterface } from '../gameEngineInterface';
import { BlackjackPlayer } from './blackjackPlayer';
import { Profile } from '../profile';
import { Blackjack } from './blackjack';
import { Deck } from './deck';
import { Card } from './card';

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
		this.player.hand.push(this.deck.draw());
		this.player.hand.push(this.deck.draw());

		let dealerHand: Card[] = [];
		dealerHand.push(this.deck.draw());
		dealerHand.push(this.deck.draw());

		let UI: HTMLElement = document.getElementById('display')!;

		let header: HTMLParagraphElement = document.createElement('p')!;
		header.innerHTML = "Dealer Hand:";
		UI.appendChild(header);

		for (let card of dealerHand) {
			let e: HTMLSpanElement = document.createElement('span');
			e.classList.add('card');
			e.innerHTML = card.toString() + ' | ';

			UI.appendChild(e);
		}

		let playerHeader: HTMLParagraphElement = document.createElement('p')!;
		playerHeader.innerHTML = "<br />Player Hand:";
		UI.appendChild(playerHeader);

		for (let card of this.player.hand) {
			let e: HTMLSpanElement = document.createElement('span');
			e.classList.add('card');
			e.innerHTML = card.toString() + ' | ';

			UI.appendChild(e);
		}

		let output: HTMLParagraphElement = document.createElement('p');
		output.innerHTML = "<br />You win...or lose. IDK there isn't any real game logic.";
		UI.appendChild(output);
	}

	run(): void {
		this.game.addPlayer(this.player);
		this.evaluateTurn(this.player);
	}
}