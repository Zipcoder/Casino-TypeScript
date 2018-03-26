import { Profile } from "./profile";

export interface MainMenu {
    createProfile: (username: string, balance: number) => void;
    // selectProfileFromExisting: (string) => Profile;
    removeProfile: (id: number) => void;
    startCasino: () => void;
    gameSeelction: () => void;
}