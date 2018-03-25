constructor(){
    this.chooseGame = this.chooseGame.bind(this);
}

start() {
    UI.display("What game do you want to play?");
    UI.display("Black Jack or Go Fish?");
    UI.button.addEventListener("click", this.chooseGame);
}

 chooseGame(): void {
    UI.button.removeEventListener("click", this.chooseGame);
    if (UI.lastInput === "Black Jack") {
        
        BlackJack.start();

    }
    else if (UI.lastInput === "Go Fish") {
        GoFish.start();

    }
    else {
        UI.button.addEventListener("click", this.chooseGame);
    }
}