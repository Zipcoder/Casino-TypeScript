var Profile = /** @class */ (function () {
    function Profile(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Profile.prototype.setId = function (id) {
        this.id = id;
    };
    Profile.prototype.setName = function (name) {
        this.name = name;
    };
    Profile.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Profile.prototype.getName = function () {
        return this.name;
    };
    Profile.prototype.getId = function () {
        return this.id;
    };
    Profile.prototype.get = function () {
        return this.balance;
    };
    return Profile;
}());
//# sourceMappingURL=Profile.js.map