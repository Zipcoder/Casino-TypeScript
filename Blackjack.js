"use strict";
var Blackjack = /** @class */ (function () {
    function Blackjack() {
        this.dealer = new Dealer();
        this.player = new Player();
        this.dealerHand = [];
        this.playerHand = [];
        this.deck = new Deck();
    }
    // getWinner(dealer.ge)
    // playAsDealer(){
    //     var dealer = new Hand();
    //     while(dealer.score() < 17){
    //         dealer.hitMe();
    //     }
    //     return dealer;
    // }
    Blackjack.prototype.newHand = function (hand) {
        var card1 = this.deck.dealCard;
        var card2 = this.deck.dealCard;
        var hand = [card1, card2];
        return hand;
    };
    Blackjack.prototype.getHand = function (hand) {
        return hand.toString;
    };
    Blackjack.prototype.hit = function (hand) {
        var addedCard = this.deck.dealCard;
        hand.push(this.deck.dealCard);
    };
    Blackjack.prototype.getWinner = function () {
    };
    Blackjack.prototype.startGame = function () {
    };
    return Blackjack;
}());
