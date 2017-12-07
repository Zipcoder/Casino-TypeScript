class CardPlayer extends Player{

    hand: Card[];

    constructor(){
        super();
        this.hand = [];
    }

    getHand(): Card[]{
        return this.hand;
    }

    addCardToHand(card: Card){
        this.hand.push(card);
    }

    hasCardOfRank(cardValueAsked: Card): boolean {
        for(var i=0; i<this.hand.length; i++){
            if(this.hand[i].getValue() == cardValueAsked.getValue()){
                return true;
            }
        }
        return false;
    }
}