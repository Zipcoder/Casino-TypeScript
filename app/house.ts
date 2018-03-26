import { Profile } from "./profile";
import { MainMenu } from "./mainmenu";

export class House implements MainMenu {

    private _profiles: Profile[] = new Array();
    static _houseProfile: Profile = new Profile("HOUSE", 0, 1);

    constructor() {
        this._profiles.push(this.houseProfile);
    }

    createProfile(name: string, balance: number) {
        let newProfile = new Profile(name, balance, this._profiles.length);
        this._profiles.push(newProfile);
    }

    // selectProfileFromExisting(name: string) {
    //     for (var i = 0; i < this._profiles.length; i++) {
    //         if (this._profiles[i].username == name) {
    //             return this._profiles[i];
    //         }
    //     }
    // }

    removeProfile(id: number) {
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

    set profiles(newProfiles: Profile[]) {
        this._profiles = newProfiles;
    }

    get houseProfile(): Profile {
        return this.houseProfile;
    }

}