"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(id, name, chips) {
        this._id = id;
        this._name = name;
        this._chips = chips;
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
    get chips() {
        return this._chips;
    }
    set chips(chips) {
        this._chips = chips;
    }
}
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map