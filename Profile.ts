class Profile{
    
    private id:string;
    private name: string;
    private balance: number;

    constructor (profileId:string, username: any, balance:number){
        this.id = profileId;
        this.name = username;
        this.balance = balance;
    
    }

}

