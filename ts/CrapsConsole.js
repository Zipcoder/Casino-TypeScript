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
    var CrapsConsole = (function (_super) {
        __extends(CrapsConsole, _super);
        function CrapsConsole() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CrapsConsole.prototype.start = function () {
        };
        CrapsConsole.prototype.getNameOfGame = function () {
            return "Craps";
        };
        return CrapsConsole;
    }(console.Console));
    exports.CrapsConsole = CrapsConsole;
});
//# sourceMappingURL=CrapsConsole.js.map