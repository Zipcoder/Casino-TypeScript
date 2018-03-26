import {Cards, Suit} from "./card";

export interface Shuffler {
    shuffle(inputCards: Cards[]): Cards[];
}

export class CardShuffler implements Shuffler {
    shuffle(inputCards: Cards[]): Cards[] {
        var shuffledDeck: Cards[] = [];
        var n: number = inputCards.length;
        var i: number;

        while(n) {
            i = Math.floor(Math.random() * n--);
            shuffledDeck.push(inputCards.splice(i, 1)[0]);
        }
    return shuffledDeck.slice(0);
    }

}