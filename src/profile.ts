export class Profile {
    private _id: number;
    private _name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(balance: number) {
        this._balance = balance;
    }
}
