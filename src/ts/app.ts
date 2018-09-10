

namespace game{

export class UserInterface {
    
    war:War;
    blackJack:BlackJack;
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.chooseGame = this.chooseGame.bind(this);
        this.war = new War();
        this.blackJack = new BlackJack();
    }

    display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    clearScreen(): void {
        this.displayWindow.innerText = '';
    }

    lastInput(): any {
        return this._lastInput;
    }

    start() {
        this.display("Do you want to play? (yes/no)");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }
    
    chooseGame(): void {
        if (this.lastInput() === "yes") {
            this.button.removeEventListener("click",(e:Event)=>this.chooseGame());
            this.clearScreen();
            this.display("Let's Go To War!");
            this.button.addEventListener("click",(e:Event)=>this.war.start());
        
        }
        else if (this.lastInput() === "no") {
            this.clearScreen();
            this.display("Well fine then, be that way.  Bye.");

        }
        else {
            this.button.addEventListener("click", (e:Event) => this.chooseGame());

        }
    }

}

let UI: UserInterface = new UserInterface();
UI.start();

}