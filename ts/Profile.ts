class Profile {
    private name:string;
    private chips:number;
    constructor(name:string, chips:number) {
        this.name = name;
        this.chips = chips;
    }

    
    public get getName() : string {
        return this.name;
    }

    public get getChips() : number {
        return this.chips; 
    }
    
    
    public set setName(v : string) {
        this.name = v;
    }

    public addChips(bet:number) {
        this.chips += bet;
    }
    
    public subtractChips(bet:number) {
        this.chips -= bet;
    }
    
}