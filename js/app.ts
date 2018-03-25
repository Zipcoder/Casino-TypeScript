class Startup {

    public static main(): void {
        var casino = new Casino();
        casino.start();
    }
}


class Casino {

    constructor(){}

    start() {
        UI.display("What game do you want to play?");
        UI.display("Black Jack or Go Fish?");
        UI.button.addEventListener("click", this.chooser);
    }

     chooseGame(): void {
        UI.button.removeEventListener("click", this.chooser);
        if (UI.lastInput === "Black Jack") {
            
            BlackJack.start();
    
        }
        else if (UI.lastInput === "Go Fish") {
            GoFish.start();
    
        }
        else {
            UI.button.addEventListener("click", this.chooser);
        }
    }

    chooser = this.chooseGame.bind(this);



}




class UI {
    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: UI;

    private constructor() {
        UI.button.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
        UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });

    }

    static display(input: string): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen(): void {
        this.window.innerText = '';
    }

    static getInput(): void {
        UI.button.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
        UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });

    }

    public static get Instance(): UI {
        return this._instance || (this._instance = new UI());
    }

    public static get lastInput(): any {
        return this._lastInput;

    }

}

class BlackJack {
    static start(): void {
        UI.clearScreen();
        UI.display("Black Jack");
    }
}

class GoFish {
    static start(): void {
        UI.clearScreen();
        UI.display("Go Fish");
    }
}

//var lastInput : any;    
const UIInstance = UI.Instance;
Startup.main();