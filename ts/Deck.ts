class Card {
  suit: String;
  faceValue: any;
  value: number;

  constructor(suit, faceValue, value) {
    this.suit = suit;
    this.faceValue = faceValue;
    this.value = value;
  }

}

class Deck {
  suits: String[] = ["hearts", "diamonds", "spades", "clubs"];
  cards: Card[] = [];
  constructor() { }

  populate() {
    for (var i = 0; i < 4; i++) {
      for (var value = 1; value <= 13; value++) {
        if (value < 11) {
          if (value === 1) {
            this.cards.push(new Card(this.suits[i], "ace", value));
          } else {
            this.cards.push(new Card(this.suits[i], value, value));
          }
        } else {
          this.cards.push(new Card(this.suits[i], faceCard(value), numValue(value)));
        }
      }
    }

    function faceCard(value) {
      switch (value) {
        case (11):
          return "jack";
        case (12):
          return "queen";
        case (13):
          return "king";
      }
    }

    function numValue(value) {
      switch (value) {
        case (11):
          return 10;
        case (12):
          return 10;
        case (13):
          return 10;
      }
    }
  }

  getDeck() {
    this.populate();
    return this.cards;
  }

}
