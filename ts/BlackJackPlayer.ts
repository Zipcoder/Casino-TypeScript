///<reference path="CardPlayer.ts" />

class BlackJackPlayer extends CardPlayer {
    score: number = 0;

    constructor(player: Player) {
        super(player);
        this.score = 0;
    }

    getScore(): number {
        return this.score;
    }
    calculateScore() {
        this.score = 0;
        for (let card of this.hand) {
            this.score += card.value;
        }
        if (this.isAceInHand() && this.score <= 11) {
            this.score += 10;
        }
    }

    getName() {
        return this.name;
    }

    isAceInHand() {
        for (let card of this.hand) {
            if (card.faceValue === "ace") {
                return true;
            }
        }
        return false;
    }

    getInitialPlayerHand(): String[] {
        let output: String[] = [];
        let face: String = this.hand[0].faceValue;
        let suit: String = this.hand[0].suit;
        output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        output.push("<img src = ./images/cards/backofcard.jpg width=\"90\" height=\"130\">");
        return output;
    }

}
