///<reference path="HtmlObjectCreation.ts"/>


class MenuCreation{
    menuTitle(): string {
        let welcomeString =
            "Welcome to the Casino!<br>"+
            "===============================================<br>"+
            "Please enter your username and amount of money below.<br>";
        return welcomeString;
    }

    casinoTitle(): string {
        let outputString =
            "Please select a casino game to playCraps!<br>"+
            "===============================================<br>";
        return outputString;
    }

    public playAgainButtonLogic(method: string) {
        HtmlObjectCreation.clearHTMLDiv("buttonLogic");
        HtmlObjectCreation.createHTMLButtonObject("buttonLogic", "button",
            "Yes", "yesButton", "method");
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

    public backToMainMenu() {
        console.log("Going back to Main Menu");
        this.backToMainMenuButtonLogic();
        document.getElementById("display").innerHTML = menuCreation.casinoTitle();
    }
}
