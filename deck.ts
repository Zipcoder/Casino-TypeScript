import {Card} from "./card";

export class Deck{
    static SUITS = ['♥', '♦', '♠', '♣'];
    static RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    cards: Card[];
    currentCard: number;

    constructor(){
        this.cards = [];
        this.currentCard = 0;
        for (var i = 0; i < 13; i++){
            for (var suit = 0; suit < 4; suit++){
                this.cards.push(new Card(Deck.RANKS[i], Deck.SUITS[suit]));
            }
        }
        this.shuffle(3);
    }
    shuffle(times?:number) {
		for (var i = 0; i < (times||1); i++) {
			this.cards.sort(function(){ 
                return (0.5 - Math.random()); });
		}
    }
    printDeck(){
        this.cards.forEach(function(card:Card){
            console.log(card.cardToString());
        });
    }
    draw(): Card{
        if (this.currentCard === this.cards.length-1){
            this.shuffle();
            this.currentCard = 0;
        }
         return this.cards[this.currentCard++];
    }
}
