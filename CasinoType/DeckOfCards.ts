class DeckOfCards {

private newDeck: Card[] = [];
private inPlayDeck: Card[] = [];

suits:CardSuit[] = [CardSuit.Spades, CardSuit.Clubs, CardSuit.Diamonds, CardSuit.Hearts];
ranks:CardValue[] = [CardValue.Ace, CardValue.Two, CardValue.Three, CardValue.Four, CardValue.Five, 
                CardValue.Six, CardValue.Seven, CardValue.Eight, CardValue.Nine, CardValue.Ten, 
                CardValue.Jack, CardValue.Queen, CardValue.King];

	deck:Card[] = [];
 	constructor(){

	 	this.suits.forEach((suit) =>
			 this.ranks.forEach((rank) =>
				 this.deck.push(new Card(rank, suit))));

		this.deck.push(new Card(null,null));
		this.deck.push(new Card(null,null));

 	}

	shuffle(): void {
	 	for (let i = this.deck.length - 1; i > 0; i--) {
	    	let j = Math.floor(Math.random() * (i + 1));
		    let swap = this.deck[i];
		    this.deck[i] = this.deck[j];
		    this.deck[j] = swap;
		}
 	}

	toString(): string {
		return this.deck.join("\n")
	}

}







