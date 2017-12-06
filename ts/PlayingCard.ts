///<reference path="PlayingSuit.ts" />
///<reference path="PlayingValue.ts" />

import { PlayingSuit } from "./PlayingSuit";
import { PlayingValue } from "./PlayingValue";


class PlayingCard {
    suit: PlayingSuit;
    value: PlayingValue;

    public PlayingCard(suit, value){
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