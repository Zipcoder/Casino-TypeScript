class UserInput{

    static userInput: any = document.getElementById("user_input");
    static casinoMenuResponse: any = document.getElementById("leave_stay");
    static gameTypeChoice: any = document.getElementById("gametype");
    static chooseCardGame: any = document.getElementById("cardGame");
    static chooseDiceGame: any = document.getElementById("diceGame");
    static chooseDrink: any = document.getElementById("drinks");
    static hitOrStay: any = document.getElementById("hit");
    static stay: any = document.getElementById("stay");
    static leaveBJ: any = document.getElementById("leaveBJ");

    static clearLeaveBJ(){
        this.leaveBJ.value = "";
    }

    static clearStay(){
        this.stay.value = "";
    }

    static clearTextBox() : void {
        this.userInput.value = "";
    }

    static clearCasinoMenuResponse(){
        this.casinoMenuResponse.value = "";
    }

    static clearGameTypeChoice(){
        this.gameTypeChoice.value = "";
    }

    static clearChooseCardGame(){
        this.chooseCardGame.value = "";
    }

    static clearDiceGame(){
        this.chooseDiceGame.value = "";
    }

    static clearDrinks(){
        this.chooseDrink.value = "";
    }

    static clearHitOrStay(){
        this.hitOrStay.value = "";
    }
}