class GoFish {

    displayEle:any;
    userInputEle:any;

    constructor(){
        this.displayEle = document.getElementById("goFishConsole");
        this.userInputEle = document.getElementById("user_inputGoFish");
    }

    welcome(){
        this.displayEle.innerHTML += "Welcome to Go Fish";
    }

}
