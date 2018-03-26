"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile(theUsername, theBalance, theId) {
        this._username = theUsername;
        this._balance = theBalance;
        this._id = theId;
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newId) {
            this._id = newId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (newUsername) {
            this._username = newUsername;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            this._balance = newBalance;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
exports.Profile = Profile;
