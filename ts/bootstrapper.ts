///<reference path="Casino.ts"/>
/// <reference path="craps.ts"/>
/// <reference path="Player.ts"/>
/// <reference path="Deck.ts"/>
/// <reference path="Card.ts"/>

let casino = new Casino();
//casino.startCasino();

let craps = new Craps(casino.casinoPlayer);
// let blackjack = new BlackJack(casino.casinoPlayer);

// let deck = new Deck();
// let displayDeck: Card[] = deck.getDeck();
// for(let i=0; i<displayDeck.length; i++) {
//   console.log(displayDeck[i].getValue());
//   console.log(displayDeck[i].getImageURL());
}
