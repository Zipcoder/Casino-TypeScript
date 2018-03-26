"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CasinoPlayer_1 = require("../CasinoPlayer");
var CardGamePlayer = /** @class */ (function (_super) {
    __extends(CardGamePlayer, _super);
    function CardGamePlayer() {
        var _this = _super.call(this, "Card Player", 1000) || this;
        _this.hand = [];
        return _this;
    }
    CardGamePlayer.prototype.getHand = function () {
        return this.hand;
    };
    CardGamePlayer.prototype.addCard = function (card) {
        this.hand.push(card);
    };
    CardGamePlayer.prototype.clearHand = function () {
        this.hand = [];
    };
    CardGamePlayer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    CardGamePlayer.prototype.sort = function () {
        this.hand.sort();
    };
    CardGamePlayer.prototype.displayHand = function (sort) {
        if (sort) {
            this.sort();
        }
        var displayHand = document.getElementById("playerHand");
        displayHand.innerHTML = "";
        for (var i = 0; i < this.hand.length; i++) {
            var currentCard = this.hand[i];
            displayHand.innerHTML += this.cardImg(currentCard);
        }
    };
    CardGamePlayer.prototype.cardImg = function (card) {
        return card.getFace() + "_of_" + card.getSuit();
    };
    return CardGamePlayer;
}(CasinoPlayer_1.CasinoPlayer));
exports.CardGamePlayer = CardGamePlayer;
