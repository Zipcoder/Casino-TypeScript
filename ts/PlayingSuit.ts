enum PlayingSuit {

    HEART = "♡",
    DIAMOND = "♢",
    CLUB = "♧",
    SPADE = "♤"

}

let symbol:string = PlayingSuit.valueOf().toString();

function toString() {
    return this.symbol;
}