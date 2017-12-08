var Card = (function () {
    function Card(faceValue, suit) {
        this.faceValue = faceValue;
        this.suit = suit;
    }
    Card.prototype.matches = function (card) {
        return this.getFaceValue() == card.getFaceValue() && this.suit == card.getSuit();
    };
    Card.prototype.getFaceValue = function () {
        return this.faceValue;
    };
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.toString = function () {
        return this.faceValue + " " + this.suit;
    };
    return Card;
}());
var FaceValue;
(function (FaceValue) {
    FaceValue[FaceValue["ACE"] = 1] = "ACE";
    FaceValue[FaceValue["TWO"] = 2] = "TWO";
    FaceValue[FaceValue["THREE"] = 3] = "THREE";
    FaceValue[FaceValue["FOUR"] = 4] = "FOUR";
    FaceValue[FaceValue["FIVE"] = 5] = "FIVE";
    FaceValue[FaceValue["SIX"] = 6] = "SIX";
    FaceValue[FaceValue["SEVEN"] = 7] = "SEVEN";
    FaceValue[FaceValue["EIGHT"] = 8] = "EIGHT";
    FaceValue[FaceValue["NINE"] = 9] = "NINE";
    FaceValue[FaceValue["TEN"] = 10] = "TEN";
    FaceValue[FaceValue["JACK"] = 11] = "JACK";
    FaceValue[FaceValue["QUEEN"] = 12] = "QUEEN";
    FaceValue[FaceValue["KING"] = 13] = "KING";
})(FaceValue || (FaceValue = {}));
var Suit;
(function (Suit) {
    Suit[Suit["SPADES"] = 0] = "SPADES";
    Suit[Suit["HEARTS"] = 1] = "HEARTS";
    Suit[Suit["DIAMONDS"] = 2] = "DIAMONDS";
    Suit[Suit["CLUBS"] = 3] = "CLUBS";
})(Suit || (Suit = {}));
//# sourceMappingURL=Card.js.map