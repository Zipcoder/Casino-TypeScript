namespace game{

    export enum Suit{
        HEARTS = "\u2665", CLUBS = "\u2663", SPADES = "\u2660", DIAMONDS = "\u2666",
    }
    
    export enum Rank{
        ACE = 1, TWO = 2, THREE = 3, FOUR = 4, FIVE = 5, SIX = 6, SEVEN = 7, EIGHT = 8, NINE = 9, TEN = 10, 
        JACK = 11, QUEEN = 12, KING = 13,
    }
    
    export class Card{
        suit: Suit;
        rank: Rank; 

        constructor(){}
    }
    
    export class Deck extends Card {
        
        _deck: Card[];
        
        constructor(){
            super();
            this._deck = new Array<Card>();
            let fullSuit: Suit[] = new Array<Suit>(Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES);
            let fullRank: Array<Rank> = new Array<Rank>(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, 
                Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN,Rank.JACK, Rank.QUEEN, Rank.KING);
            for(let suit of fullSuit){
                for(let rank of fullRank){
                    this._deck.push({suit, rank});
                }
            }
            for(let i =this._deck.length-1; i>=0; i--){
                let randomI = Math.floor(Math.random()*(i+1));
                let temp:Card = this._deck[i];
                this._deck[i] = this._deck[randomI];
                this._deck[randomI] = temp;
            }
        }


    getDeck(){
        return this._deck;
    }

    shuffleDeck():Array<Card>{
        for(let i =this._deck.length-1; i>=0; i--){
            let randomI = Math.floor(Math.random()*(i+1));
            let temp:Card = this._deck[i];
            this._deck[i] = this._deck[randomI];
            this._deck[randomI] = temp;
        }
        return this._deck;
    }

    drawCard():Card{
        return this._deck.pop();
    }

    splitDeck():Card[]{
        return this._deck.splice(0, (this._deck.length-1)/2);
    }

    addCard(card:Card):void{
        this._deck.push(card);
    }

    dealHand(nCards:number):Array<Card>{
        return this._deck.splice(0, nCards);
    }
    
}

}

