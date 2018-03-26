class Player {
    name: string;

    public constructor () {
        this.name = name;
    }

    public get getName (): string {
        return this.name;
    }

    public set setName(usernameInput: string){
        this.name = usernameInput;
    }
}