class Player implements PlayerInterface {
    id: number;
    name: string;
    profile: Profile;
    constructor(id: number, name: string, balance: number){
    this.name = name;
    this.id = id;
    this.profile =  new Profile(this.id, this.name, balance);
    }


    getProfile(): Profile {
        return this.profile;
    }
    getName(): String {
        return this.name;
    }
    getId(): number {
        return this.id;
    }
}