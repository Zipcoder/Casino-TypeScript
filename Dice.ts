class Dice{
    numOfDice: number;

    constructor(numOfDice:number){
        this.numOfDice = numOfDice;
    }

    tossAndSum(){
        var sumOfToss: number = 0;
        for(var toss = 0; toss < this.numOfDice; toss++){
            sumOfToss+=Math.floor(Math.random()*6);
        }
        return sumOfToss;
    }
}