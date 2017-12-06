class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getSuit() {
        return this.suit;
    }
}
var Suit;
(function (Suit) {
    Suit["Spade"] = "Spade";
    Suit["Heart"] = "Heart";
    Suit["Diamond"] = "Diamond";
    Suit["Club"] = "Club";
})(Suit || (Suit = {}));
var Value;
(function (Value) {
    Value["King"] = "10";
    Value["Queen"] = "10";
    Value["Two"] = "2";
    Value["Seven"] = "7";
})(Value || (Value = {}));
let nameOfValue = Value[Value.King];
console.log(nameOfValue);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let nameOfA = Enum[Enum.A]; // "A"
class CardPlayer {
}
class Deck {
    constructor() {
        for (var i = 0; i < 13; i++) {
        }
    }
}
/// <reference path="Card.ts" />
//# sourceMappingURL=app.js.map