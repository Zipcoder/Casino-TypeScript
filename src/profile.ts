export class Profile {
    private _id: number;
    private _name: string;
    private _chips: number;

    constructor(id: number, name: string, chips: number) {
        this._id = id;
        this._name = name;
        this._chips = chips;
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

    get chips(): number {
        return this._chips;
    }

    set chips(chips: number) {
        this._chips = chips;
    }
}
