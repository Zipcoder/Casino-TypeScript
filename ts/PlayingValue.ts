import { EnumValues } from '~/node_modules/enum-values';

enum PlayingValue {

    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
    ACE = "A"
}

var value: string = PlayingValue.valueOf();

function getValue() {
    return this.value;
}

toString = () : string => {
    return this.value;
}

