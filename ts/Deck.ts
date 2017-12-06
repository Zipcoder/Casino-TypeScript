class Deck{
    deck: Card[];

    static SUIT = ["Heart", "Spade", "Club", "Diamond"];
    static RANK = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    constructor(){
        this.deck = [];
        for(let i = 1; i < 13; i++){
            for(let j = 1; j < 4; j++){
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.SUIT[j], Deck.RANK[i]));
            }
        }
    }

    shuffle(times?: number){
        for(var i = 0; i < (times || 1); i++){
            this.deck.sort(function() {return (0.5 - Math.random()); });
        }
    }
}

var deck = new Deck();
console.log(deck);
