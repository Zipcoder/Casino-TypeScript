// enum CardValue{
//     Ace = 11,
//     Two = 2,
//     Three = 3 ,
//     Four = 4,
//     Five = 5,
//     Six = 6,
//     Seven = 7,
//     Eight = 8,
//     Nine = 9,
//     Ten = 10,
//     Jack = 10,
//     Queen = 10,
//     King = 10
//
// }

class CardValue {
    private static values: CardValue[] = new Array<CardValue>();
    public static ACE: CardValue = new CardValue(11);
    public static TWO: CardValue = new CardValue(2);
    public static THREE: CardValue = new CardValue(3);
    public static FOUR: CardValue = new CardValue(4);
    public static FIVE: CardValue = new CardValue(5);
    public static SIX: CardValue = new CardValue(6);
    public static SEVEN: CardValue = new CardValue(7);
    public static EIGHT: CardValue = new CardValue(8);
    public static NINE: CardValue = new CardValue(9);
    public static TEN: CardValue = new CardValue(10);
    public static JACK: CardValue = new CardValue(10);
    public static QUEEN: CardValue = new CardValue(10);
    public static KING: CardValue = new CardValue(10);



    private value: number;

    constructor(val : number) {
        this.value = val;
        CardValue.values.push(this);
    }

    public getValue(): number {
        return this.value;
    }

    public toString(): String {
        return this.getValue().toString();
    }

    public static getAllValues(): CardValue[] {
        return CardValue.values;
    }

    public static changeAceValue(){
        this.ACE.value = 1;
    }
}