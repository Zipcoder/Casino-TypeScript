import { Card } from "./card";

export class Player {
    name: string;
    hand: Card[];
    handScore: number;

    constructor(name: string){
        this.name = name;
        this.hand = [];
        this.handScore = 0;
    }
    playerNameToString(): string{
        return this.name;
    }
    handToString(): string{
        var handString = "";
        for (var i = 0; i < this.hand.length; i++){
            handString += this.hand[i].cardToString + " ";
        }
        return handString;
    }
}