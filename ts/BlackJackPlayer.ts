import {CardPlayer} from './CardPlayer';
import {BlackJack} from './BlackJack';

export class BlackJackPlayer extends CardPlayer<BlackJack> {

    constructor(name:string) {
        super(name);
    }

    public hasAceInHand():boolean {
        return this.hasCardsOfRank(BlackJack.ACE);
    }
}
