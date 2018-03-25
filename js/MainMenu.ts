
class MainMenu{
    displayElement = document.getElementById("display");
    public menuStart(){
        var test: string = getInput();
        var playingGame: boolean = true;
        while(playingGame){
            this.displayElement.textContent = "Please enter your name or exit to quit";
            var userInput = getInput();
            if(userInput == "exit"){
                playingGame = false;
                break;
            } 
            var userProfile: Profile = new Profile(userInput);
            

        }
    }
}