class Horse{
    name:string;
    baseSpeed:number;
    payout:number;
    raceSpeed:number;

    constructor(name:string, speed:number){
        this.name = name;
        this.baseSpeed = speed;
        this.payout = (3 - this.baseSpeed);
    }

    run():number{
        this.raceSpeed = (Math.random() * this.baseSpeed);
        console.log(this.name + " ran at " + this.raceSpeed);
        return this.raceSpeed;
    }    
}