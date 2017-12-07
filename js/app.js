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
        this.hand = [];
    }
    getHand() {
        return this.hand;
    }
    addCardToHand(card) {
        this.hand.push(card);
    }
    hasCardOfRank(cardValueAsked) {
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i].getValue() == cardValueAsked.getValue()) {
                return true;
            }
        }
        return false;
    }
}
class Deck {
    constructor() {
        this.deck = [];
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.SUIT[j], Deck.RANK[i]));
            }
        }
    }
    shuffle(times) {
        for (var i = 0; i < (times || 1); i++) {
            this.deck.sort(function () { return (0.5 - Math.random()); });
        }
    }
}
Deck.SUIT = ["Heart", "Spade", "Club", "Diamond"];
Deck.RANK = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
/// <reference path="Deck.ts" />
class GoFishPlayer extends CardPlayer {
    constructor() {
        super();
    }
    askOpponentForCard(otherPlayer, cardRequest) {
        if (otherPlayer.hasCardOfRank(cardRequest)) {
            return true;
        }
        else {
            return false;
        }
    }
    passCardRequested(cardRequest) {
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i].getValue() == cardRequest.getValue()) {
                return this.hand[i];
            }
        }
        return;
    }
    tallyBooks() {
        var counts = {};
        for (var i = 0; i < this.hand.length; i++) {
            var rank = this.hand[i].getValue();
            counts[rank] = (counts[rank] || 0) + 1;
            if (counts[rank] > 3) {
                console.log("you have four " + this.hand[i].getValue() + "s. Book it!");
            }
        }
        return this.hand;
    }
    removeCardFromHand(card) {
        this.hand = this.hand.filter(e => e !== card);
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
console.log(goFishPlayer.tallyBooks());
// public Integer playPotentialBooksInHand() {
//     HashMap<Card.FaceValue, Integer> numberOfEachValue = new HashMap<>();
//     for(Card card : getHand().getCards()) {
//         Card.FaceValue key = card.getFaceValue();
//         if(numberOfEachValue.containsKey(key)) {
//             numberOfEachValue.put(key, numberOfEachValue.get(key) + 1);
//         } else {
//             numberOfEachValue.put(key, 1);
//         }
//     }
//     ArrayList<Card.FaceValue> fourOfAKindValues = new ArrayList<>();
//     for(Card.FaceValue value : numberOfEachValue.keySet()) {
//         if(numberOfEachValue.get(value) == 4) {
//             fourOfAKindValues.add(value);
//         }
//     }
//     for(Card.FaceValue value : fourOfAKindValues) {
//         CardPile book = new CardPile();
//         for(Card card : getHand().getCards()) {
//             if(card.getFaceValue().equals(value)) {
//                 book.addCardToPile(card);
//             }
//         }
//         books.add(book);
//         for(Card card : book.getCards()) {
//             getHand().removeCard(card);
//         }
//     }
//     return fourOfAKindValues.size();
// }
// public void goFish(Card card) {
//     addCardToHand(card);
// }
//# sourceMappingURL=app.js.map