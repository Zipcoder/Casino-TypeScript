class UI_Singleton {
    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: UI_Singleton;

    private constructor() {
        UI_Singleton.button.addEventListener("click", (e: Event) => { UI_Singleton._lastInput = UI_Singleton.userInput.value });
        UI_Singleton.button.addEventListener("click", (e: Event) => { UI_Singleton.userInput.value = '' });
    }

    static display(input: string): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen(): void {
        this.window.innerText = '';
    }

    public static get Instance(): UI_Singleton {
        return this._instance || (this._instance = new UI_Singleton());
    }

    public static get lastInput(): any {
        return this._lastInput;
    }

}

class Singleton {
    static anyVariable: any = "anyValue";
    private static _INSTANCE: Singleton;

    private constructor() {
    }

    static someMethod(input: string): void {
    }

    static someMethod2(): any {
        return null;
    }

    public static getInstance(): Singleton {
        return this._INSTANCE;
    }

    public static getField(): any {
        return this.anyVariable;
    }

}
