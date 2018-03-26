class Deck{
    private fullDeck: Collections.LinkedList<Card>;
    private deckInPlay: Collections.LinkedList<Card>;

    constructor(){
        this.fullDeck = new Collections.LinkedList<Card>();
        this.buildDeck();
        this.deckInPlay = this.fullDeck;
    }

    buildDeck(){
        let rank = ["ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", 
        "SEVEN", "EIGHT", "NINE", "TEN",
        "JACK(", "QUEEN(", "KING"];
        let suit = ["HEARTS", "CLUBS", "SPADES", "DIAMONDS"];
        for(let i = 0; i < 13; i++){
            for(let j = 0; j < 4; j++){
            this.fullDeck.add(new Card(rank[i], suit[j]));
            }
        }
    }


}
