class Deck{
    private fullDeck: Card[];
    private deckInPlay: Card[];

    constructor(){
        this.fullDeck = new Card[52];
        this.buildDeck();
        this.deckInPlay = this.fullDeck;
    }

    buildDeck(){
        let rank = ["ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", 
        "SEVEN", "EIGHT", "NINE", "TEN",
        "JACK(", "QUEEN(", "KING"];
        let suit = ["HEARTS", "CLUBS", "SPADES", "DIAMONDS"];
        let counter = 0;
        for(let i = 0; i < 13; i++){
            for(let j = 0; j < 4; j++){
                this.fullDeck[counter] = new Card(rank[i], suit[j]);
            counter++;
            }
        }
    }


}
