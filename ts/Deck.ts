class Deck {
  private _deck: Card[] = []; //new Array<Card>();

  constructor() {
    this.populateDeck();
    this.shuffleDeck();
  }

  private createCardsBasedOnSuit(suitType: string) {
    let directory: string = "images/cards/";
      for (let i=2; i<= 10; i++) {
        let card = new Card(i, directory + i +"_of_" + suitType + ".png");
        this._deck.push(card);
      }
      let ace = new Card(1, directory + "ace_of_" + suitType + ".png");
      this._deck.push(ace);
      let jack = new Card(10, directory + "jack_of_" + suitType + ".png");
      this._deck.push(jack);
      let queen = new Card(10, directory +"queen_of_" + suitType + ".png");
      this._deck.push(queen);
      let king = new Card(10, directory +"king_of_" + suitType + ".png");
      this._deck.push(king);
    }

  public getDeck(): Card[] {
    return this._deck;
  }

  public populateDeck() {
    this.createCardsBasedOnSuit("clubs");
    this.createCardsBasedOnSuit("diamonds");
    this.createCardsBasedOnSuit("hearts");
    this.createCardsBasedOnSuit("spades");
  }

  public shuffleDeck(): void {
    let currentIndex = this._deck.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = this._deck[currentIndex];
      this._deck[currentIndex] = this._deck[randomIndex];
      this._deck[randomIndex] = temporaryValue;
    }
  }

  public getCard(): Card {
    if(this._deck.length === 0) {
      this.populateDeck();
      this.shuffleDeck();
    }
    var card: Card = this._deck.pop();
    return card;
  }
}
