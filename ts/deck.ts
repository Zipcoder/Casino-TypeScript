class Deck {
    CardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    CardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

    cards: Array<Card> = [];
    constructor() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                let tempCard: Card = new Card(this.CardValues[j], this.CardSuits[i]);
                this.cards.push(tempCard);
                // console.log(tempCard.value + " of " + tempCard.suit)
            }
        }
        CardGame.shuffle(this.cards);
        // for (var k = 0; k < 52; k++){
        //     console.log(this.cards[k].value + " of " + this.cards[k].suit + " value of " + cardValueInterpret(this.cards[k].value))
        // }
    }
}