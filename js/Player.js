var Player = /** @class */ (function () {
    function Player(profile) {
        this.playerProfile = profile;
    }
    Player.prototype.getProfile = function () {
        return this.playerProfile;
    };
    Player.prototype.getName = function () {
        return this.playerProfile.getName;
    };
    Player.prototype.getId = function () {
        return this.playerProfile.getId;
    };
    Player.prototype.getBalance = function () {
        return this.playerProfile.getBalance;
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map