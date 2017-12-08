class Player {
    private _name: string;
    private _balance: number;
    private _age: number;

    //private playerHand : new Array<>();

    public constructor(name?: string, balance?: number, age?: number) {
        this._name = name;
        this._balance = balance;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

}
