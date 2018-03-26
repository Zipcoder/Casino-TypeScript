var Card = /** @class */ (function () {
    function Card(i) {
        var s = "null";
        switch (Math.floor(i / 13)) {
            case 0:
                s = "Hearts";
                break;
            case 1:
                s = "Diamonds";
                break;
            case 2:
                s = "Spades";
                break;
            case 3:
                s = "Clubs";
                break;
        }
        this.suit = s;
        this.value = Math.floor(i % 13);
    }
    Card.prototype.val = function () {
        if (this.value < 9)
            return (this.value + 2).toString();
        else
            switch (this.value) {
                case 9:
                    return "Jack";
                case 10:
                    return "Queen";
                case 11:
                    return "King";
                case 12:
                    return "Ace";
            }
    };
    Card.prototype.valNum = function () {
        return (this.value < 9) ? this.value + 2 : 10;
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.data = [];
        this.currentCard = 0;
        for (var i = 0; i < 52; i++) {
            this.data.push(new Card(i));
        }
        this.shuffle();
    }
    Deck.prototype.printAll = function () {
        this.data.forEach(function (c) {
            console.log(c.suit + " " + c.value);
        });
    };
    Deck.prototype.shuffle = function () {
        for (var j, x, i = this.data.length; i; j = Math.floor(Math.random() * i),
            x = this.data[--i],
            this.data[i] = this.data[j],
            this.data[j] = x)
            ;
        this.currentCard = 0;
    };
    Deck.prototype.deal = function () {
        return this.data[this.currentCard++];
    };
    return Deck;
}());
