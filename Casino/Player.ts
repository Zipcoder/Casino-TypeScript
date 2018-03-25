class Player implements PlayerInterface {
    
    private playerProfile: Profile;

    constructor(profile: Profile){
        this.playerProfile = profile;
    }
    getProfile(): Profile {
        return this.playerProfile;
    }
    getName(): string {
       return this.playerProfile.getName;
    }
    getId(): number {
        return this.playerProfile.getId;
    }

    getBalance(): number{
        return this.playerProfile.getBalance;
    }
}