"use strict";
var Casino;
(function (Casino) {
    var Profile = /** @class */ (function () {
        function Profile(profileId, username, balance) {
            this.id = profileId;
            this.name = username;
            this.balance = balance;
        }
        Object.defineProperty(Profile.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Profile.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Profile.prototype, "balance", {
            get: function () {
                return this.balance;
            },
            enumerable: true,
            configurable: true
        });
        return Profile;
    }());
    Casino.Profile = Profile;
})(Casino || (Casino = {}));
//# sourceMappingURL=Profile.js.map