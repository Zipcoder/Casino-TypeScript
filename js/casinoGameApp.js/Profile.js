"use strict";
var Casino;
(function (Casino) {
    var Profile = /** @class */ (function () {
        function Profile(userName) {
            this.userId = Math.random() * 100;
            this.userName = userName;
            this.balance = 250;
        }
        Profile.prototype.getUserId = function () {
            return this.userId;
        };
        Profile.prototype.getUserName = function () {
            return this.userName;
        };
        Profile.prototype.getUserBalance = function () {
            return this.balance;
        };
        return Profile;
    }());
    Casino.Profile = Profile;
})(Casino || (Casino = {}));
//# sourceMappingURL=Profile.js.map