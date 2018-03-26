"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(theProfile) {
        this._profile = theProfile;
        this._name = this._profile.username;
        this._id = this._profile.id;
    }
    Object.defineProperty(Player.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        set: function (newProfile) {
            this._profile = newProfile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newId) {
            this._id = newId;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
