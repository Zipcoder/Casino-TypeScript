import {CasinoGame} from "../casinogame";
import { Player } from "../player";
import { Deck } from "./utilities/deck";
import { Profile } from "../profile";
import { CardPlayer } from "./cardplayer";

export class CardGame implements CasinoGame<CardPlayer> {

    _player: CardPlayer;

    constructor(aProfile: Profile) {
        this._player = new CardPlayer(aProfile);
    }


    startGame() {
    }

    endGame() {
    }

}