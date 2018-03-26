class Deck {
    
    public cards: Card[] = [];

    constructor(){
        this.shuffle();
    }
    
    newCards():Card[] {
        for(var i = 1; i <= 4; i++){
            for(var n = 1; n <= 13; n++){
            this.cards.push(new Card(i,n));
            }
        }
        return this.cards;
    }

    shuffle():void{
        this.cards = [];
        for(var suitIndex = 0; suitIndex < 4; suitIndex++){
            for(var cardRankIndex = 0; cardRankIndex< 13; cardRankIndex++){
                this.cards.push(new Card(suitIndex, cardRankIndex))
            }
        }

        var currentIndex: number = this.cards.length;
        var swap: Card;
        var randomIndex: number;
//always puts a random card in the last index and moves the previous index
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            swap = this.cards[currentIndex];

            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = swap;
        }
    }
    cardsLeft(){
        return this.cards.length;
    }

    dealCard(){
       return this.cards.shift();
    }

}


