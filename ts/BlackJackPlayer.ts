
class BlackJackPlayer extends CardPlayer<BlackJack> {

    constructor(name:string) {
        super(name);
    }

    public hasAceInHand():boolean {
        return hasCardsOfRank(ACE);
    }
}
