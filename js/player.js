"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(theProfile) {
        this._profile = theProfile;
        this._name = this._profile.username;
        this._id = this._profile.id;
    }
    get profile() {
        return this._profile;
    }
    set profile(newProfile) {
        this._profile = newProfile;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
}
exports.Player = Player;
