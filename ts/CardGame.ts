///<reference path="PlayingDeck.ts"/>

abstract class CardGame implements Game {

    abstract play(userInput: string): boolean;

    deck: PlayingDeck;

}