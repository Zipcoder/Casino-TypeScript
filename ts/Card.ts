enum Suit {HEARTS, DIAMONDS, CLUBS, SPADES}

class Card {
    private suit: Suit;
    public static suitSymbols: string[] = ["♡", "♢", "♧", "♤"];
    public static faceSymbols: string[] = ["A", "J", "Q", "K"];
    private value: number;
    private topCardRepresentation:string;

    public toString(): string{
        return this.topCardRepresentation;
    }

    public getTopCardRepresentation(): string{
        return this.topCardRepresentation;
    }

    constructor(passedSuit: any, passedValue: number, passedSuitRepresentation: string, passedFaceRepresentation: string){
        this.suit=passedSuit;
        this.value=passedValue;
        this.topCardRepresentation = " "+passedFaceRepresentation+passedSuitRepresentation;
    }

    public getValue(): number{
        return this.value;
    }

    public equals(aCard: Card): boolean {

        let cardOne: string = this.toString().substring(0,2);
        let cardTwo: string = aCard.toString().substring(0,2);

        if (cardOne.toLowerCase() === cardTwo.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
}