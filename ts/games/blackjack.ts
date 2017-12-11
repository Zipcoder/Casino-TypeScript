///<reference path="../dealers/dealer.ts"/>
class Blackjack extends Dealer{

    dealer = Dealer;
    dealtCard = Card;
    deck = Deck;
    blackjack = Blackjack;

    hand(){
        let c = new Deck();
        let d = new Dealer();
        for (let i = 0; i <=1; i++) {
            d.shuffle();
            IO.display((d.draw()))
        }
    }

}