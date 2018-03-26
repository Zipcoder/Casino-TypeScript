export class Card {
	suit: string;
	rank: string | number;

	constructor(suit: string, rank: string | number) {
		this.suit = suit;
		this.rank = rank;
	}

	toString(): string {
		return `${ this.rank } of ${ this.suit }`;
	}
}