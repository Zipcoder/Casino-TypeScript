class Profile{

    private userId: number;
    private userName: string;
    private balance: number;
    
    constructor(userId: number, userName:string,balance:number){
        this.userId = userId;
        this.userName = userName;
        this.balance = balance;
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