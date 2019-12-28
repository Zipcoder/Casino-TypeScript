class Hand {
    
    handOfCards: Card[];

    public constructor() {
        this.handOfCards = [];
    }
    public addCard(Card) {
        this.handOfCards.push(Card);
    }
    public numberOfCardsInHand(): number {
        return this.handOfCards.length;
    }

    public handToString(): string{
        var cardsInHand = '';
        for (var i = 0; i < this.handOfCards.length; i++) {
            cardsInHand += this.handOfCards[i].toCardName + ' / ';
        }
        return cardsInHand;
    }

    public handValue(): number{
        var isAce:boolean = false;
        var size: Number = this.numberOfCardsInHand();
        var totalHandValue: number = 0;

        for (var i = 0; i < size; i++) {
            totalHandValue += this.handOfCards[i].value;
            if (this.handOfCards[i].value === 1) {
                isAce = true;
            }
        }
        //if there is an Ace present (previously counted as 1) and total is 11 or less, 
        //add 10 so ace is worth 11
        if (isAce && totalHandValue <= 11) {
            return totalHandValue + 10;
        } else {
            return totalHandValue;
        }
    }


   
}