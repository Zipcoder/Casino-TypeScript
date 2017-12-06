///<reference path="Player.ts"/>

class Casino {
    private casinoPlayer : Player = new Player();
    private displayHTMLElement : any;
    private userInputHTMLElement : any;
    private lastUserInput : string;
    private greetingElement : any;
    private submitButtonHTMLElement : any;

    constructor() {
        this.displayHTMLElement = document.getElementById("display");
        this.userInputHTMLElement = document.getElementById("user_input");
        this.greetingElement = document.getElementById("greeting");
        this.submitButtonHTMLElement = document.getElementById("submit");
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
            this.displayHTMLElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            this.displayHTMLElement.innerHTML += message;
        }
    }

    private printWelcomeMessage() : void {
        this.appendToDisplay("Welcome to the Casino!", false);
    }

    public getUserName() : void {
        console.log("getUserName() function");
        let value : string = this.userInputHTMLElement.value;
        if (value.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
        }
        else {
            this.lastUserInput = value;
            this.appendToDisplay(this.lastUserInput, true);
            this.casinoPlayer.name = value;
            this.submitButtonHTMLElement.setAttribute("onClick", "casino.getUserAge()");
            this.appendToDisplay("What is your age?", true);
        }
    }

    public getUserAge() : void {
        console.log("getUserAge() function")
        let value : string = this.userInputHTMLElement.value;
        if (value.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
        }
        else {
            this.lastUserInput = value;
            this.appendToDisplay(this.lastUserInput, true);
            this.casinoPlayer.age = parseInt(value);
            this.submitButtonHTMLElement.setAttribute("onClick", "casino.getPlayerMoney()");
            this.appendToDisplay("How much money you got?", true);
        }
    }

    public getPlayerMoney() {
        console.log("getPlayerMoney() function");
        let money : string = this.userInputHTMLElement.value;
        if (money.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
        }
        else {
            this.lastUserInput = money;
            this.appendToDisplay(money, true);
            this.casinoPlayer.balance = parseInt(money);
        }
    }
}