class Display{

    static displayEle: any = document.getElementById("display");

    static currentStep: String = "enterCasino";

    static print(input: String){
        this.displayEle.innerHTML += input + "<br/><br/>";
    }

    static setCurrentStep(step : String){
        this.currentStep = step;
    }
}