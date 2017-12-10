///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="CardPlayer.ts" />

class CardGame {
    deck = new Deck();

    deal(player: CardPlayer, dealer: CardPlayer, amount: number) {
        this.clearHands(player, dealer);
        for (let i = 0; i < amount; i++) {
            this.deck.shuffle();
            dealer.addCard(this.deck.getCard());
            player.addCard(this.deck.getCard());
        }
    }

    giveCard(player: CardPlayer): boolean {
        let addCard: Card = this.deck.getCard();
        if (addCard !== null) {
            player.addCard(this.deck.getCard());
            return true;
        }
            return false;
    }

    clearHands(player: CardPlayer, dealer: CardPlayer) {
        player.clearHand();
        dealer.clearHand();
    }

}
