import { Card } from "./card"

class Deck extends Card{
    
    constructor(card: string) {
        super(card);
    }
    passOutCards(numberCard: number){
        console.log("I am passing out " + numberCard + "and they are " + this.getCard);
    }
}
let myDeck = new Card("Goobly");
myDeck.passOutCards(3);
