class Dice<E> {

    private sides:Array<E>;


    public constructor (sides:Array<E>){
        this.sides=sides;
    }

    public getSides():Array<E>{
        return this.sides;
    }

    public rollDie(): E{

        return this.sides[this.getRandomInt(0, this.sides.length)];
    }

    public getRandomInt(min, max):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
