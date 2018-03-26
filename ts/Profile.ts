class Profile{
    private name : string; 
    private accountBalance : number;
    private id : number;
    constructor (name : string, accountBalance : number, id : number){
        this.name = name;
        this.accountBalance = accountBalance;
        this.id= id
    }

    public getName (){
        return this.name;
    }
    public getAccountBalance(){
        return this.accountBalance;
    }
    public getId(){
        return this.id;
    }

    public setName(name : string){
        this.name = name;
    }
    public setAccountBalance(accountBalance : number){
        this.accountBalance = accountBalance;
    }
    public setId(id : number){
        this.id =id;
    }

}