import Card from "./Card";

class CardDeck {
    private deck: Card[];

    public constructor() {
       this.deck = [];

       for (let suit = 0; suit < 4; suit++) {
           for (let rank = 1; rank < 14 ; rank ++) {
               this.deck.push(new Card(rank, suit));
           }
       }
    }
    

    shuffle(): void {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let swap = this.deck[i];
            this.deck[i] = this.deck[i];
            this.deck[j] = swap;
        }
    }
}
