class BlackJackPlayer {
    profile:Profile;
    hand:Array<Card> = [];
    bust:boolean = false;

    constructor(profile:Profile) {
        this.profile = profile;
    }

    calcHandValue() {
        let handValue: number = 0;
        this.hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue)
        return handValue;
    }

    bustCheck(): boolean {
        let handValue: number = 0;
        this.hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust')
            return true;
        }
        return false;
    }
}