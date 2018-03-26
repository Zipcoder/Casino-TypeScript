namespace Casino{
    class Player implements PlayerInterface {
        pivate playerProfile: Profile;

        //constructor
        constructor(playerProfile: Profile){
            this.playerProfile = playerProfile;
        }

    //represents a player within the context of a game
    //should cease to exist upon termination of a game. - HOW?

    //player should implement playerinterface - done
    //player objecs should be created within the context of a game. 

        getProfile(): Profile {
            return this.playerProfile;
        }
        getName(): String {
            return this.playerProfile.getName();
        }
        getId(): number {
            return this.playerProfile.getId();
        }

    
    }
}