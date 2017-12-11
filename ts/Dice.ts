class Dice {
    private min: number;
    private max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

public roll(): number {
    return Math.floor(Math.random()*this.max)+this.min;
}
}