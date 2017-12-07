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
define(["require", "exports", "./Console"], function (require, exports, console) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SlotsConsole = (function (_super) {
        __extends(SlotsConsole, _super);
        function SlotsConsole() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SlotsConsole.prototype.start = function () {
        };
        SlotsConsole.prototype.getNameOfGame = function () {
            return "Slots";
        };
        return SlotsConsole;
    }(console.Console));
    exports.SlotsConsole = SlotsConsole;
});
//# sourceMappingURL=SlotsConsole.js.map