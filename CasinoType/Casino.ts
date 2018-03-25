class Casino {
    
    
    
    constructor(){
        this.chooseGame = this.chooseGame.bind(this);
        
    }
    

    start() {
        UI.display("Thank you for coming to my Blackjack Casino")
        UI.display("What game would you like to play? Blackjack, Blackjack, Blackjack or Blackjack");
        UI.button.addEventListener("click", this.chooseGame);
    }

     chooseGame(): void {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Blackjack") {
            
           // Blackjack.start();
    
        } else {
            UI.button.addEventListener("click", this.chooseGame);
        }

    }
    

    
}