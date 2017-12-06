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
/// <reference path="Player.ts" />
var player = new Player();
player.setName("Tariq");
console.log(player.getName());
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
class CardGame {
}
class CardPlayer extends Player {
    constructor() {
        super();
        this.hand;
    }
    getHand() {
        return this.hand;
    }
    addCardToHand(card) {
        this.hand.push(card);
    }
}
class Deck {
    constructor() {
        this.deck = [];
        for (let i = 1; i < 13; i++) {
            for (let j = 1; j < 4; j++) {
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.SUIT[j], Deck.RANK[i]));
            }
        }
    }
}
Deck.SUIT = ["Heart", "Spade", "Club", "Diamond"];
Deck.RANK = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck = new Deck();
console.log(deck);
//# sourceMappingURL=app.js.map