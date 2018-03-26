
class Card{

    constructor(public suit: Suit, public value: CardRank){

    }

    getSuit():string {
        return Suit[this.suit];
    }

    getValue():string {
        return CardRank[this.value];
    }

    showCard():string {
        return this.getValue + " of " + this.getSuit();
    }
} 