///<reference path="Card.ts"/>


class Deck {
    private cards: Card[];

    constructor() {
        this.populate();
    }

    public getCard(): Card{
//        if(cards.size() == 0) {
//            populate();
//            shuffle();
//        }
        return this.cards.pop();
    }

    public getAllCards(): Card[]{
        return this.cards;
    }


    public populate(): void {
        this.cards = [];

        for (let suitIndex = 0; suitIndex < 4; suitIndex++) {
            let suit = Suit[suitIndex];
            for (let value = 1; value <= 13; value++) {
                if (value < 11)
                {
                    if (value==1)
                        this.cards.push(new Card(suit, value, Card.suitSymbols[suitIndex], Card.faceSymbols[0]));
                    else
                        this.cards.push(new Card(suit, value, Card.suitSymbols[suitIndex], ""+value));
                }
                else
                    this.cards.push(new Card(suit, 10, Card.suitSymbols[suitIndex], Card.faceSymbols[value - 10]));
            }
        }

        this.shuffle();
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

