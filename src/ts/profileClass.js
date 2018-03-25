var Profile = /** @class */ (function () {
    function Profile(_id, _name, _balance) {
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this.id;
        },
        set: function (userid) {
            this.id = userid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
