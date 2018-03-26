//global constant array filled with x amount of each symbol
//would have put inside in class if it could be final and static
//in java public WheelSymbol[] WheelSymbolSeed;
const symbolSeed: WheelSymbol[] = [
    WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,
    WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,
    WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club,
    WheelSymbol.Spade, WheelSymbol.Spade, WheelSymbol.Spade,
    WheelSymbol.Cherry,
]

class Wheel{
    //creates unique wheels
symbols: WheelSymbol[];
interval: number;
id: number;
delegate: WheelDelegate;
private idx: number;

constructor(delegate: WheelDelegate, id: number, interval: number){
    this.delegate = delegate;
    this.id;
    this.interval = interval;
    this.idx = 0;
    this.symbols = symbolSeed.slice(0);
    this.shuffle();
}



//inside a class no need to use function keyword
shuffle(): void { 
    for(let i:number = this.symbols.length - 1; i >0; i--){
        const j = Math.floor(Math.random() * (i+1));
        //destructuring assignment-two variables values can be swapped in one destructuring expression
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
        [this.symbols[i], this.symbols[j]] = [this.symbols[j], this.symbols[i]];
    }
}

advance(): void{
    //implement
    //check if current index is greater than whell length
    //if yes stop runninng
    //if no tell delegate the current instance of wheel has changed symbol
    //and report symbol
}

}






