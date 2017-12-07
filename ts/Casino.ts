///<reference path="Player.ts"/>
/// <reference path="Craps.ts" />


class Casino {
    private _casinoPlayer: Player = new Player();
    private _displayHTMLElement: any;
    private _userInputHTMLElement: any;
    private _greetingElement: any;
    private _submitButtonHTMLElement: any;

    constructor() {
        this._displayHTMLElement = document.getElementById("display");
        this._userInputHTMLElement = document.getElementById("user_input");
        this._greetingElement = document.getElementById("greeting");
        this._submitButtonHTMLElement = document.getElementById("submit");
    }

    public startCasino(): void {
        this.printWelcomeMessage();
        this.appendToDisplay("What is your name?", true);
    }

    updateScroll(): void {
        this._displayHTMLElement.scrollTop = this._displayHTMLElement.scrollHeight;
    }

    private static lineBreak(): string {
        return "<br />";
    }

    private appendToDisplay(message: string, lineBreak: boolean): void {
        if (lineBreak) {
            this._displayHTMLElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            this._displayHTMLElement.innerHTML += message;
        }
        this.updateScroll();
    }

    private appendToGreeting(message: string, lineBreak: boolean): void {
        if (lineBreak) {
            this._greetingElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            this._greetingElement.innerHTML += message;
        }
    }

    private printWelcomeMessage(): void {
        this.appendToDisplay("Welcome to the Casino!", false);
    }

    public getUserName(): void {
        console.log("getUserName() function");
        let userName: string = this.userInputHTMLElement.value;
        userName = this.validateUserInputString(userName);
        if (userName != null) {
            this.setPlayerName(userName);
            this.appendToDisplay("What is your age?", true);
            this.setOnClickAttributeOfSubmitButton("getUserAge()");
        }
    }

    public getUserAge(): void {
        console.log("getUserAge() function")
        let ageString: string = this.userInputHTMLElement.value;
        if (ageString != null) {
            if (this.validateAge(ageString)) {
                this.setPlayerAge(parseFloat(ageString));
                this.appendToDisplay("How much money do you have?", true);
                this.setOnClickAttributeOfSubmitButton("getUserMoney()");
            }
        }
    }

    private validateAge(inputString: string): boolean {
        if (isNaN(parseInt(inputString))) {
            this.appendToDisplay("Not an age.", true);
            return false;
        }
        return true; 
    }

    public getUserMoney(): void {
        console.log("getUserMoney() function");
        let moneyString: string = this.userInputHTMLElement.value;
        if (moneyString != null) {
            if (this.validateMoney(moneyString)) {
                let moneyNumber: number = parseFloat(moneyString);
                this.setPlayerMoney(moneyNumber);
                this.setOnClickAttributeOfSubmitButton("getGameToBePlayed()");
                this.appendToDisplay("What game would you like to play?", true);
                this.appendToDisplay("1) Craps", true);
                this.appendToDisplay("2) Blackjack", true);
                this.appendToDisplay("3) Go Fish", true);
                this.createUserGreeting();   
            }
        }
    }

    private validateMoney(inputString : string) : boolean {
        if (isNaN(parseFloat(inputString))) {
            this.appendToDisplay("Not a number.", true);
            return false;
        }
        let moneyNumber : number = parseFloat(inputString);
        if (moneyNumber >= 100) {
            return true;
        }
        else {
            this.appendToDisplay("You must have at least $100 dollars to play in the casino.", true);
            return false;
        }
    }

    private createUserGreeting(): void {
        this.appendToGreeting("<b>Name: </b>" + this._casinoPlayer.name.substring(0,1).toUpperCase() + this._casinoPlayer.name.substring(1), false);
        this.appendToGreeting(" <b>Age: </b>" + this._casinoPlayer.age, false);
        this.appendToGreeting(" <b>Money: </b> $" + this._casinoPlayer.balance.toFixed(2), false);
    }


    public getGameToBePlayed(): void {
        console.log("getGameToBePlayed() function");
        let gameChosenString: string = this.userInputHTMLElement.value;
        let gameChosenNumber: number = parseInt(gameChosenString);
        if (gameChosenNumber == 1) {
            craps.init();
        }
        else if (gameChosenNumber == 2) {

        }
        else if (gameChosenNumber == 3) {

        }
        else {
            this.appendToDisplay("Please choose a valid game number.", true);
        }
        this.clearUserInput();

    }

    private setPlayerName(name: string): void {
        this._casinoPlayer.name = name;
    }

    private setPlayerAge(age: number): void {
        this._casinoPlayer.age = age;
    }

    private setPlayerMoney(amount: number): void {
        this._casinoPlayer.balance = amount;
    }

    private clearUserInput(): void {
        this._userInputHTMLElement.value = "";
    }

    private setOnClickAttributeOfSubmitButton(value: string): void {
        let newOnClickValue: string = "casino.";
        newOnClickValue += value;
        this.submitButtonHTMLElement.setAttribute("OnClick", newOnClickValue);
        this.clearUserInput();
    }

    private validateUserInputString(value: string): string {
        if (value.length === 0) {
            this.appendToDisplay("Please make sure you typed something in.", true);
            return null;
        }
        else {
            return value;
        }
    }

    get casinoPlayer(): Player {
        return this._casinoPlayer;
    }

    set casinoPlayer(value: Player) {
        this._casinoPlayer = value;
    }

    get displayHTMLElement(): any {
        return this._displayHTMLElement;
    }

    set displayHTMLElement(value: any) {
        this._displayHTMLElement = value;
    }

    get userInputHTMLElement(): any {
        return this._userInputHTMLElement;
    }

    set userInputHTMLElement(value: any) {
        this._userInputHTMLElement = value;
    }

    get greetingElement(): any {
        return this._greetingElement;
    }

    set greetingElement(value: any) {
        this._greetingElement = value;
    }

    get submitButtonHTMLElement(): any {
        return this._submitButtonHTMLElement;
    }

    set submitButtonHTMLElement(value: any) {
        this._submitButtonHTMLElement = value;
    }
}
