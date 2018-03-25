class BlackJack extends CardGame{
    deck: Deck;
    dealer:dealer;
    player:Player;
    bet: number;
    userFunds:number = 0;
    userName:string;
    constructor() {
        super();
        this.deck = new Deck();
        this.dealer = new dealer(this);
    }
    turnOrder: number = 0;
    name: string;
    updateInput() {
        console.log(this.turnOrder);
        if (this.turnOrder == 0) {
            this.getName();
            addToDisplayText('How much would you like to gamble with?');
            this.turnOrder += 1;
            console.log('turn 0 take name')
        } else if (this.turnOrder == 1) {
            addToDisplayText('Hello ' + this.userName);
            this.getFunds();
            this.player = new Player(this.userName, this.userFunds);
            addToDisplayText('You have ' + this.player.funds + ' chips')
            console.log('player funds at ' + this.player.funds);
            this.turnOrder += 1;
            console.log('turn 1 take funds, deal')
            this.newHand();
        } else if (this.turnOrder == 2) {
            this.betStep();
            addToDisplayText('you bet ' + this.bet + ' chips.')
            this.turnOrder += 1;
            addToDisplayText('Would you like to hit?');
        } else if (this.turnOrder == 3) {
            if (inputField.value == 'yes') {
                this.playerDraw();
                console.log('hitting');
                this.calcHandValue(this.player.hand);
                if (this.bustCheck(this.player.hand) == true) {
                    addToDisplayText('you bust!')
                    this.player.bust = true;
                    this.turnOrder += 1
                }
                addToDisplayText('would you like to hit again?');
            } else {
                this.turnOrder += 1
            }
            inputField.value = '';
        } else if (this.turnOrder == 4) {
            console.log('dealer turn');
            addToDisplayText('Dealer Taking Turn');
            this.dealer.dealerTurn();
            this.turnOrder += 1;
        } else if(this.turnOrder == 5) {
            console.log('win check');
            addToDisplayText('Final result is...');
            this.dealer.bustCheck();
            this.player.bustCheck();
            this.winCheck();
            addToDisplayText('would you like to play another hand?')
            this.turnOrder += 1;
        } else if(this.turnOrder == 6){
            if (userInput == 'yes') {
                this.turnOrder = 2;
                this.subsequentHand();
            } else {
                addToDisplayText('ok goodbye forever');
                this.turnOrder += 1;
            }
            inputField.value = '';
        }
    }
    getName() {
        this.userName = inputField.value;
        clearInput();
    }
    getFunds() {
        this.userFunds = parseInt(inputField.value);
        clearInput();
    }
    playerDraw() {
        let tempCard = this.deck.cards.pop();
        this.player.hand.push(tempCard);
        addToDisplayText(this.player.name + " drew " + tempCard.value + " of " + tempCard.suit);
        console.log('player drew ' + tempCard.value + " of " + tempCard.suit);
    }
    playerDrawFirstHand() {
        this.playerDraw();
        this.playerDraw();
        console.log('player initial hand');
    }
    dealerDraw(show:boolean) {
        let tempCard = this.deck.cards.pop();
        this.dealer.hand.push(tempCard);
        if (show == true) {
            addToDisplayText("Dealer drew " + tempCard.value + " of " + tempCard.suit);
        } else {
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
        console.log('bet is now ' + this.bet)
        inputField.value = '';
    }
    hitStep() {
        this.playerDraw();
    }
    calcHandValue(hand: Array<Card>) {
        let handValue: number = 0;
        hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue)
        return handValue;
    }

    bustCheck(hand: Array<Card>) : boolean{
        let handValue: number = 0;
        hand.forEach(card => {
            handValue += CardGame.cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust')
            return true;
        }
    }

    winCheck(){
        if (this.calcHandValue(this.player.hand) > this.calcHandValue(this.dealer.hand)) {
            this.winBet();
        } else if (this.player.bust == true){
            this.loseBet();
        } else if (this.player.bust == false && this.dealer.bust == true){
            this.winBet();
        } else if (this.calcHandValue(this.player.hand) === this.calcHandValue(this.dealer.hand)){
            this.drawBet();
        } else {
            this.loseBet();
        }
    }

    winBet(){
        this.player.funds += this.bet;
        console.log('win, funds at ' + this.player.funds);
        addToDisplayText('You win! Your new balance is ' + this.player.funds);
    }

    loseBet(){
        this.player.funds -= this.bet;
        console.log('lose, funds at ' + this.player.funds);
        addToDisplayText('You lose! Your new balance is ' + this.player.funds);
    }

    drawBet(){
        this.bet = 0;
        addToDisplayText('Its a draw!')
    }

    newHand(){
        this.playerDrawFirstHand();
        this.dealerDrawFirstHand();
        this.calcHandValue(this.player.hand);
        addToDisplayText('please place your bet');
    }

    subsequentHand() {
        this.deck = new Deck();
        this.dealer = new dealer(this);
        this.bet = 0;
        this.player.hand = [];
        this.playerDrawFirstHand();
        this.dealerDrawFirstHand();
        this.calcHandValue(this.player.hand);
        addToDisplayText('please place your bet');
    }
    
}