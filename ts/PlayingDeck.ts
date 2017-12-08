///<reference path="PlayingCard.ts"/>
///<reference path="enumValues.d.ts"/>

import {EnumValues} from "./enumValues";

class PlayingDeck {

    private cards : Array<PlayingCard>;

    public constructor() {
        this.populate();
    }

    getRandom(floor: number, ceiling: number) {
        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    }

    public shuffle(): PlayingCard[] {

        if (this.cards.length <= 1) {
            return this.cards;
        }

        for (let i = 0; i < this.cards.length; i++) {
            const randomChoiceIndex = this.getRandom(i, this.cards.length - 1);
            [this.cards[i], this.cards[randomChoiceIndex]] = [this.cards[randomChoiceIndex], this.cards[i]];
        }
        return this.cards;
    }

    public getAllCards(): Array<PlayingCard>{
        return this.cards;
    }

    public countLeft(): number{
        return this.cards.length;
    }

    public getAndRemoveCard(): PlayingCard{
        if(this.cards.length == 0) {
            this.populate();
            this.shuffle();
        }
        return this.cards.shift();
    }

    public populate(): void {
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