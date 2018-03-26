class CoinFlip {
    constructor() { }
    flipCoin() {
        let flipResult = Math.floor(Math.random() * 2);
        if (flipResult == 1) {
            addToDisplayText('Heads!');
        }
        else {
            addToDisplayText('Tails!');
        }
    }
}
//# sourceMappingURL=CoinFlip.js.map