import {Profile} from "./profile"

export abstract class Player {

    private _profile: Profile;
    private _name: string;
    private _id: number;

    constructor(theProfile: Profile) {
        this._profile = theProfile;
        this._name = this._profile.username;
        this._id = this._profile.id;
    }

    get profile() {
        return this._profile;
    }

    set profile(newProfile: Profile) {
        this._profile = newProfile;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get id() {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }
}