class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return this.value;
    }
    getSuit() {
        return this.suit;
    }
}
var Value;
(function (Value) {
    Value[Value["Ace"] = 1] = "Ace";
    Value[Value["Two"] = 2] = "Two";
    Value[Value["Three"] = 3] = "Three";
    Value[Value["Four"] = 4] = "Four";
    Value[Value["Five"] = 5] = "Five";
    Value[Value["Six"] = 6] = "Six";
    Value[Value["Seven"] = 7] = "Seven";
    Value[Value["Eight"] = 8] = "Eight";
    Value[Value["Nine"] = 9] = "Nine";
    Value[Value["Ten"] = 10] = "Ten";
    Value[Value["Jack"] = 11] = "Jack";
    Value[Value["Queen"] = 12] = "Queen";
    Value[Value["King"] = 13] = "King";
})(Value || (Value = {}));
var Suit;
(function (Suit) {
    Suit[Suit["Spade"] = 1] = "Spade";
    Suit[Suit["Heart"] = 2] = "Heart";
    Suit[Suit["Diamond"] = 3] = "Diamond";
    Suit[Suit["Club"] = 4] = "Club";
})(Suit || (Suit = {}));
class Player {
    constructor() {
        this.name;
        this.wallet;
        this.score;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWallet() {
        return this.wallet;
    }
    setWallet(wallet) {
        this.wallet = wallet;
    }
    getScore() {
        return this.score;
    }
    setScore(score) {
        this.score = score;
    }
}
/// <reference path="Card.ts" />
/// <reference path="Player.ts" />
class CardPlayer extends Player {
    constructor() {
        super();
        this.hand = [];
    }
    getHand() {
        return this.hand;
    }
    addCardToHand(card) {
        this.hand.push(card);
    }
    hasCardOfValue(cardValueAsked) {
        for (var i = 0; i < this.hand.length; i++) {
            if (cardValueAsked == this.hand[i].getValue()) {
                return true;
            }
        }
        return false;
    }
    getCardByValue(cardValueAsked) {
        for (var i = 0; i < this.hand.length; i++) {
            if (cardValueAsked == this.hand[i].getValue()) {
                var cardToReturn = this.hand[i];
                this.hand = this.hand.filter(e => e != cardToReturn);
                return cardToReturn;
            }
        }
        return undefined;
    }
}
var cardPlayer = new CardPlayer();
var card = new Card("Queen", "Hearts");
var card2 = new Card("King", "Clubs");
var card3 = new Card("7", "Spades");
cardPlayer.addCardToHand(card);
cardPlayer.addCardToHand(card2);
cardPlayer.addCardToHand(card3);
cardPlayer.hasCardOfValue("Queen");
console.log(cardPlayer.hasCardOfValue("Queen"));
console.log(cardPlayer.getCardByValue("Queen"));
console.log(cardPlayer.hasCardOfValue("Queen"));
console.log(cardPlayer.getHand());
/// <reference path="CardPlayer.ts" />
class BlackJackPlayer extends CardPlayer {
    constructor() {
        super();
    }
    hasAceInHand() {
        return this.hasCardOfValue("Ace");
    }
}
class Game {
    // addPlayer(player: Player){
    //     this.players.push(player);
    // }
    getPlayers() {
        return this.players;
    }
}
/// <reference path="Game.ts" />
class CardGame extends Game {
}
class Deck {
    constructor() {
        this.deck = [];
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.VALUE[i], Deck.SUIT[j]));
            }
        }
    }
    getTopCard() {
        return this.deck.pop();
    }
    shuffle(times) {
        for (var i = 0; i < (times || 1); i++) {
            this.deck.sort(function (a, b) { return (0.5 - Math.random()); });
        }
    }
}
Deck.SUIT = ["Heart", "Spade", "Club", "Diamond"];
Deck.VALUE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck = new Deck();
deck.shuffle(4);
console.log(deck);
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardGame.ts" />
/// <reference path="Deck.ts" />
class BlackJack extends CardGame {
    constructor() {
        super();
        this.dealer = new BlackJackPlayer();
        this.blackJackPlayers = [];
        this.deck = new Deck();
    }
    addBlackJackPlayer(player) {
        this.blackJackPlayers.push(player);
    }
    getDealer() {
        return this.dealer;
    }
    dealInitialCards() {
        this.deck.shuffle(47);
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < this.blackJackPlayers.length; j++) {
                var nextCard = this.deck.getTopCard();
                this.blackJackPlayers[j].getHand().push(nextCard);
            }
        }
    }
    getCardPointValue(card) {
        if (card.getValue() == "K" ||
            card.getValue() == "Q" ||
            card.getValue() == "J") {
            return 10;
        }
        else if (card.getValue() == "A") {
            return 1;
        }
        else {
            return parseInt(card.getValue());
        }
    }
    calculatePlayerScore(blackJackPlayer) {
        var score = 0;
        for (var i = 0; i < blackJackPlayer.getHand().length; i++) {
            score += blackJack.getCardPointValue(blackJackPlayer.getHand()[i]);
        }
        return score;
    }
}
var blackJack = new BlackJack();
var blackJackPlayer = new BlackJackPlayer();
blackJack.addBlackJackPlayer(blackJackPlayer);
blackJack.dealInitialCards();
var score = blackJack.calculatePlayerScore(blackJackPlayer);
console.log(score);
/// <reference path="Player.ts" />
// var player = new Player();
// player.setName("Tariq");
// console.log(player.getName());
//# sourceMappingURL=app.js.map