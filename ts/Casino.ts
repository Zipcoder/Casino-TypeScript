class CasinoApp {
    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: CasinoApp;

    private constructor() {
        CasinoApp.button.addEventListener("click", (e: Event) => { CasinoApp._lastInput = CasinoApp.userInput.value });
        CasinoApp.button.addEventListener("click", (e: Event) => { CasinoApp.userInput.value = '' });
    }

    static display(input: string): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen(): void {
        this.window.innerText = '';
    }

    public static get Instance(): CasinoApp {
        return this._instance || (this._instance = new CasinoApp());
    }

    public static get lastInput(): any {
        return this._lastInput;
    }

   

}

class App{
    public static main(): void{
        CasinoApp.display("Welcome To KT Casino");
    }
}
const instance = CasinoApp.Instance;
App.main();
