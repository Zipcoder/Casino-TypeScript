class MainMenu{
    mainPlayer: Player;
    newCrapsGame = new Craps(this.mainPlayer);
    constructor(){
        this.chooseGame = this.chooseGame.bind(this);
    }

    start() {
        UI.display("What game do you want to play?");
        UI.display("Craps or Craps?");
        UI.submitButton.addEventListener("click", this.chooseGame);
    }

     chooseGame(): void {
        UI.submitButton.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Craps") {
           this.newCrapsGame.startGame();
    
        } else {
            UI.display("Too bad you're playing Craps!");
            this.newCrapsGame.startGame();
        }
    }


}