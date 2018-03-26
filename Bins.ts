class Bins{
    startingBound: number;
    endingBound = this.startingBound * 6;;
    rollSums = [];

    constructor(startingBound:number, endingBound:number, rollSums:any = []){
        this.startingBound = startingBound;
        this.endingBound = endingBound;
        this.rollSums = rollSums;
    }

    // incrementBins(value:number){
    //     this.rollSums[value] =this.rollSums[value]+1; 
    // }

}