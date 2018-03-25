class App{
    constructor(){
        this.chooseGame = this.chooseGame.bind(this);
    }

    start(){
        UI.display("Do you want to play BlackJack?");
        UI.button.addEventListener("click", this.chooseGame);
    }

    chooseGame(): void{
        UI.button.removeEventListener("click", this.chooseGame);
        if(UI.Input == "BlackJack"){
//            BlackJack.start();
        }
        else{
            
            UI.button.addEventListener("click", this.chooseGame);
        }
    }
}


class UI{
    static input = <HTMLInputElement>document.getElementById("user_input");
    static displayWindow = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    private static _instance: UI;
    static _lastInput: any;

    private constructor(){
        UI.button.addEventListener("click", (e:Event)=> UI.input.value = "");
        UI.button.addEventListener("click", (e:Event)=> UI._lastInput = UI.input.value);
    }

     static display(input:string):void{
         this.displayWindow.innerText = "";
     }

     static clear():void{
         this.displayWindow.innerText = "";
     }

     public static get Instance(): UI{
         return this._instance || (this._instance = new UI());
     }
     public static get Input():any{
         return this._lastInput;
     }
}

var x = UI.Instance;
UI.display;
