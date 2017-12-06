import { EnumValues } from './enum-values';

export enum PlayingSuit {

    HEART = "♡",
    DIAMOND = "♢",
    CLUB = "♧",
    SPADE = "♤"

}

let symbol:string = PlayingSuit.valueOf();

toString = () : string => {
    return symbol;
}