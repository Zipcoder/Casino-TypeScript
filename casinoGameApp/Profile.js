"use strict";
var Profile = /** @class */ (function () {
    function Profile(profileId, username, balance) {
        this.id = profileId;
        this.name = username;
        this.balance = balance;
    }
    Object.defineProperty(Profile.prototype, "_id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "_name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "_balance", {
        get: function () {
            return this._balance;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
