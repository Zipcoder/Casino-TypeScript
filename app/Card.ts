class Card{
    private rank: String;
    private suit: String;

    constructor(rank: String, suit: String){
        this.rank = rank;
        this.suit = suit;
    }

    getRank(){
        return this.rank;
    }

    getSuit(){
        return this.suit;
    }

    getIntValue(){
        return this.rank.valueOf;
    }

    setSuit(suit: String){
        this.suit = suit;
    }

    toString(){
        let output = (this.rank.toString + "of" + this.suit.toString);
        return output;
    }

}