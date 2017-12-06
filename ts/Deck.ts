/// <reference path="Card.ts" />


class Deck{

    cards:Card[] = []

    constructor(){
               
            for(let i=0; i<4; i++){
           var suitArray: Suit[] =[Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE]
           for(let j=0; j<13;j++){
            var rankArray: Rank[] = [Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE,
                Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN,Rank.KING]

                var card: Card = new Card(rankArray[j], suitArray[i])
                console.log(card)
            this.cards.push(card)
            
            }
        }
        console.log(this.cards.length)
    }

   

    
    getDeck():Card[]{

        return this.cards;
    }
   
        
   }




