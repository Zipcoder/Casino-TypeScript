class Hand{
    private cards : Card[];

    constructor(){
       let  cards : Card[]= new Array();
    }

    public addCard(aCard : Card){
        this.cards.push(aCard);
    }
    public removeCard(aCard : Card){
        var index = this.cards.indexOf(aCard,0);
        if(index>-1){
            this.cards.slice(index,1);
        }
    }
    public clear(){
        while(this.cards.length>0){
            this.cards.pop();
        }
    }
    // public hasCard(aCard : Card){
    //     //if(aCard in this.cards){
    //         return true;
    //     }
    // }
    public sortArray(){
        return this.cards.sort();
    }
}