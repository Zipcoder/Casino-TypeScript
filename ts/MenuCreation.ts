class MenuCreation{
    menuTitle(): string {
        let welcomeString =
            "Welcome to the Casino!<br>"+
            "===============================================<br>"+
            "Please enter your username and amount of money below.<br>";
        return welcomeString;
    }

    casinoTitle(): string {
        let outputString =
            "Please select a casino game to play!<br>"+
            "===============================================<br>";
        return outputString;
    }



    // createNewPlayer(): void {
    //     let playerName: string = prompt("Please enter a username.");
    //     let amountOfMoney: number = parseInt(prompt("Please enter the amount of money you have."));
    //
    //     let aPlayer: Player = new Player(playerName, amountOfMoney);
    //
    //     console.log(aPlayer);
    //
    //     Casino.setAPlayer(aPlayer);
    //
    //
    //     console.log("Your account has been created.");
    //     //CasinoMenu.INSTANCE.display();
    // }
}
