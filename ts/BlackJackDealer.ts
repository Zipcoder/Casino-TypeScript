///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />

class BlackJackDealer extends BlackJackPlayer {

    constructor(dealer: Player) {
        super(dealer);
    }

    hitDealer(): boolean {
        return this.getScore() < 17;
    }

    getInitialDealerHand(): String[] {
        let output: String[] = [];
        let face: String = this.hand[0].faceValue;
        let suit: String = this.hand[0].suit;
        output.push("<img src = ./images/cards/" + face + "_of_" + suit + ".png width=\"90\" height=\"130\">");
        output.push("<img src = ./images/cards/backofcard.jpg width=\"90\" height=\"130\">");
        return output;
    }


}
