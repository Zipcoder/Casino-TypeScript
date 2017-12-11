
class CrapsButtonLogic {
    private primaryButton: any;
    private gameSelectionButtons: any;
    private nameOfLabel: any;
    private userInputGroup: any;
    private generalSubmitButton: any;
    private playersMoney: any;

    constructor() {
        this.primaryButton = document.getElementById("primaryButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
        this.nameOfLabel = document.getElementById("nameOfLabel");
        this.userInputGroup = document.getElementById("userInputGroup");
        this.generalSubmitButton = document.getElementById("generalSubmitButton");
        //this.playersMoney = document.getElementById("playersMoney");
    }

    public crapsIntro() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        document.getElementById("display").innerHTML ="<br>Welcome to the BlackJack table!<br>"+
            "You have $"+casino.aPlayer.getMoney().toString();
        console.log(casino.aPlayer.getMoney().toString());
    }

    public takeBetButtonLogic() {
        document.getElementById("gameSelectionButtons").style.display = "none";
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLInputObject("buttonLogic", "Bet Amount", "newButtonInput");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic","button",
            "Place Bet", "newButton", "blackJack.takeBet()");
    }

    public rollDiceButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Roll Dice", "newButton", "blackJack.dealCards()");
    }

    public playAgainButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Yes", "yesButton", "blackJack.playAgainLogic()");
        document.getElementById("yesButton").style.display = "inline";


        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "No", "noButton", "blackJack.playAgainLogic()");
        document.getElementById("noButton").style.display = "inline";
        document.getElementById("noButton").setAttribute('class', "btn btn-danger");
    }

    public backToMainMenuButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        document.getElementById("gameSelectionButtons").style.display = 'inline';
    }


    // public takeBetButtonLogic() {
    //     this.nameOfLabel.innerText = "Bet Amount";
    //     this.userInputGroup.style.display = "inline";
    //     this.gameSelectionButtons.style.display = "none";
    //     this.generalSubmitButton.style.display = "block";
    //     this.primaryButton.innerText = "Submit";
    //     this.primaryButton.style.display = "inline";
    //     this.primaryButton.setAttribute("onclick", "craps.getBetAmount()");
    //     this.userInputGroup.style.display = 'inline';
    // }

    // public getBetAmountButtonLogic(aPlayer: Player) {
    //     this.playersMoney.innerHTML = "Player's Money: $" + aPlayer.getMoney();
    //     this.userInputGroup.style.display = "none";
    //     this.primaryButton.innerHTML = "Press To Roll";
    //     this.primaryButton.setAttribute("onclick", "craps.pressEnterToRoll()");
    //
    // }


}