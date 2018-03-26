class BlackJack extends CardGame {
    constructor(profile) {
        super();
        this.turnOrder = 0;
        el.style.fontFamily = "Georgia";
        body.style.webkitFilter = "sepia(0.6)";
        title.style.fontFamily = "Chicle";
        title.innerText = "Blackjack";
        this.player = new BlackJackPlayer(profile);
        addToDisplayText('Hello ' + this.player.profile.getName + '! Welcome to the BlackJack Table.');
    }
    updateInput() {
        console.log(this.turnOrder);
        if (this.turnOrder == 0) {
            this.newHand();
            this.turnOrder += 1;
            console.log('turn 0 new hand');
        }
        else if (this.turnOrder == 1) {
            this.betStep();
            addToDisplayText('you bet ' + this.bet + ' chips.');
            addToDisplayText('Would you like to hit?');
            this.turnOrder += 1;
            console.log('turn 1');
        }
        else if (this.turnOrder == 2) {
            clearInput();
            if (userInput == 'yes' && this.player.bust == false) {
                this.playerDraw();
                console.log('hitting');
                this.calcHandValue(this.player.hand);
                if (this.bustCheck(this.player.hand) == true) {
                    addToDisplayText('You bust!');
                    this.player.bust = true;
                }
                addToDisplayText('would you like to hit again?');
                return;
            }
            if (userInput == 'yes' && this.player.bust == true) {
                addToDisplayText('Naw, you already went bust.');
            }
            inputField.value = '';
            console.log('dealer turn');
            addToDisplayText('Dealer Taking Turn');
            this.dealer.dealerTurn();
            this.turnOrder += 1;
            console.log('win check');
            addToDisplayText('Final result is...');
            this.dealer.bustCheck();
            this.player.bustCheck();
            this.winCheck();
            addToDisplayText('would you like to play another hand?');
        }
        else if (this.turnOrder == 3) {
            if (userInput == 'yes') {
                console.log('restarting');
                this.turnOrder = 0;
                this.updateInput();
            }
            else {
                addToDisplayText('ok goodbye forever');
                mainMenu.getGameChoice();
            }
            inputField.value = '';
        }
    }
    playerDraw() {
        let tempCard = this.deck.cards.pop();
        this.player.hand.push(tempCard);
        addToDisplayText(this.player.profile.getName + " drew " + tempCard.value + " of " + tempCard.suit);
        console.log('player drew ' + tempCard.value + " of " + tempCard.suit);
    }
    playerDrawFirstHand() {
        this.playerDraw();
        this.playerDraw();
        console.log('player initial hand');
    }
    dealerDraw(show) {
        let tempCard = this.deck.cards.pop();
        this.dealer.hand.push(tempCard);
        if (show == true) {
            addToDisplayText("Dealer drew " + tempCard.value + " of " + tempCard.suit);
        }
        else {
            addToDisplayText("Dealer drew one hidden card");
        }
        console.log('dealer drew ' + tempCard.value + " of " + tempCard.suit);
    }
    dealerDrawFirstHand() {
        this.dealerDraw(true);
        this.dealerDraw(false);
        console.log('dealer initial hand');
    }
    betStep() {
        this.bet = parseInt(inputField.value);
        console.log('bet is now ' + this.bet);
        inputField.value = '';
    }
    hitStep() {
        this.playerDraw();
    }
    calcHandValue(hand) {
        let handValue = 0;
        hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue);
        return handValue;
    }
    bustCheck(hand) {
        let handValue = 0;
        hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust');
            return true;
        }
    }
    winCheck() {
        if (this.calcHandValue(this.player.hand) > this.calcHandValue(this.dealer.hand)) {
            this.winBet();
        }
        else if (this.player.bust == true) {
            this.loseBet();
        }
        else if (this.player.bust == false && this.dealer.bust == true) {
            this.winBet();
        }
        else if (this.calcHandValue(this.player.hand) === this.calcHandValue(this.dealer.hand)) {
            this.drawBet();
        }
        else {
            this.loseBet();
        }
    }
    winBet() {
        this.player.profile.addChips(this.bet);
        console.log('player win, current chip count at ' + this.player.profile.getChips);
        addToDisplayText('You win! Your new balance is ' + this.player.profile.getChips);
    }
    loseBet() {
        this.player.profile.subtractChips(this.bet);
        console.log('player lose, current chip count at ' + this.player.profile.getChips);
        addToDisplayText('You lose! Your new balance is ' + this.player.profile.getChips);
    }
    drawBet() {
        this.bet = 0;
        addToDisplayText('Its a draw!');
    }
    newHand() {
        this.deck = new Deck();
        this.dealer = new dealer(this);
        this.bet = 0;
        this.player.hand = [];
        this.playerDrawFirstHand();
        this.dealerDrawFirstHand();
        this.calcHandValue(this.player.hand);
        addToDisplayText('Please place your bet!');
    }
}
//# sourceMappingURL=BlackJack.js.map