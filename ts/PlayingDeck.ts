///<reference path="PlayingCard.ts"/>



import { EnumValues } from 'enumValues';
import { PlayingSuit } from "./PlayingSuit";
import { PlayingValue } from "./PlayingValue";
import { PlayingCard } from "ts/PlayingCard";

class PlayingDeck {

    private cards : Array<PlayingCard>;

    public PlayingDeck(){
        this.populate();
    }

    // public void shuffle(){
    //     Collections.shuffle(cards);
    // }
    
    getAllCards(){
        return this.cards;
    }

    countLeft(){
        return this.cards.length;
    }

    getAndRemoveCard(){
        if(this.cards.length == 0) {
            this.populate();
            //shuffle();
        }
        return this.cards.shift();
    }

    populate() {
        this.cards = new Array<PlayingCard>();

        let suits = EnumValues.getValues(PlayingSuit);
        let values = EnumValues.getValues(PlayingValue);

        for (let i = 0; i < suits.length; i++){

            for (let j = 0; j < values.length; i++) {
                this.cards.push(new PlayingCard(<PlayingSuit>suits[i].valueOf(), <PlayingValue>values[j].valueOf()));
            }

        }
    }
}