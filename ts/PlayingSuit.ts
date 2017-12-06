//import { EnumValues } from '~/node_modules/enum-values';

enum PlayingSuit {

    HEART = "♡",
    DIAMOND = "♢",
    CLUB = "♧",
    SPADE = "♤"

}

var symbol:string = PlayingSuit.valueOf();

toString = () : string => {
    return symbol;
}