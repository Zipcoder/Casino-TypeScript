class Profile {

private id: number;
private name: string;
private balance: number;

public casinoProfiles:Profile[];

constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name =name;
    this.balance = balance;
}

set setId(id: number) {
    this.id = id;
}

set setName(name: string) {
    this.name = name;
}

set setBalance(balance: number) {
    this.balance = balance;
}

get getName() {
    return this.name;
}

get getId() {
    return this.id;
}

get getBalance() {
    return this.balance;
}

addPlayer(aplayer:Profile) : void {
    this.casinoProfiles.push(aplayer);
}

}