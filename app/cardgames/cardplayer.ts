import { Player } from "../player";
import { Card } from "../cardgames/utilities/card";
import { Profile } from "../profile";

export class CardPlayer extends Player {
    _hand: Card[];

    constructor(theProfile: Profile) {
        super(theProfile);
        this._hand = new Array();
    }

    get hand() {
        return this._hand;
    }

    set hand(newHand: Card[]) {
        this._hand = newHand;
    }
}