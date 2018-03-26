 module CardsClass {
  enum Suits{Clubs, Diamonds, Hearts, Spades}

    export class OneCard{
        
    CardName!: String;
    CardValue!: String;
    CardSuit!: Suits;
 
       constructor (CardName: String, CardValue: String, CardSuit: Suits ){
        this.CardName = CardName;
        this.CardValue = CardValue;
        this.CardSuit = CardSuit;
        }

    }

    class DeckOfCards{
        Deck!: OneCard[];

            addCard(Card:OneCard){
                this.Deck.push(Card);
            }

        constructor (){
            this.Deck = new Array;

            
            this.addCard(new CardsClass.OneCard("Ace", "15", 1)); 
            this.addCard(new CardsClass.OneCard("Ace", "15", 2)); 
            this.addCard(new CardsClass.OneCard("Ace", "15", 3)); 
            this.addCard(new CardsClass.OneCard("Ace", "15", 4)); 
            
        }

            drawCard(){
                var i = 0;
                var count = Math.floor(Math.random()* this.Deck.length-1);
                for (i; i < 1; i++){
                    return this.Deck[count];
                }
            }
    }
    okokok
}

