interface PlayerInterface {
    id: number;
    name: string;
    profile: Profile;

    getProfile(): Profile;
    getName(): String;
    getId(): number;
}