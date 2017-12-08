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
define(["require", "exports", "./CardPlayer"], function (require, exports, CardPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlackJackPlayer = (function (_super) {
        __extends(BlackJackPlayer, _super);
        function BlackJackPlayer(name) {
            return _super.call(this, name) || this;
        }
        BlackJackPlayer.prototype.hasAceInHand = function () {
            return this.hasCardsOfRank("ACE");
        };
        return BlackJackPlayer;
    }(CardPlayer_1.CardPlayer));
    exports.BlackJackPlayer = BlackJackPlayer;
});
//# sourceMappingURL=BlackJackPlayer.js.map