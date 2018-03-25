class Profile{
   private id: number;
   private name: string;
   private balance: number;

   public listOfProfiles: Profile[];
    
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    get getName(){
        return this.name;
    }

    get getId(){
        return this.id;
    }

    get getBalance(){
        return this.balance;
    }

    set setId(id){
        this.id = id;
    }

    set setName(name){
        this.name = name;
    }

    set setBalance(balance){
        this.balance = balance;
    }

    public addProfile(profile: Profile): void{
        this.listOfProfiles.push(profile);
    }
    
}