// const symbolSeed: WheelSymbol[] = [
//     WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,          // 6 diamonds
//     WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,
//     WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,          // 6 diamonds
//     WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,
//     WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,                // 6 hearts
//     WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,
//     WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,                // 6 hearts
//     WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,
//     WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, // 4 clubs
//     WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, // 4 clubs
//     WheelSymbol.Spade, WheelSymbol.Spade, WheelSymbol.Spade,                // 3 spades
//     WheelSymbol.Spade, WheelSymbol.Spade, WheelSymbol.Spade,                // 3 spades
//     WheelSymbol.Cherry,                                                      // 1 cherry
//     WheelSymbol.Cherry                                                      // 1 cherry
// ];

const symbolSeed: WheelSymbol[] = [
    WheelSymbol.Diamond, WheelSymbol.Diamond, WheelSymbol.Diamond,
    WheelSymbol.Heart, WheelSymbol.Heart, WheelSymbol.Heart,
    WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, WheelSymbol.Club, // 4 clubs
    WheelSymbol.Spade, WheelSymbol.Spade, WheelSymbol.Spade,                // 3 spades
    WheelSymbol.Cherry,                                                      // 1 cherry
];

class Wheel {
    symbols: WheelSymbol[];
    interval: number;
    id: number;
    delegate: WheelDelegate;
    private idx: number;

    constructor(delegate: WheelDelegate, id: number, interval: number) {
        this.delegate = delegate;
        this.id = id;
        this.interval = interval;
        this.idx = 0;
        this.symbols = symbolSeed.slice(0);
        this.shuffle();
    }

    shuffle(): void {
        // shuffle symbols array https://stackoverflow.com/a/6274381
        for (let i:number = this.symbols.length - 1; i > 0; i--) {
            const j:number = Math.floor(Math.random() * (i + 1));
            [this.symbols[i], this.symbols[j]] = [this.symbols[j], this.symbols[i]];
        }
    }

    advance(): void {
        if (this.idx >= this.symbols.length) {
            this.idx = 0;
            this.delegate.wheelDidStop(this, this.symbols[this.symbols.length-1]);
            return;
        }
        const symbol: WheelSymbol = this.symbols[this.idx];
        this.idx++;
        setTimeout(():void => {
            this.delegate.wheelDidChangeSymbol(this, symbol);
        }, this.interval);
    }
}
