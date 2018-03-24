"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(card) {
        this.firstName = "Ezio";
        this.card = card;
    }
    Card.prototype.getCard = function () {
        return this.card;
    };
    Card.prototype.passOutCards = function (numCards) {
        console.log("I am passing out " + numCards + "and they are " + this.card);
    };
    Card.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.firstName);
        }, 500);
    };
    return Card;
}());
exports.Card = Card;
var myCard = new Card("Hearts");
myCard.passOutCards(4);
myCard.sayHello();
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = "Wu"; }
    console.log("Hello, my name is " + firstName + " " + lastName);
}
greet("Lawrence", "Stu");
