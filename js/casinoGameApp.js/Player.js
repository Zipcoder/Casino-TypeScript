"use strict";
var Casino;
(function (Casino) {
    var Player = /** @class */ (function () {
        //constructor
        function Player(playerProfile) {
            this.playerProfile = playerProfile;
        }
        //represents a player within the context of a game
        //should cease to exist upon termination of a game. - HOW?
        //player should implement playerinterface - done
        //player objecs should be created within the context of a game. 
        Player.prototype.getProfile = function () {
            return this.playerProfile;
        };
        Player.prototype.getName = function () {
            return this.playerProfile.getName();
        };
        Player.prototype.getId = function () {
            return this.playerProfile.getId();
        };
        return Player;
    }());
})(Casino || (Casino = {}));
//# sourceMappingURL=Player.js.map