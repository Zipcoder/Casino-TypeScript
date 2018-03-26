var Profile = /** @class */ (function () {
    function Profile(name, accountBalance, id) {
        this.name = name;
        this.accountBalance = accountBalance;
        this.id = id;
    }
    Profile.prototype.getName = function () {
        return this.name;
    };
    Profile.prototype.getAccountBalance = function () {
        return this.accountBalance;
    };
    Profile.prototype.getId = function () {
        return this.id;
    };
    Profile.prototype.setName = function (name) {
        this.name = name;
    };
    Profile.prototype.setAccountBalance = function (accountBalance) {
        this.accountBalance = accountBalance;
    };
    Profile.prototype.setId = function (id) {
        this.id = id;
    };
    return Profile;
}());
//# sourceMappingURL=Profile.js.map