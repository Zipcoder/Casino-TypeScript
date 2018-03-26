class CoinFlip{
    constructor(){}
    flipCoin(){
        let flipResult: number = Math.floor(Math.random() * 2);
        if (flipResult == 1) {
            addToDisplayText('Heads!');
        } else {
            addToDisplayText('Tails!');
        }
    }
}