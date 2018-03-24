class Player implements PlayerInterface {
    
    private playerProfile: Profile;
    
    constructorI(name: string){
        this.playerProfile = new Profile(Math.random() *1000, name, 500);
    }

    getProfile(): Profile {
        return this.playerProfile;
    }
    getName(): string {
        return this.playerProfile.getuserName();
    }
    getId(): number {
        return this.playerProfile.getUserId();
    }
}