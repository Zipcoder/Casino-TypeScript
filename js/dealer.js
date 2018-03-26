class dealer {
    constructor(game) {
        this.hand = [];
        this.bust = false;
        this.game = game;
    }
    dealerTurn() {
        while (this.calcHandValue() < 17) {
            addToDisplayText('Dealer hand value at ' + this.calcHandValue());
            this.game.dealerDraw(true);
            if (this.bustCheck()) {
                addToDisplayText('Dealer busts!');
                this.bust = true;
            }
            addToDisplayText('Dealer final hand value at ' + this.calcHandValue());
        }
    }
    calcHandValue() {
        let handValue = 0;
        this.hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue);
        return handValue;
    }
    bustCheck() {
        let handValue = 0;
        this.hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust');
            return true;
        }
        return false;
    }
    aceAdjust() {
        this.hand.forEach(element => {
            if (element.value == 'A') {
                return true;
            }
        });
        return false;
    }
}
//# sourceMappingURL=dealer.js.map