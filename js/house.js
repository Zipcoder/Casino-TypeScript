"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_1 = require("./profile");
var House = /** @class */ (function () {
    function House() {
        this._profiles = new Array();
        this._profiles.push(this.houseProfile);
    }
    House.prototype.createProfile = function (name, balance) {
        var newProfile = new profile_1.Profile(name, balance, this._profiles.length);
        this._profiles.push(newProfile);
    };
    // selectProfileFromExisting(name: string) {
    //     for (var i = 0; i < this._profiles.length; i++) {
    //         if (this._profiles[i].username == name) {
    //             return this._profiles[i];
    //         }
    //     }
    // }
    House.prototype.removeProfile = function (id) {
        var index = 0;
        for (var i = 0; i < this._profiles.length; i++) {
            if (this._profiles[i].id == id) {
                index = i;
            }
        }
        this._profiles.splice(index, 1);
    };
    House.prototype.startCasino = function () {
    };
    House.prototype.gameSeelction = function () {
    };
    Object.defineProperty(House.prototype, "profiles", {
        get: function () {
            return this._profiles;
        },
        set: function (newProfiles) {
            this._profiles = newProfiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(House.prototype, "houseProfile", {
        get: function () {
            return this.houseProfile;
        },
        enumerable: true,
        configurable: true
    });
    House._houseProfile = new profile_1.Profile("HOUSE", 0, 1);
    return House;
}());
exports.House = House;
