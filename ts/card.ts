///<reference path="suit.ts"/>
///<reference path="cardValue.ts"/>


class Card{

    private suit: Suit;
    private value: CardValue;

    constructor(suit: Suit, value: CardValue){
       this.suit = suit;
       this.value = value;
    }

    public toString(): String {
        return this.suit.toString() + "" + this.value.toString()
    }

    public getSymbol(): String{
        return this.suit.getSymbol();
    }

    public getValue(): number{
        return this.value.getValue();
    }
}
