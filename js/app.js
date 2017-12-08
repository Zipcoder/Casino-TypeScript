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
class CardGame {
    constructor() {
        this.deck = new Deck;
        this.cardPlayers = [];
    }
    getCardPlayers() {
        return this.cardPlayers;
    }
    addCardPlayer(cardPlayer) {
        this.getCardPlayers().push(cardPlayer);
    }
    deal(numCards) {
        deck.shuffle(47);
        for (var i = 0; i < numCards; i++) {
            for (var j = 0; j < this.getCardPlayers().length; j++) {
                var nextCard = deck.getTopCard();
                this.getCardPlayers()[j].getHand().push(nextCard);
            }
        }
    }
    showPlayerHand() {
        for (var i = 0; i < this.getCardPlayers()[0].getHand().length; i++) {
            console.log(this.getCardPlayers()[0].getHand()[i].getValue()
                + ", " + this.getCardPlayers()[0].getHand()[i].getSuit());
        }
    }
    showDealerHand() {
        for (var i = 0; i < this.getCardPlayers()[1].getHand().length; i++) {
            console.log(this.getCardPlayers()[1].getHand()[i].getValue()
                + ", " + this.getCardPlayers()[1].getHand()[i].getSuit());
        }
    }
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
/// <reference path="CardPlayer.ts" />
/// <reference path="Deck.ts" />
class BlackJack extends CardGame {
    constructor() {
        super();
        this.dealer = new BlackJackPlayer();
    }
    getDealer() {
        return this.dealer;
    }
    hitPlayer(blackJackPlayer) {
        var nextCard = deck.getTopCard();
        blackJackPlayer.getHand().push(nextCard);
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
    // play()     
    pressPlay() {
        //creates a blackJackGame
        //creates a player and a dealer
        //adds player/dealer to the gam
    }
    askForHitOrStay() {
    }
    dealerPlay() {
    }
    isPlayerWinner(blackJackPlayer, dealer) {
        return false;
    }
    playAgain(input) {
        return input;
    }
}
var blackJack = new BlackJack();
var blackJackPlayer = new CardPlayer();
blackJack.addCardPlayer(blackJackPlayer);
blackJack.deal(2);
var score = blackJack.calculatePlayerScore(blackJackPlayer);
console.log(score);
/// <reference path="Player.ts" />
// var player = new Player();
// player.setName("Tariq");
// console.log(player.getName());
//  play()     
//  dealInitialCards(player);
//  dealInitialCards(dealer)
//    askForHitOrStay();
//    dealerPlay();
//    checkWin();
// if(playAgain()){
//     play();
// }else{
// exit
/// <reference path="Deck.ts" />
/// <reference path="CardPlayer.ts" />
class GoFishPlayer extends CardPlayer {
    constructor() {
        super();
    }
    askOpponentForCard(otherPlayer, cardRequest) {
        if (otherPlayer.hasCardOfValue(cardRequest)) {
            return true;
        }
        else {
            return false;
        }
    }
    tallyBooks() {
        var counts = {};
        var numBooks = 0;
        for (var i = 0; i < this.hand.length; i++) {
            var rank = this.hand[i].getValue();
            counts[rank] = (counts[rank] || 0) + 1;
            if (counts[rank] == 4) {
                console.log("you have four " + this.hand[i].getValue() + "s. Book it!");
                numBooks++;
            }
        }
        return numBooks;
    }
    playerHasABook() {
        if (this.tallyBooks() > 0) {
            return true;
        }
        return false;
    }
    removeAllCardsByValue(cardValueToDiscard) {
        for (var i = 0; i < this.hand.length; i++) {
            if (cardValueToDiscard == this.hand[i].getValue()) {
                this.hand = this.hand.filter(e => e != this.getCardByValue(cardValueToDiscard));
            }
        }
    }
}
var goFishPlayer = new GoFishPlayer();
var card0 = new Card("Queen", "Hearts");
var card1 = new Card("Queen", "Hearts");
var card2 = new Card("Queen", "Hearts");
var card3 = new Card("Queen", "Hearts");
var card4 = new Card("King", "Hearts");
var card5 = new Card("King", "Hearts");
var card6 = new Card("King", "Hearts");
var card7 = new Card("King", "Hearts");
goFishPlayer.addCardToHand(card0);
goFishPlayer.addCardToHand(card1);
goFishPlayer.addCardToHand(card2);
goFishPlayer.addCardToHand(card3);
goFishPlayer.addCardToHand(card4);
goFishPlayer.addCardToHand(card5);
goFishPlayer.addCardToHand(card6);
goFishPlayer.addCardToHand(card7);
console.log("books tally output: " + goFishPlayer.tallyBooks());
goFishPlayer.removeAllCardsByValue("Queen");
console.log("books tally after remove: " + goFishPlayer.tallyBooks());
/// <reference path="CardGame.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Deck.ts" />
/// <reference path="GoFIshPlayer.ts" />
class GoFish extends CardGame {
    constructor() {
        super();
    }
    goFishStart() {
        var goFish = new GoFish();
        var dealer = new CardPlayer();
        var player = new CardPlayer();
        goFish.addCardPlayer(dealer);
        goFish.addCardPlayer(player);
        goFish.deal(7);
        console.log("Let's play some GoFish!");
        console.log("player hand");
        goFish.showPlayerHand();
        console.log("dealer hand");
        goFish.showDealerHand();
        //     boolean playing = true;
        //     while (playing) {
        //         playerTurn();
        //         dealerTurn();
        //         playing = checkForWin();
        //     }
        //     gameOptions();
        // }
    }
}
var goFish = new GoFish();
goFish.goFishStart();
//# sourceMappingURL=app.js.map