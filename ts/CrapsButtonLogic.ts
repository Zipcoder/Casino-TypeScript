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

    public takeBetButtonLogic() {
        this.nameOfLabel.innerText = "Bet Amount";
        this.userInputGroup.style.display = "inline";
        this.gameSelectionButtons.style.display = "none";
        this.generalSubmitButton.style.display = "block";
        this.primaryButton.innerText = "Submit";
        this.primaryButton.style.display = "inline";
        this.primaryButton.setAttribute("onclick", "craps.getBetAmount()");
        this.userInputGroup.style.display = 'inline';
    }

    // public getBetAmountButtonLogic(aPlayer: Player) {
    //     this.playersMoney.innerHTML = "Player's Money: $" + aPlayer.getMoney();
    //     this.userInputGroup.style.display = "none";
    //     this.primaryButton.innerHTML = "Press To Roll";
    //     this.primaryButton.setAttribute("onclick", "craps.pressEnterToRoll()");
    //
    // }


}