class dealer {
    hand:Array<Card> = [];
    bust:boolean = false;
    game:BlackJack;

    constructor(game:BlackJack) {
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

    aceAdjust(){
        this.hand.forEach(element => {
            if (element.value == 'A') {
                return true;
            }
        });
        return false;
    }
}