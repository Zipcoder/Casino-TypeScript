class Player {
   
    private name: string;
    private wallet: number;
    private score: number;

    constructor(){
        this.name;
        this.wallet;
        this.score;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    getWallet(): number{
        return this.wallet
    }

    setWallet(wallet: number){
        this.wallet = wallet;
    }

    getScore(): number{
        return this.score;
    }

    setScore(score: number){
        this.score = score;
    }
}