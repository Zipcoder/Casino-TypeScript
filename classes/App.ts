///<reference path="CasinoPlayer.ts"/>
import {BlackJack} from "./blackjack/BlackJack";
import {CasinoPlayer} from "./CasinoPlayer";

class App {

    public static main(): void {
        var blackjack: BlackJack;
        blackjack = new BlackJack('player', 'dealer')
        blackjack.start();

    }
}
