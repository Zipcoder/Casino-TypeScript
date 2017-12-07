class Dice<E> {

    sides:Array<E>;


    constructor (sides:Array<E>){
        this.sides=sides;
    }

    get Sides():Array<E>{
        return this.sides;
    }

    rollDie(): E{

        return this.sides[this.getRandomInt(0, this.sides.length)];
    }

    getRandomInt(min, max):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
