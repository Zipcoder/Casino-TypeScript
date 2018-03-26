namespace Casino{
    class Player implements PlayerInterface {
        private playerProfile: Profile;

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
        getName(): string {
            return this.playerProfile.getUserName();
        }
        getId(): number {
            return this.playerProfile.getUserId();
        }

    
    }
}