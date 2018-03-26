class Wallet {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }

    add(amount: number) {
        this.balance += amount;
    }

    subtract(amount: number) {
        this.balance -= amount;
    }
}
export default Wallet;