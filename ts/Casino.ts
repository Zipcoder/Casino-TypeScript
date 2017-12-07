///<reference path="Player.ts"/>
/// <reference path="craps.ts" />


class Casino {
    private _casinoPlayer : Player = new Player();
    private _displayHTMLElement : any;
    private _userInputHTMLElement : any;
    private _greetingElement : any;
    private _submitButtonHTMLElement : any;

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

    private static lineBreak() : string {
        return "<br />";
    }

    private appendToDisplay(message : string, lineBreak : boolean) : void {
        if (lineBreak) {
            this._displayHTMLElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            this._displayHTMLElement.innerHTML += message;
        }
    }

    private appendToGreeting(message : string, lineBreak : boolean) : void {
        if (lineBreak) {
            this._greetingElement.innerHTML += Casino.lineBreak() + message;
        }
        else {
            this._greetingElement.innerHTML += message;
        }
    }

    private printWelcomeMessage() : void {
        this.appendToDisplay("Welcome to the Casino!", false);
    }

    public getUserName() : void {
        console.log("getUserName() function");
        let userName : string = this.userInputHTMLElement.value;
        userName = this.validateUserInputString(userName);
        if (userName != null) {
            this.setPlayerName(userName);
            this.appendToDisplay("What is your age?", true);
            this.setOnClickAttributeOfSubmitButton("getUserAge()");
        }
    }

    public getUserAge() : void {
        console.log("getUserAge() function")
        let ageString : string = this.userInputHTMLElement.value;
        if (ageString != null) {
            let ageNumber = parseInt(ageString);
            this.setPlayerAge(ageNumber);
            this.appendToDisplay("How much money do you have?", true);
            this.setOnClickAttributeOfSubmitButton("getUserMoney()");
        }
    }

    public getUserMoney() : void {
        console.log("getPlayerMoney() function");
        let moneyString : string = this.userInputHTMLElement.value;
        if (moneyString != null) {
            let moneyNumber : number = parseInt(moneyString);
            this.setPlayerMoney(moneyNumber);
            this.setOnClickAttributeOfSubmitButton("getGameToBePlayed()");
            this.appendToDisplay("What game would you like to play?", true);
            this.appendToDisplay("1) Craps", true);
            this.appendToDisplay("2) Blackjack", true);
            this.appendToDisplay("3) Go Fish", true);
            this.createUserGreeting();
        }
    }

    private createUserGreeting() : void {
        this.appendToGreeting("<b>Name: </b>" + this._casinoPlayer.name, false);
        this.appendToGreeting(" <b>Age:</b>" + this._casinoPlayer.age , false);
        this.appendToGreeting(" <b>Money:</b> " + this._casinoPlayer.balance, false);
    }
    

    public getGameToBePlayed() : void{
        console.log("getGameToBePlayed() function");
        let gameChosenString : string = this.userInputHTMLElement.value;
        let gameChosenNumber : number = parseInt(gameChosenString);
        if (gameChosenNumber == 1) {
            let craps = new Craps(this._casinoPlayer);
            craps.init();
        }
        else if (gameChosenNumber == 2) {

        }
        else if (gameChosenNumber == 3) {

        } 
        else {
            this.appendToDisplay("Please choose a valid game number.", true);
        }

    }

    private setPlayerName(name : string) : void {
        this._casinoPlayer.name = name;
    }

    private setPlayerAge(age : number) : void {
        this._casinoPlayer.age = age;
    }

    private setPlayerMoney(amount : number) : void {
        this._casinoPlayer.balance = amount;
    }

    private clearUserInput() : void {
        this._userInputHTMLElement.value = "";
    }

    private setOnClickAttributeOfSubmitButton(value : string) : void {
        let newOnClickValue : string = "casino.";
        newOnClickValue += value;
        this.submitButtonHTMLElement.setAttribute("OnClick", newOnClickValue);
        this.clearUserInput();
    }

    private validateUserInputString(value : string) : string {
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