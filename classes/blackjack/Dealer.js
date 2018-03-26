"use strict";
///<reference path="../CasinoPlayer.ts"/>
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
exports.__esModule = true;
var CasinoPlayer_1 = require("../CasinoPlayer");
var BjPlayer_1 = require("./BjPlayer");
var Dealer = /** @class */ (function (_super) {
    __extends(Dealer, _super);
    function Dealer(dealer) {
        return _super.call(this, new CasinoPlayer_1.CasinoPlayer("Dealer", 100000000000000)) || this;
    }
    Dealer.prototype.hitDealer = function () {
        return _super.prototype.getScore.call(this) < 17;
    };
    return Dealer;
}(BjPlayer_1.BjPlayer));
exports.Dealer = Dealer;
