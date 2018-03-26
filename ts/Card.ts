class Card{
    
    private suit : CardSuit;
    private rank : CardRank;

    constructor(suit : CardSuit,rank : CardRank){
        this.suit = suit;
        this.rank = rank;
    }
    public  getSuit(){
        return this.suit;
    }
    public getRank (){
        return this.rank;
    }
    public setSuit(suit : CardSuit){
        this.suit = suit;
    }
    public setRank(rank : CardRank){
        this.rank = rank;
    }
    

}