import {Profile} from "./profile"

interface PlayerInterface {
    _name: string;
    _id: number;
    _profile: Profile;

    name: () => string;
    id: () => number;
    profile: () => Profile;
}