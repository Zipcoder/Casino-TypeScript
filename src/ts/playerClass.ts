class Player implements PlayerInterface {
    
    player: Profile;

    getName(): string {
        return this.player.name;
    }
    getProfile(): Profile {
        return this.player;
    }
    getId(): number {
        return this.player.id;
    }

    
}