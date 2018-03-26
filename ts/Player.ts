class Player{
    private PlayerProfile : Profile;
    private playerHand : Hand;
    constructor(aProfile : Profile){
        this.PlayerProfile = aProfile;
    }
    public Player(){
        this.playerHand = new Hand();

    }
    public getHand(){
        return this.playerHand;
    }
    public setProfile(aProfile : Profile){
        this.PlayerProfile = aProfile;
    }

    public getProfile(){
        return this.PlayerProfile;
    }
}