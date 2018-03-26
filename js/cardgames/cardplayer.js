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
var player_1 = require("../player");
var CardPlayer = /** @class */ (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer(theProfile) {
        var _this = _super.call(this, theProfile) || this;
        _this._hand = new Array();
        return _this;
    }
    Object.defineProperty(CardPlayer.prototype, "hand", {
        get: function () {
            return this._hand;
        },
        set: function (newHand) {
            this._hand = newHand;
        },
        enumerable: true,
        configurable: true
    });
    return CardPlayer;
}(player_1.Player));
exports.CardPlayer = CardPlayer;
