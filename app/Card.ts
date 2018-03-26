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

    valueOfRank(): number{
        switch(this.rank){
            case "ACE": return 1;
            case "TWO": return 2;
            case "THREE": return 3;
            case "FOUR": return 4;
            case "FIVE": return 5;
            case "SIX": return 6; 
            case "SEVEN": return 7;
            case "EIGHT": return 8;
            case "NINE": return 9;
            case "TEN": return 10;
            case "JACK": return 11;
            case "QUEEN": return 12;
            case "KING": return 13;
            default: return null;
        }
    }

}