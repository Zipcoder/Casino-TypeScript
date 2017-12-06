///<reference path="PlayingValue.ts"/>

public class PlayingCard {
    suit: PlayingSuit;
    value: PlayingValue;

    public PlayingCard(suit, value){
        this.suit = suit;
        this.value = value;
    }

//     @Override
//     public String toString(){
//     return "" + this.value + this.suit;
// }
//
//     public PlayingSuit getSuit() {
//     return suit;
// }
//
//     public PlayingValue getValue() {
//     return value;
}