///<reference path="PlayingDeck.ts"/>

 import {PlayingDeck} from "./PlayingDeck";

abstract class CardGame implements Game {

    abstract play(userInput: string): boolean;

    deck: PlayingDeck;

}
