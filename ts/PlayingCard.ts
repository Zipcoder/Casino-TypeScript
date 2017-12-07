///<reference path="PlayingSuit.ts" />
///<reference path="PlayingValue.ts" />

import { PlayingSuit } from "./PlayingSuit";
import { PlayingValue } from "./PlayingValue";


export class PlayingCard {

    private suit: PlayingSuit;
    private value: PlayingValue;

    public constructor(suit: PlayingSuit, value: PlayingValue) {
        this.suit = suit;
        this.value = value;
    }

    public toString = () : string => {
        return "" + this.value + this.suit;
    }

    public getSuit = () : PlayingSuit => {
        return this.suit;
    }

    public getValue = () : PlayingValue => {
        return this.value;
    }

}