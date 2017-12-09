import {Card} from './Card'
export class CardPile {

    private cards: Card[] = [];

    public shuffle() {
      var j, x, i;
      for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
      }
    }

    public addCardToPile(card:Card) {
        this.cards.push(card);
    }

    public addCardsToPile(cards:CardPile) {
        for(let c in cards.getCards()) {
          let card=cards.getCards()[c];
            this.addCardToPile(card);
        }
    }

    public contains(card:Card):boolean {
      for(let c in this.cards) {
          if(this.cards[c].matches((card))) {
              return true;
          }
      }
      return false;
    }

    public  containsAll( cardPile:CardPile):boolean {
        let temp = new CardPile();
        temp.addCardsToPile(cardPile);
        while(temp.numCards() > 0) {
            let nextCard = temp.getCard(0);
            if(this.contains(nextCard)) {
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
      for(let c = 0; c < this.cards.length; c++) {
        let other=this.cards[c];
          if(other.matches(card)) {
              this.cards.splice(c, 1);
              return;
          }
      }
    }

    public clear() {
      this.cards = [];
    }

    public  getCards():Array<Card> {
        return this.cards;
    }


    public  toString():string {
      var icons: string[] = [];
      for(let c in this.cards) {
        icons.push(this.cards[c].getIcon());
      }
      return icons.toString();
    }
}
