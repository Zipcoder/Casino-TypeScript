export class UI {
    static Instance: any;

    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static lastInput: any;
    private static instance: UI;

    private constructor() {

        UI.button.addEventListener("click", (e: Event) => { UI.lastInput = UI.userInput.value });
        UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });
    }

    static display (input: any): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen (): void {
        this.window.innerText = '';
    }

    public static getInstance(): UI {
        return this.instance || (this.instance = new UI());
    }

    public static getlastInput(): any {
        return this.lastInput;
    }

}

const UIInstance = UI.Instance;
var App = new App();
App.main();