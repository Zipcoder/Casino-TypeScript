import {Cards} from "./Card";
import {CardFactory} from "./CardFactory";
import {CardShuffler} from "./CardShuffler";
import Deck from "./Deck";

class Dealer {
    hand: Array<Cards>;
    
    constructor() {
        this.hand = new Array<Cards>();
    }

    setHand(hand: Array<Cards>) {
        this.hand = hand;
    }

    getHand(): Array<Cards> {
        return this.hand;
    }

    addToHand(card: Cards) {
        this.hand.push(card);
    }

    getHandValue(): number {
        var handValue: number = 0;
        var aceCounter: number = 0;

        for(var i = 0; i < this.hand.length; i++) {
            if(this.hand[i].getRank() == 1) {
                aceCounter += 1;
                handValue += 11;
            } else if(this.hand[i].getRank() > 9) {
                handValue += 10;
            } else {
                handValue += this.hand[i].getRank();
            }

            if(aceCounter > 0 && handValue > 21) {
                handValue -= 10;
            }
        }
        return handValue;
    }

    canHit(): Boolean {
        if(this.getHandValue() < 17) {
            return true;
        }
        return false;
    }
}

export default Dealer;