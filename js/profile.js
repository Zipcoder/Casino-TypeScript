"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
}
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map