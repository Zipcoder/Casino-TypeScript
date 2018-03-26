class Blackjack {
    public dealer = new Dealer();
    public player = new Player();
    public dealerHand = [];
    public playerHand = [];
    public deck = new Deck();

    newHand(){
        var card1 =this.deck.dealCard;
        var card2 = this.deck.dealCard;
        var cards = [card1, card2];
        return cards;
    }

    getHand(hand : Card[]){
        return hand.toString
    }

    // hit(hand : Card[]){
    //     var addedCard = this.deck.dealCard;
    //     hand.push(addedCard);
    // }
    getWinner(){

    }
    startGame(){
    }



}





