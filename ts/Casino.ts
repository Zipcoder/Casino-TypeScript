///<reference path="Player.ts"/>

class Casino {
    private static casinoPlayer : Player = new Player();
    private static displayHTMLElement : any;
    private static userInputHTMLElement : any;
    private static lastUserInput : string;
    private static greetingElement : any;
    private static submitButtonHTMLElement :any;

    constructor() {
        Casino.displayHTMLElement = document.getElementById("display");
        Casino.userInputHTMLElement = document.getElementById("user_input");
        Casino.greetingElement = document.getElementById("greeting");
        Casino.submitButtonHTMLElement = document.getElementById("submit");
    }

    public startCasino(): void {
        this.printWelcomeMessage();
        this.appendToDisplay("What is your name?", true);
    }

    private static lineBreak() : string {
        return "<br />";
    }

    private appendToDisplay(message : string, lineBreak : boolean) : void {
        if (lineBreak) {
            Casino.displayHTMLElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            Casino.displayHTMLElement.innerHTML += message;
        }
    }

    private printWelcomeMessage() : void {
        this.appendToDisplay("Welcome to the Casino!", false);
    }

    public onSubmitButtonClick() : void {
        console.log("Hello from getUserName()");
        let value : string = Casino.userInputHTMLElement.value;
        if (value.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
            return null;
        }
        else {
            Casino.lastUserInput = value;
            this.appendToDisplay(Casino.lastUserInput, true);
            Casino.casinoPlayer.name = value;
        }
    }
}