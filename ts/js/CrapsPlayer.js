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
define(["require", "exports", "./Player"], function (require, exports, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CrapsPlayer = (function (_super) {
        __extends(CrapsPlayer, _super);
        function CrapsPlayer(name) {
            return _super.call(this, name) || this;
        }
        return CrapsPlayer;
    }(Player_1.Player));
    exports.CrapsPlayer = CrapsPlayer;
});
//# sourceMappingURL=CrapsPlayer.js.map