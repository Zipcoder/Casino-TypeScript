class Display {

    static displayEle: any = document.getElementById("display");

    static currentStep: String = "enterCasino";

    static print(input: String) {
        this.displayEle.innerHTML += input + "<br/><br/>";
    }




    static setCurrentStep(step: String) {
        this.currentStep = step;
    }

    static hideUserInputButtonAndTextBox() {
        document.getElementById("button").style.display = "none";
        document.getElementById("user_input").style.display = "none";
    }

    static showUserInputButtonAndTextBox() {
        document.getElementById("button").style.display = "";
        document.getElementById("user_input").style.display = "";
    }

    static hideRollButton() {
        document.getElementById("rollButton").style.display = "none";
    }

    static showRollButton() {
        document.getElementById("rollButton").style.display = "";
    }

    static showCasinoMenu() {
        document.getElementById("leave_stay").style.display = "";
    }

    static hideCasinoMenu() {
        document.getElementById("leave_stay").style.display = "none";
    }

    static showGameChoiceMenu() {
        document.getElementById("gametype").style.display = "";
    }

    static hideGameChoiceMenu() {
        document.getElementById("gametype").style.display = "none";
    }

    static hideDiceGameMenu() {
        document.getElementById("diceGame").style.display = "none";
    }

    static shoeDiceGameMenu() {
        document.getElementById("diceGame").style.display = "";
    }

    static hideCardGameMenu() {
        document.getElementById("cardGame").style.display = "none";
    }

    static showCardGameMenu() {
        document.getElementById("cardGame").style.display = "";
    }

    static showDrinks() {
        document.getElementById("drinks").style.display = "";
    }

    static hideDrinks() {
        document.getElementById("drinks").style.display = "none";
    }

    static showBud() {
        document.getElementById("bud").style.display = "";
    }

    static showCorona() {
        document.getElementById("corona").style.display = "";
    }

    static showCran() {
        document.getElementById("cran").style.display = "";
    }

    static showHien() {
        document.getElementById("hien").style.display = "";
    }

    static showLong() {
        document.getElementById("long").style.display = "";
    }

    static showMargarita() {
        document.getElementById("marg").style.display = "";
    }

    static showOldFasion() {
        document.getElementById("old").style.display = "";
    }

    static showRedWine() {
        document.getElementById("red").style.display = "";
    }

    static showWhiteWine() {
        document.getElementById("white").style.display = "";
    }

    static showHitStayButtons() {
        document.getElementById("hit").style.display = "";
        document.getElementById("stay").style.display = "";
    }

    static hideHitStayButtons() {
        document.getElementById("hit").style.display = "none";
        document.getElementById("stay").style.display = "none";
    }


    static showPlayAgainBJ(){
        document.getElementById("leaveBJ").style.display = "";
    }

    static hidePlayAgainBJ(){
        document.getElementById("leaveBJ").style.display = "none";
    }


    static clearInnerHTMLDisplay(){
            document.getElementById("display").innerHTML = "";

        }
    }
