class Player{
    private PlayerProfile : Profile;
    constructor(aProfile : Profile){
        this.PlayerProfile = aProfile;
    }
    public Player(){

    }
    public setProfile(aProfile : Profile){
        this.PlayerProfile = aProfile;
    }

    public getProfile(){
        return this.PlayerProfile;
    }
}