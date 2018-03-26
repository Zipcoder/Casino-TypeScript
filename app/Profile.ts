class Profile{ 
id: number = 0;
name: string = "";
balance: number = 0;
    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    getProfileId(){
        return this.id;
    }

    getUserName(){
        return this.name;
    }

    getBalance(){
        return this.balance;
    }
}