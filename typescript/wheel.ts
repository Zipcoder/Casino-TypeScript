class Wheel{
values: WheelSymbol[];
interval: number;

constructor(interval: number){
    this.interval = interval;

const shuffledSymbolSeed = function(): WheelSymbol[]{ 
    //create copy of the constant wheelsymbolseed
    let arrayCopy: WheelSymbol[] = WheelSymbolSeed;
    for(let i:number = arrayCopy.length - 1; i >0; i--){
        //pick random index
        const j = Math.floor(Math.random() * (i+1));
        //destructuring assignment-two variables values can be swapped in one destructuring expression
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
    }
    //reassign values with shuffled array
this.values = shuffledSymbolSeed();
}

}






