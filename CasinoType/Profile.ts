class Profile {

private id: number;
private name: string;
private balance: number;

constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name =name;
    this.balance = balance;
}

public setId(id: number) {
    this.id = id;
}

public setName(name: string) {
    this.name = name;
}

public setBalance(balance: number) {
    this.balance = balance;
}

public getName() {
    return this.name;
}

public getId() {
    return this.id;
}

public get() {
    return this.balance;
}

}