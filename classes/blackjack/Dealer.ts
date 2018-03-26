///<reference path="../CasinoPlayer.ts"/>

import {CasinoPlayer} from "../CasinoPlayer";
import {BjPlayer} from "./BjPlayer";

export class Dealer extends BjPlayer{

    constructor(dealer: CasinoPlayer){
        super(new CasinoPlayer("Dealer", 100000000000000))
    }

    hitDealer(): boolean {
        return super.getScore() < 17;
    }

}