/// <reference path="Deck.ts"/>
/// <reference path="CardPlayer.ts"/>
/// <reference path="Player.ts"/>

class CardGame {
  deck: Deck = new Deck();

  public deal(player: CardPlayer, dealer: CardPlayer, amount: number): void {
    this.clearHands(player, dealer);
    this.deck.populateDeck();
    this.deck.shuffleDeck();
    for(var i=0; i<amount; i++) {
      dealer.addToHand(this.deck.getCard());
      player.addToHand(this.deck.getCard());
    }
  } 

  public clearHands(player: CardPlayer, dealer: CardPlayer): void {
    player.clearHand();
    dealer.clearHand();
  }

}
