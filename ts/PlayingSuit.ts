///<reference path="enumValues.d.ts"/>

enum PlayingSuit{

    HEART = "♡",
    DIAMOND = "♢",
    CLUB = "♧",
    SPADE = "♤"

}

let symbol:string = PlayingSuit.valueOf().toString();

// function toString() {
//     return this.symbol;
// }
//
// function valueOf() {
//     return this.EnumValues.getValues();
// }