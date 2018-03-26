class Horse {
    constructor(name, speed) {
        this.name = name;
        this.baseSpeed = speed;
        this.payout = (3 - this.baseSpeed);
    }
    run() {
        this.raceSpeed = (Math.floor(Math.random() * 3) * this.baseSpeed);
        console.log(this.name + " ran at " + this.raceSpeed);
        return this.raceSpeed;
    }
}
//# sourceMappingURL=Horse.js.map