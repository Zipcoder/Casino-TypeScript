export class Profile {

    private _id: number;
    private _username: string;
    private _balance: number;
    

    constructor(theUsername: string, theBalance: number, theId: number) {
        this._username = theUsername;
        this._balance = theBalance;
        this._id = theId;
    }

    get id(): number {
        return this._id;
    }

    set id(newId: number) {
        this._id = newId;
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        this._username = newUsername;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(newBalance: number) {
        this._balance = newBalance;
    }

}