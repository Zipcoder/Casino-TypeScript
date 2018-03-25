var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getName = function () {
        return this.player.name;
    };
    Player.prototype.getProfile = function () {
        return this.player;
    };
    Player.prototype.getId = function () {
        return this.player.id;
    };
    return Player;
}());
