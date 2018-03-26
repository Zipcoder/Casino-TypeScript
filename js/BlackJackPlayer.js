class BlackJackPlayer {
    constructor(profile) {
        this.hand = [];
        this.bust = false;
        this.profile = profile;
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
}
//# sourceMappingURL=BlackJackPlayer.js.map