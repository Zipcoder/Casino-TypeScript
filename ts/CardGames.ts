abstract class CardGames {
    protected player: Player;
    protected deck: Deck;

    public CardGames(aPlayer: Player) {
        this.deck = new Deck();
        this.deck.shuffle();
    }

    public getPlayer(): Player {
        return this.player;
    }

    public setPlayer(player: Player): void {
        this.player = player;
    }

    public getDeck(): Deck {
        return this.deck;
    }

    public setDeck(deck: Deck): void {
        this.deck = deck;
    }

    public dealCard(playerToReceiveCard: Player): void{
        let card: Card = this.getDeck().getCard();
        playerToReceiveCard.addToHand(card);
    }
}