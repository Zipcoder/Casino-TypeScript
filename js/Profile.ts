class Profile{

    private userId: number;
    private userName: string;
    private balance: number;
    
    constructor(userName:string){
        this.userId = Math.random() * 1000;
        this.userName = userName;
        this.balance = 500;
    }

    public getUserId(): number{
        return this.userId;
    }

    public getuserName(): string{
        return this.userName;
    }

    public getBalance(): number{
        return this.balance;
    }

}