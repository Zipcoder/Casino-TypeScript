var Profile = /** @class */ (function () {
    function Profile(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Object.defineProperty(Profile.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "getBalance", {
        get: function () {
            return this.balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setBalance", {
        set: function (balance) {
            this.balance = balance;
        },
        enumerable: true,
        configurable: true
    });
    Profile.prototype.addProfile = function (profile) {
        this.listOfProfiles.push(profile);
    };
    return Profile;
}());
//# sourceMappingURL=Profile.js.map