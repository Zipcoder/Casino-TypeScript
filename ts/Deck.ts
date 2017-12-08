class Deck {
  private _deck: Card[] = new Array<Card>();

  constructor() {
    this.createCardsBasedOnSuit("clubs");
    this.createCardsBasedOnSuit("diamonds");
    this.createCardsBasedOnSuit("hearts");
    this.createCardsBasedOnSuit("spades");
  }

  private createCardsBasedOnSuit(suitType: string) {
      for (let i=2; i<= 10; i++) {
        let card = new Card(i, i +"_of_" + suitType + ".png");
        this._deck.push(card);
      }
      let ace = new Card(1, "ace_of_" + suitType + ".png");
      this._deck.push(ace);
      let jack = new Card(10, "jack_of_" + suitType + ".png");
      this._deck.push(jack);
      let queen = new Card(10, "queen_of_" + suitType + ".png");
      this._deck.push(queen);
      let king = new Card(10, "king_of_" + suitType + ".png");
      this._deck.push(king);
    }

  public getDeck(): Card[] {
    return this._deck;
  }

}
