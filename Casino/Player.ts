import Wallet from "./Wallet";

class Player {
    private name: string;
    private age: number;
    private wallet: Wallet;

    constructor(name: string, age: number, balance: number) {
        this.name = name;
        this.age = age;
        this.wallet = new Wallet(balance);
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getBalance(): number {
        return this.wallet.getBalance();
    }
}

export default Player;