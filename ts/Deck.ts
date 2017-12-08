class Deck{
    deck: Card[];

    static SUIT = ["Heart", "Spade", "Club", "Diamond"];
    static VALUE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    constructor(){
        this.deck = [];
        for(let i = 0; i < 13; i++){
            for(let j = 0; j < 4; j++){
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.VALUE[i], Deck.SUIT[j]));
            }
        }
    }

    getTopCard(): Card{
        return this.deck.pop();
    }

    shuffle(times?: number){
        for(var i = 0; i < (times || 1); i++){
            this.deck.sort(function(a, b) { return (0.5 - Math.random()); });
        }
    }
}

// var deck = new Deck();
// deck.shuffle(4);
// console.log(deck);
