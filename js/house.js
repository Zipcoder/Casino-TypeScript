"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = require("./profile");
class House {
    constructor() {
        this._profiles = new Array();
        this._profiles.push(this.houseProfile);
    }
    createProfile(name, balance) {
        let newProfile = new profile_1.Profile(name, balance, this._profiles.length);
        this._profiles.push(newProfile);
    }
    // selectProfileFromExisting(name: string) {
    //     for (var i = 0; i < this._profiles.length; i++) {
    //         if (this._profiles[i].username == name) {
    //             return this._profiles[i];
    //         }
    //     }
    // }
    removeProfile(id) {
        let index = 0;
        for (var i = 0; i < this._profiles.length; i++) {
            if (this._profiles[i].id == id) {
                index = i;
            }
        }
        this._profiles.splice(index, 1);
    }
    startCasino() {
    }
    gameSeelction() {
    }
    get profiles() {
        return this._profiles;
    }
    set profiles(newProfiles) {
        this._profiles = newProfiles;
    }
    get houseProfile() {
        return this.houseProfile;
    }
}
House._houseProfile = new profile_1.Profile("HOUSE", 0, 1);
exports.House = House;
