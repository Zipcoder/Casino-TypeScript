class Card{
suit: Suit
rank: Rank

constructor(rank:Rank, suit:Suit){

    this.rank = rank
    this.suit = suit
}

getRank():Rank{

    return this.rank
}
getSuit():Suit{
    
        return this.suit
    }

tostring():string{
        return this.rank+" "+ this.suit
    }

}