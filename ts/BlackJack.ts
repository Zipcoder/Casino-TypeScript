class BlackJack {
    public playerHand;
    public dealerHand;
    public gameDeck = new Deck();
    
    constructor() {
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        this.gameDeck = new Deck();
    }
    //deal two cards to player
    //check player score.  If player or dealer= 21--gameover
    //player hit or stay. if hit, deal card. check score. if above 21: busted.
    //if player stay:: deal two cards to dealer.
    //if dealer below 17: deal again. 
    public println(input){
        display.innerHTML += input;
    }

    public startGameDealTwoToPlayer() {
        this.playerHand.addCard(this.gameDeck.draw());
        this.playerHand.addCard(this.gameDeck.draw());
    }

    public startGameDealTwoToDealer() {
        this.dealerHand.addCard(this.gameDeck.draw());
        this.dealerHand.addCard(this.gameDeck.draw());
    }

    public play() {
        this.startGameDealTwoToPlayer();
        this.startGameDealTwoToDealer();
        let gameOver = this.checkBlackJack();
        if(!gameOver){
            this.println('<br>' +"Dealer's face up card is a " + this.dealerHand.handOfCards[0].toCardName + '<br>');
            this.println('<br>' + "Your cards: " + this.playerHand.handToString()+" Your hand value = "+ this.playerHand.handValue()+'<br>');
        }
    }

    public checkBlackJack(){
        if(this.checkPlayerBlackJack()){
            if(this.checkDealerBlackJack()){
                this.println("It's a tie!");
                return true;    
            } else{
                this.println("You win!");
                return true;
            }
        } else if(this.checkDealerBlackJack()){
            this.println("You lose!");
            return true;
        } else return false;
    }

    public getWinner(){
        let gameOver = this.checkBlackJack();

    }

    public stay(){
        

    }

    public checkPlayerBlackJack(){
        return this.dealerHand.handValue() === 21;
    }

    public checkDealerBlackJack(){
        return this.dealerHand.handValue() === 21;
    }

    public hit(){
        this.playerHand.addCard(this.gameDeck.draw());
        let gameOver = this.checkBlackJack();
        if(!gameOver){
            this.println('<br>'+ "Dealer's face up card is a " + this.dealerHand.handOfCards[0].toCardName + '<br>');
            this.println('<br>'+ "Your cards: " + this.playerHand.handToString()+" Your hand value = "+ this.playerHand.handValue()) + '<br>';
        }
    }
}