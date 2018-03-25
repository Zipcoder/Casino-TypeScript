class Player implements PlayerInterface {
   
    
    private playerProfile: Profile;
    private hand: Card[];
    
    constructor(aProfile: Profile) {
        this.playerProfile = aProfile;
    }


   
    getProfile() : Profile {
        return this.playerProfile;
    }
    getName() : string {
        return this.playerProfile.getName;
    }
    getId() : number {
        return this.playerProfile.getId;
    }
    
}