/// <reference path="Player.ts"/>
/// <reference path="Deck.ts"/>

class CardGame extends Player {
  deck: Deck = new Deck();

  constructor() { //yelling at me to put one in...
    super();
  }

  public deal(player: Player, dealer: Player, amount: number): void {
    this.clearHands(player, dealer);
    this.deck.shuffleDeck();
    for(var i=0; i<amount; i++) {
      dealer.addToHand(this.deck.getCard());
      player.addToHand(this.deck.getCard());
    }
  }

}
