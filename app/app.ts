class app {

    public static main():void{
        UserInterfaceClass.display("Welcome to BlackJack!!!  Enter your name in the text field below the display window and click submit.");
    
    } 

}
class UserInterfaceClass {

    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: UserInterfaceClass

    private constructor() {
        UserInterfaceClass.button.addEventListener("click", (e: Event) => { UserInterfaceClass._lastInput = UserInterfaceClass.userInput.value });
        UserInterfaceClass.button.addEventListener("click", (e: Event) => { UserInterfaceClass.userInput.value = '' })
    }

    static display(input: string): void {
        this.window.innerText += input + '\n';
    }

    static clearScreen(): void {
        this.window.innerText = '';
    }

    public static get Instance(): UserInterfaceClass {
        return this._instance || (this._instance = new UserInterfaceClass());
    }

    public static get lastInput(): any {
        return this._lastInput;
    }
}
