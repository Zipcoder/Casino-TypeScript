class Profile{
    
    private id:string;
    private name: string;
    private balance: number;

    constructor (profileId:string, username: any, balance:number){
        this.id = profileId;
        this.name = username;
        this.balance = balance;
    
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getBalance(){
        return this.balance;
    }

}

var username = document.getElementById("username");
console.log(username);
