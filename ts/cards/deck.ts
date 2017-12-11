class Deck {

     cards: Card[];

    public constructor() {
        this.cards = [];
        for (let s = 0; s < 4; s++) {
            for (let r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s))
            }
        }
    }
}