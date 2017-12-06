///<reference path="PlayingCard.ts"/>



import { EnumValues } from 'enumValues';
import { PlayingSuit } from "./PlayingSuit";
import { PlayingValue } from "./PlayingValue";
import { PlayingCard } from "ts/PlayingCard";

class PlayingDeck {

    private cards : Array<PlayingCard>;

    public constructor() {
        this.populate();
    }

    getRandom(floor:number, ceiling:number) {
        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    }

    shuffle<PlayingCard>(array: PlayingCard[]): PlayingCard[] {

        if (array.length <= 1) {
            return array;
        }

        for (let i = 0; i < array.length; i++) {
            const randomChoiceIndex = this.getRandom(i, array.length - 1);
            [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
        }
        return array;
    }

    getAllCards(){
        return this.cards;
    }

    countLeft(){
        return this.cards.length;
    }

    getAndRemoveCard(){
        if(this.cards.length == 0) {
            this.populate();
            this.shuffle(this.cards);
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