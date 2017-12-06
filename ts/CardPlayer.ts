class CardPlayer extends Player{

    hand: Array<Card>;

    constructor(){
        super();
        this.hand;
    }

    getHand(): Array<Card>{
        return this.hand;
    }

    addCardToHand(card: Card){
        this.hand.push(card);
    }
}