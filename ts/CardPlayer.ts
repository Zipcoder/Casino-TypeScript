///<reference path="Deck.ts" />
///<reference path="Player.ts" />

class CardPlayer extends Player {

    hand: Card[];

    constructor(player: Player) {
        super(player.getName(), player.getBalance());
        this.hand = [];
    }

    getHand() {
        return this.hand;
    }

    addCard(card: Card) {
        this.hand.push(card);
    }

    clearHand() {
        this.hand = [];
    }

    getFullHand(): String[] {
        let output: String[] = [];
        for (let i = 0; i < this.hand.length; i++) {
            let face: String = this.hand[i].faceValue;
            let suit: String = this.hand[i].suit;
            output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        }
        return output;
    }

    setHand(hand: Card[]) {
        this.hand = hand;
    }


}
