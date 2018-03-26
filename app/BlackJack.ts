import Collections = require('typescript-collections');
class BlackJack extends CardGame implements Gamble {
    private balance: number;
    private player: Player;
    private playingDeck = new Deck();
    private playerHand: Collections.LinkedList<Card>;
    private dealerHand: Collections.LinkedList<Card>;
    private playerHandSum: number;
    private dealerHandSum: number;
    private prompts = new BlackJackPrompts();

    run() {
        let stillRunning = this.prompts.welcomePrompt;
        while (stillRunning => true) {
            
        }
    }

    buildDealerHand() {
        this.dealerHand.add(this.playingDeck.pullCardFromDeck());
        this.dealerHand.add(this.playingDeck.pullCardFromDeck());
    }

    buildHand() {
        //add two cards to hand initially
        this.playerHand.add(this.playingDeck.pullCardFromDeck());
        this.playerHand.add(this.playingDeck.pullCardFromDeck());
    }
    calculateEarnings(wages: number, winnings: number): number {
        throw new Error("Method not implemented.");
    }

    hit() {
        if (this.sumDealerCards() <= 18) {
            this.dealerHand.add(this.playingDeck.pullCardFromDeck());
        }
        this.playerHand.add(this.playingDeck.pullCardFromDeck());
    }

    sumDealerCards() {
        let sumCount = 0;
        for (let i = 0; i < this.dealerHand.size(); i++) {
            sumCount = this.dealerHand.elementAtIndex(i).valueOfRank();
        }
        return sumCount;
    }

    sumPlayerCards() {
        let sumCount = 0;
        for (let i = 0; i < this.playerHand.size(); i++) {
            sumCount = this.playerHand.elementAtIndex(i).valueOfRank();
        }
        return sumCount;
    }

    checkBust(person: String) {
        switch (person) {
            case "player": if (this.sumPlayerCards() > 21) { return true; } else { return false; }
            case "dealer": if (this.sumDealerCards() > 21) { return true; } else { return false; }
        }
    }
}