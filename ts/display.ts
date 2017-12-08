class Display{

    static displayEle: any = document.getElementById("display");

    static currentStep: String = "enterCasino";

    static print(input: String){
        this.displayEle.innerHTML += input + "<br/><br/>";
    }

    static setCurrentStep(step : String){
        this.currentStep = step;
    }

    static hideUserInputButtonAndTextBox(){
        document.getElementById("button").style.display = "none";
        document.getElementById("user_input").style.display = "none";
    }

    static showUserInputButtonAndTextBox(){
        document.getElementById("button").style.display = "";
        document.getElementById("user_input").style.display = "";
    }

    static hideRollButton(){
        document.getElementById("rollButton").style.display = "none";
    }
    static showRollButton(){
        document.getElementById("rollButton").style.display = "";
    }
}