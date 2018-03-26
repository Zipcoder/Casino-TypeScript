class Blackjack {
    public dealer = new Dealer();
    public player = new Player();
    public dealerHand = [];
    public playerHand = [];
    public deck = new Deck();

    newHand(hand:Card []){
        var card1 =this.deck.dealCard;
        var card2 = this.deck.dealCard;
        hand.push(card1);
        return hand;
    }

    getHand(hand : Card[]){
        return hand.toString
    }

    hit(hand : Card[]){
        var addedCard = this.deck.dealCard;
        hand.push(this.deck.dealCard);
    }
    getWinner(){

    }
    startGame(){
    }



}





