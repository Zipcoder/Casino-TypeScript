"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(theUsername, theBalance, theId) {
        this._username = theUsername;
        this._balance = theBalance;
        this._id = theId;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        this._username = newUsername;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        this._balance = newBalance;
    }
}
exports.Profile = Profile;
