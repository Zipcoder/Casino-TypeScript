class UserInterface {
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public window: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: string;
    // private static _instance: UI;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e:Event) => console.log(this._lastInput));
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.chooseGame = this.chooseGame.bind(this);
    }

    display(input: string): void {
        this.window.innerText += input + '\n';
    }

    clearScreen(): void {
        this.window.innerText = '';
    }

    // public static get Instance(): UI {
    //     return this._instance || (this._instance = new UI());
    // }

    lastInput(): string {
        return this._lastInput;
    }

    start() {
        this.display("What game do you want to play?");
        this.display("Black Jack or Go Fish?");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }
    
    chooseGame(): void {
        this.button.removeEventListener("click", (e:Event) => this.chooseGame());
        if (this.lastInput() === "Black Jack") {
            this.display("Black Jack worked");
        }
        else if (this.lastInput() === "Go Fish") {
            this.display("Go Fish worked");
        }
        else {
            this.button.addEventListener("click", (e:Event) => this.chooseGame());
        }
    }

}

let UI: UserInterface = new UserInterface();
UI.start();
