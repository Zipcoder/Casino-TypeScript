import {Cards} from "./Card";
import {CardFactory} from "./CardFactory";
import {CardShuffler} from "./CardShuffler";
import Deck from "./Deck";
import Wallet from "./Wallet";

class BlackjackPlayer{
private hand: Array<Cards>; 
private canHit: Boolean;
protected firstName: string;
protected lastName: string;
protected wallet: Wallet;

    constructor(firstName: string, lastName: string, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = new Wallet(balance);
    }

    getName(): string {
        return this.firstName + " " + this.lastName;
    }

    setName(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getBalance(): number {
        return this.wallet.getBalance();
    }

    setHand(hand: Array<Cards>) {
        this.hand = hand;
    }

    addToHand(card: Cards) {
        this.hand.push(card);
    }

    getHand(): Array<Cards> {
        return this.hand;
    }

    canIHit(): Boolean {
        return this.canHit;
    }

    setCanHit(bool: Boolean) {
        this.canHit = bool;
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

    payoutWin(amount: number) {
        this.wallet.add(amount);
    }

    payoutLoss(amount: number) {
        this.wallet.subtract(amount);
    }

}

export default BlackjackPlayer;