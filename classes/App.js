"use strict";
exports.__esModule = true;
///<reference path="CasinoPlayer.ts"/>
var BlackJack_1 = require("./blackjack/BlackJack");
var App = /** @class */ (function () {
    function App() {
    }
    App.main = function () {
        var blackjack;
        blackjack = new BlackJack_1.BlackJack('player', 'dealer');
        blackjack.start();
    };
    return App;
}());
