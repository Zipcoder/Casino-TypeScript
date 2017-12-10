class Casino {
    aPlayer: Player;
    private submitButton;
    private gameSelectionButtons;



    constructor() {
        this.submitButton = document.getElementById("generalSubmitButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
    }

    public createPlayer(): void {
        let playerName: string = (<HTMLInputElement>document.getElementById("playerName")).value;
        let playerMoney: string = (<HTMLInputElement>document.getElementById("playerMoney")).value;

        if (playerName.match("[a-z]+") && playerMoney.match("\\d+")) {
            document.getElementById("newUserForm").style.display = "none";

            this.submitButton.style.display = "none";
            this.gameSelectionButtons.style.display = "inline";



            this.aPlayer = new Player(playerName, parseFloat(playerMoney));
            document.getElementById("playersName").innerHTML = "Player's Name: " + this.aPlayer.getName();
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.aPlayer.getMoney();
            //currentUserInfo.hidden = false;

            console.log("Got this info from user: "+this.aPlayer.getName()+" "+this.aPlayer.getMoney());
            WebPageInteraction.getInstance().displayToWebpage("Your account has been created, "+playerName+"!<br>");

            WebPageInteraction.getInstance().displayToWebpage(menuCreation.casinoTitle());

        }
        else {
            WebPageInteraction.getInstance().displayToWebpage("Please enter a valid name or amount of money.<br>");
        }
    };
}