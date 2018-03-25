class Player implements PlayerInterface {
    private profile: Profile;

    constructor(profile: Profile) {
        this.profile = profile;
    }

    getProfile(): Profile {
        return this.profile;
    }

    getName(): string {
        return this.profile.name;
    }

    getId(): number {
        return this.profile.id;
    }
}
