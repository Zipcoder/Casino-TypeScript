class Player implements PlayerInterface {
    getProfile(): Profile {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getId(): number {
        throw new Error("Method not implemented.");
    }
    
    public cards: Card[] = [];
    public stacks:Card[] = [];

    
}