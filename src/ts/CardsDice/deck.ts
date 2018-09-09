namespace game{

    export enum Suit{
        HEARTS = "Hearts", CLUBS = "Clubs", SPADES = "Spades", DIAMONDS = "Diamonds",
    }
    export enum Rank{
        ACE = 1, TWO = 2, THREE = 3, FOUR = 4, FIVE = 5, SIX = 6, SEVEN = 7, EIGHT = 8, NINE = 9, TEN = 10, JACK = 11,
        QUEEN = 12, KING = 13,
    }
    
    export class Card{
        suit: Suit;
        rank: Rank; 

        constructor(){}
    }
    
    export class Deck extends Card {
        
        card: Card;
        _deck: Card[];
        
        constructor(){
            super();
            this._deck = new Array<Card>();
            let fullSuit: Suit[] = new Array<Suit>();
            let fullRank: Array<Rank> = new Array<Rank>();
            fullSuit.push(Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES);
            fullRank.push(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, 
                Rank.TEN,Rank.JACK, Rank.QUEEN, Rank.KING)
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


    getdeck(){
        return this._deck;
    }

    shuffleDeck():Array<Card>{
        for(let i =this._deck.length-1; i>=0; i--){
            let randomI = Math.floor(Math.random()*(i+1));
            let tem:Card = this._deck[i];
            this._deck[i] = this._deck[randomI];
            this._deck[randomI] = tem;
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

