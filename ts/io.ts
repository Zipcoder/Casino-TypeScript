///<reference path="webPage.ts"/>

class IO {
    static displayEle: any = WebPage.getDisplayElement();
    static userInputEle: any = WebPage.getUserInputElement();

    public static display(displayString: string): void {
        this.displayEle.innerHTML += "<br / >"+displayString;
    }

    public static clear(): void {
        this.displayEle.innerHTML = "";
    }

    public static getStringInput(prompt: string): string {
        this.display(prompt);
        return this.userInputEle.value;
    }

    public static getNumberInput(prompt: string): number {
        let stringInput: string;
        let numberInput: number = null;
        do {
            stringInput = this.getStringInput(prompt);
            try {
                numberInput = Number(stringInput);
                return numberInput;
            } catch (IllegalArgumentException) {
                this.display("Not a valid amount.")
                ;
            }
        } while (true);
    }
}