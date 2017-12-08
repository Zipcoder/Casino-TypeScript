import {Cards} from './Cards'
class CardPile {

    private cards:Array<Card> = Array<Cards>();

    public shuffle() {
        Collections.shuffle(this.cards);
    }

    public addCardToPile(card:Card) {
        this.cards.push(card);
    }

    public addCardsToPile( cards:CardPile) {
        for(let c in cards.getCards()) {
          let card=cards.getCards()[c];
            this.addCardToPile(card);
        }
    }

    public  contains( card:Card):boolean {
        if(this.cards.contains(card)) {
            return true;
        } else {
            for(let c in this.cards) {
                if(this.cards[c]==(card)) {
                    return true;
                }
            }
            return false;
        }
    }

    public  containsAll( cardPile:CardPile):boolean {
        let temp = new CardPile();
        temp.addCardsToPile(cardPile);
        while(temp.numCards() > 0) {
            let nextCard = temp.getCard(0);
            if(cards.contains(nextCard)) {
                temp.removeCard(nextCard);
            } else {
                return false;
            }
        }
        return true;
    }

    public numCards():number {
        return this.cards.length;
    }

    public  getCard(index:number):Card {
        return this.cards[index];
    }

    public removeCard( card:Card) {
        let matchedCards = new Array<Card>();
        for(let c in this.cards) {
          let other=this.cards[c];
            if(other==card) {
                matchedCards.push(other);
            }
        }
        if(matchedCards.length > 0) {
            this.cards.remove(matchedCards[0]);
        }
    }

    public  getCards():Array<Card> {
        return this.cards;
    }


    public  toString():String {
        StringJoiner stringJoiner = new StringJoiner(", ");
        for(Card card : cards) {
            stringJoiner.add(card.getFaceValue().getIcon() + card.getSuit().getIcon());
        }
        return stringJoiner.toString();
    }
}
