
class Deck{
    public cards : Card[]=[];

    constructor(){
        this.createDeck();
        this.shuffle(this.cards); 
    }
    public createDeck() {
        this.cards =[];
        var suitLength =4;
        var rankLength =13;
        for(var indexOfSuit=0;indexOfSuit<suitLength;indexOfSuit++){
            for(var indexOfRank = 0;indexOfRank<rankLength;indexOfRank++){
                this.cards.push(new Card(indexOfSuit,indexOfRank));
            }
        }

        return this.cards;
    }

    public shuffle(array){
        let length = array.length;

        while(length>0){
            let index = Math.floor(Math.random()*length);
            length--;

            let tempCard = array[length];
            array[length]= array[index];
            array[index]= tempCard;
        }
        return array;
    }

    public getCard(){
        return this.cards.pop();
    }

    public countRemainingCards(){
        return this.cards.length;
    }
    public addCard(aCard : Card){
        this.cards.push(aCard);
    }
    public peek(){
        return this.cards[this.cards.length-1];
    }
   
}