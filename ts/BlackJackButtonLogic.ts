///<reference path="HtmlObjectCreation.ts"/>

class BlackJackButtonLogic {

    public blackJackIntro() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        document.getElementById("display").innerHTML ="<br>Welcome to the BlackJack table!<br>"+
            "You have $"+casino.aPlayer.getMoney().toString();
        console.log(casino.aPlayer.getMoney().toString());
    }

    public takeBetButtonLogic() {
        document.getElementById("gameSelectionButtons").style.display = "none";
        HtmlObjectCreation.createHTMLInputObject("buttonLogic", "Bet Amount", "newButtonInput");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic","button",
            "Place Bet", "newButton", "blackJack.playerWins()");
    }

    public dealCardsButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Deal Cards", "newButton", "blackJack.dealCards()");
    }

    public hitOrStayButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Hit", "hitButton", "blackJack.hitLogic()");
        document.getElementById("hitButton").style.display = "inline";
        document.getElementById("hitButton").setAttribute('class', "btn btn-danger");

        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Stay", "stayButton", "blackJack.stayLogic()");
        document.getElementById("stayButton").style.display = "inline";
    }

    public pressEnterToContinueButtonLogic() {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Press to Continue", "continueButton", "blackJack.dealerHitUntilFinished()");
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
}