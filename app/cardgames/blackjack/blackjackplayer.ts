import { CardPlayer } from "../cardplayer";
import { Gambler } from "../../gamblerinterface";
import { Escrow } from "../../escrow";
import { Profile } from "../../profile";
import { Card } from "../utilities/card";

export class BlackJackPlayer extends CardPlayer implements Gambler {

    private _escrow: Escrow;

    constructor(someProfile: Profile) {
        super(someProfile);
        this._escrow = new Escrow();
    }

    bet(betAmount: number) {
        let accountBalance = this.profile.balance;

        if (betAmount > accountBalance) {
            // print insufficient funds
            return false;
        } else {
            this.profile.balance = accountBalance - betAmount;
            this.escrow.balance = betAmount;
            return true;
        }
    }

    win() {
        this.profile.balance = this.profile.balance + (this._escrow.balance * 2);
        this.escrow.balance = 0;
    }

    lose() {
        this.escrow.balance = 0;
    }

    push() {
        this.profile.balance = this.profile.balance + this._escrow.balance;
        this._escrow.balance = 0;
    }

    scoreHand(): number {
        let handScore: number = 0;
        for (var i = 0; i < this.hand.length; i++) {
            handScore += this.scoreCard(this.hand[i]);
        }

        if (handScore > 21) {
            this.isBusted = true;
        }

        return handScore;
    }

    scoreCard(anyCard: Card): number {
        let cardScore = 0;

        switch(anyCard.rank) {
            case "A":
                cardScore = 11;
                break;
            case "2":
                cardScore = 2;
                break;
            case "3":
                cardScore = 3;
                break;
            case "4":
                cardScore = 4;
                break;
            case "5":
                cardScore = 5;
                break;
            case "6":
                cardScore = 6;
                break;
            case "7":
                cardScore = 7;
                break;
            case "8":
                cardScore = 8;
                break;
            case "9":
                cardScore = 9;
                break;
            case "10":
                cardScore = 10;
                break;
            case "J":
                cardScore = 10;
                break;
            case "Q":
                cardScore = 10;
                break;
            case "K":
                cardScore = 10;
                break;
        }
        return cardScore;
    }

    get hasStood() {
        return this.hasStood;
    }

    set hasStood(stoodStatus: boolean) {
        this.hasStood = stoodStatus;
    }

    get isBusted() {
        return this.isBusted;
    }

    set isBusted(bustedStatus: boolean) {
        this.isBusted = bustedStatus;
    }

    get escrow() {
        return this._escrow;
    }

    set escrow(newEscrow: Escrow) {
        this._escrow = newEscrow;
    }

}