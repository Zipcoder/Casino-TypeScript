///<reference path="PlayingCard.ts"/>



import { EnumValues } from 'enum-values';
import { PlayingSuit } from "./PlayingSuit";
import { PlayingValue } from "./PlayingValue";
//import { Card } from "ts/PlayingCard";

class PlayingDeck {

    private cards : Array<PlayingCard>;

    public PlayingDeck(){
        this.populate();
    }

    // public void shuffle(){
    //     Collections.shuffle(cards);
    // }
    //
    // public ArrayList<PlayingCard> getAllCards(){
    //     return cards;
    // }
    //
    // public Integer countLeft(){
    //     return cards.size();
    // }

    getAndRemoveCard = () : PlayingCard => {
        if(this.cards.length == 0) {
            populate();
            //shuffle();
        }
        card = cards.get(0);
        cards.remove(0);
        return card;
    }

    populate = () : void => {
        cards = new Array<PlayingCard>[];

        let suits = EnumValues.getValues(PlayingSuit);
        let values = EnumValues.getValues(PlayingValue);

        for (let i = 0; i < suits.length; i++){

            for (let j = 0; j < values.length; i++) {
                cards.add(new PlayingCard(suits[i], values[j]));
            }

        }
    }
}