import { Card } from './card';
import { CardSuit, CardRank } from '../cardEnums';

export class Deck {
	cards: Card[];

	constructor() {
		this.cards = this.buildDeck();
	}

	draw(): Card {
		let randomIndex = Math.floor(Math.random() * 52);
		let draw: Card = this.cards[randomIndex];
		this.cards[randomIndex] = this.cards[this.cards.length - 1];
		this.cards[this.cards.length-1] = draw;
		return this.cards.pop()!;
	}

	private buildDeck(): Card[] {
		let result: Card[] = [];
		for (let suit in CardSuit) {
			for (let rank in CardRank) {
				result.push(new Card(suit, rank));
			}
		}
		return result;
	}
}