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
var GoFish = /** @class */ (function (_super) {
    __extends(GoFish, _super);
    function GoFish(userProfile) {
        var _this = _super.call(this, userProfile) || this;
        _this.user = new Player(userProfile);
        _this.dealerProfile = new Profile("dealer", 0, 1);
        _this.dealer = new Player(_this.dealerProfile);
        return _this;
    }
    GoFish.prototype.deal = function () {
        for (var i = 0; i < 7; i++) {
            // user.getHand().addCard
        }
    };
    return GoFish;
}(Player));
//# sourceMappingURL=GoFish.js.map