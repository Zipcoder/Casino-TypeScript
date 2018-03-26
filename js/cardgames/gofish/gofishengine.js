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
var GoFishEngine = /** @class */ (function (_super) {
    __extends(GoFishEngine, _super);
    function GoFishEngine(game, player) {
        var _this = _super.call(this, game, player) || this;
        _this._game = game;
        _this._player = player;
        return _this;
    }
    GoFishEngine.prototype.run = function () {
    };
    GoFishEngine.prototype.endGame = function () {
    };
    return GoFishEngine;
}(gameengine_1.GameEngine));
