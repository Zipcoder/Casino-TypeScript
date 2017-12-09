import {CardPlayer} from './CardPlayer';
import {GoFish} from './GoFish';
import {CardPile} from './CardPile';
import {Card} from './Card';

export class GoFishPlayer extends CardPlayer<GoFish> {

  private books: CardPile[] = [];

  constructor(name: string) {
    super(name);
  }

  fishForCards(otherPlayer: GoFishPlayer, rank: string) {
    if(otherPlayer.hasCardsOfRank(rank)) {
      return true;
    }
    else {
      return false;
    }
  }

  handOverAllCardsRequested(rank: string) : CardPile {
    let toHandOver = new CardPile();
    let hand = this.getHand().getCards();
    for(let card in hand) {
      if(hand[card].getFaceValue() === rank) {
        toHandOver.addCardToPile(hand[card]);
      }
    }
    for(let card in toHandOver.getCards()) {
      this.getHand().removeCard(toHandOver.getCards()[card]);
    }
    return toHandOver;
  }

  playPotentialBooksInHand() : number {
    let numberOfEachValue = {};
    let hand = this.getHand().getCards();
    for(let card in hand) {
      let key = hand[card].getFaceValue();
      if(numberOfEachValue[key] === undefined) {
        numberOfEachValue[key] = 1;
      }
      else {
        numberOfEachValue[key]++;
      }
    }

    let fourOfAKindValues: string[] = [];

    for(let key in numberOfEachValue) {
      if(numberOfEachValue[key] === 4) {
        fourOfAKindValues.push(key);
      }
    }

    for(let value in fourOfAKindValues) {
      let book = new CardPile();
      for(let card in hand) {
        if(hand[card].getFaceValue() === value) {
          book.addCardToPile(hand[card]);
        }
      }
      this.books.push(book);
      for(let card in book.getCards()) {
        this.getHand().removeCard(book.getCards()[card]);
      }
    }
    return fourOfAKindValues.length;
  }

  goFish(card: Card) {
    this.addCardToHand(card);
  }

  getBooks() : CardPile[] {
    return this.books;
  }
}
