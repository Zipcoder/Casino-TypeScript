class IO {
    
    public static displayEle:any = document.getElementById("display");
    public static userInputEle:any = document.getElementById("user_input");
    public static moneyInputEle: any = document.getElementById("money_input");

    public static display(displayString: string): void {
        this.displayEle.innerHTML += "<br/>"+displayString;
    }

    public static getStringInput(prompt: string): string{
        this.display(prompt);
        return this.userInputEle.value;
    }

    public static getNumberInput(prompt: string): number{
        this.display(prompt);
        return this.moneyInputEle.value;
    }
}