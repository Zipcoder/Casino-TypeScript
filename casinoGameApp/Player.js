"use strict";
var Player = /** @class */ (function () {
    function Player() {
    }
    //represents a player within the context of a game
    //should cease to exist upon termination of a game. - HOW?
    //player should implement playerinterface - done
    //player objecs should be created within the context of a game. 
    Player.prototype.getProfile = function () {
        throw new Error("Method not implemented.");
    };
    Player.prototype.getName = function () {
        throw new Error("Method not implemented.");
    };
    Player.prototype.getId = function () {
        throw new Error("Method not implemented.");
    };
    return Player;
}());
