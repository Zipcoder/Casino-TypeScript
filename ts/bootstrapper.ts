///<reference path="Casino.ts"/>
/// <reference path="craps.ts"/>
/// <reference path="Player.ts"/>
/// <reference path="Deck.ts"/>
/// <reference path="Card.ts"/>
/// <reference path="BlackJack.ts"/>
/// <reference path="BlackJackPlayer.ts"/>
/// <reference path="BlackJackDealer.ts"/>
/// <reference path="CardPlayer.ts"/>

let casino = new Casino();
casino.startCasino();

let craps = new Craps(casino.casinoPlayer);
let blackjack = new BlackJack(casino.casinoPlayer, casino.casinoPlayer); //might have to change one to casinoDealer

// let displayEl: any;
// let cssCards: any = "cssCards";
// displayEl = document.getElementById("display");
// let deck = new Deck();
// let displayDeck: Card[] = deck.getDeck();
// for(let i=0; i<displayDeck.length; i++) {
//   let imageUrl : string = displayDeck[i].getImageURL();
//   console.log(displayDeck[i].getValue());
//   console.log(displayDeck[i].getImageURL());
//   displayEl.innerHTML += "<img class=" + cssCards + " src=" + imageUrl + ">";
// }
