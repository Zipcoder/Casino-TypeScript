class Player{
   
    private name: string;
    private wallet: number;
    private score: number;

    constructor(name: string, wallet: number){
        this.name = name
        this.wallet = wallet;
        this.score = 0;
    }

    get Name(): string{
        return this.name;
    }

    get Wallet(): number{
        return this.wallet
    }

    set Wallet(wallet: number){
        this.wallet = wallet;
    }

    get Score(): number{
        return this.score;
    }

    set Score(score: number){
        this.score = score;
    }
}