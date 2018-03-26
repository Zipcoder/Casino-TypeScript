class Deck {
    private cards: Card[];

    public constructor () {
        this.cards = [];
        for (let s = 0; s < 4; s++) {
            for (let r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }

    public shuffle(): void {
        for (var i = 0; i < this.cards.length; i++) {
            var j = Math.floor(Math.random() * this.cards.length);
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
}

    public draw(): Card {
        return <Card> this.cards.shift();
    }
}