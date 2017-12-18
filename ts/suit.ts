
// enum Suit{
//     CLUB = "♧", DIAMOND = "♢", HEART = "♡", SPADE = "♤"
// }

class Suit{

    private static suit: Suit[] = new Array<Suit>();

    public static CLUB = new Suit("♧");
    public static DIAMOND = new Suit( "♢");
    public static HEART = new Suit("♡");
    public static SPADE = new Suit("♤");

    private symbol: String;

    constructor(symbol: String){
        this.symbol = symbol;
        Suit.suit.push(this);
    }

    public getSymbol(): String {
        return this.symbol;
    }

    public toString(): String {
        return this.getSymbol();
    }

    public static getAllSymbols(): Suit[] {
        return Suit.suit;
    }
}