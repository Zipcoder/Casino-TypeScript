"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gameengine_1 = require("../../gameengine");
var BlackJackEngine = /** @class */ (function (_super) {
    __extends(BlackJackEngine, _super);
    function BlackJackEngine(game, player) {
        var _this = _super.call(this, game, player) || this;
        _this._game = game;
        _this._player = player;
        _this._keepPlaying = true;
        return _this;
    }
    BlackJackEngine.prototype.run = function () {
        // display a welcome message
        while (this.keepPlaying === true) {
            this._game.playOneRound();
            //ask if player wants to play another round
            //set keepPlaying status
        }
        this.endGame();
    };
    BlackJackEngine.prototype.endGame = function () {
        // game over
        // back to menu
    };
    Object.defineProperty(BlackJackEngine.prototype, "keepPlaying", {
        get: function () {
            return this._keepPlaying;
        },
        enumerable: true,
        configurable: true
    });
    return BlackJackEngine;
}(gameengine_1.GameEngine));
