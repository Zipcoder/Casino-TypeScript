namespace Casino {
    export class Player implements PlayerInterface {

        private playerProfile: Profile;

        constructorI(playerProfile: Profile) {
            this.playerProfile = playerProfile;
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
}