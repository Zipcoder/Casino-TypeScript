class BlackJackConsole {


    public blackJackIntro() {
        this.clearHTMLDiv("buttonLogic");
        document.getElementById("display").innerHTML ="<br>Welcome to the BlackJack table!<br>"+
            "You have $"+casino.aPlayer.getMoney().toString();
        console.log(casino.aPlayer.getMoney().toString());
    }

    public takeBetButtonLogic() {
        document.getElementById("gameSelectionButtons").style.display = "none";
        this.createHTMLInputObject("buttonLogic", "Bet Amount", "newButtonInput");
        this.createHTMLButtonObject("buttonLogic","button",
            "Place Bet", "newButton", "blackJack.playerWins()");
    }

    public dealCardsButtonLogic() {
        this.clearHTMLDiv("buttonLogic");
        this.createHTMLButtonObject("buttonLogic", "button",
            "Deal Cards", "newButton", "blackJack.dealCards()");
    }

    public hitOrStayButtonLogic() {
        this.clearHTMLDiv("buttonLogic");
        this.createHTMLButtonObject("buttonLogic", "button",
            "Hit", "hitButton", "blackJack.hitLogic()");
        document.getElementById("hitButton").style.display = "inline";
        document.getElementById("hitButton").setAttribute('class', "btn btn-danger");

        this.createHTMLButtonObject("buttonLogic", "button",
            "Stay", "stayButton", "blackJack.stayLogic()");
        document.getElementById("stayButton").style.display = "inline";
    }

    public pressEnterToContinueButtonLogic() {
        this.clearHTMLDiv("buttonLogic");
        this.createHTMLButtonObject("buttonLogic", "button",
            "Press to Continue", "continueButton", "blackJack.dealerHitUntilFinished()");
    }

    public playAgainButtonLogic() {
        this.clearHTMLDiv("buttonLogic");
        this.createHTMLButtonObject("buttonLogic", "button",
            "Yes", "yesButton", "blackJack.playAgainLogic()");
        document.getElementById("yesButton").style.display = "inline";


        this.createHTMLButtonObject("buttonLogic", "button",
            "No", "noButton", "blackJack.playAgainLogic()");
        document.getElementById("noButton").style.display = "inline";
        document.getElementById("noButton").setAttribute('class', "btn btn-danger");
    }

    public backToMainMenuButtonLogic() {
        this.clearHTMLDiv("buttonLogic");
        document.getElementById("gameSelectionButtons").style.display = 'inline';
    }






    public createHTMLButtonObject(parentDiv, objectType, label, idName, method) {
        let parentHTMLDiv = document.getElementById(parentDiv);
        let newButton = document.createElement(objectType);
        newButton.innerText = label;
        newButton.setAttribute('class', "btn btn-primary");
        newButton.setAttribute('id', idName);
        newButton.setAttribute('onclick', method);
        newButton.setAttribute('style', "display: block");
        parentHTMLDiv.appendChild(newButton);
    }

    public createHTMLInputObject(parentDiv, labelText, inputId) {
        let parentHTMLDiv = document.getElementById(parentDiv);
        let newLabel = document.createElement("label");
        let newInput = document.createElement("input");
        newLabel.innerText = labelText;
        newInput.setAttribute('id', inputId);
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('style', "display: block");
        parentHTMLDiv.appendChild(newLabel);
        parentHTMLDiv.appendChild(newInput);
    }

    public clearHTMLDiv(divToClear) {
        document.getElementById(divToClear).innerHTML = "";
    }
}