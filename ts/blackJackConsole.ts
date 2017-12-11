/// <reference path="blackJackPlayer.ts" />
/// <reference path="blackJack.ts" />

let blackJackGame = new BlackJack();

class BlackJackConsole{

    printPlay() {
        Display.clearInnerHTMLDisplay();
        Display.print("Your are now at the Black Jack Table." +
            "<br/>What is your name?")
        document.getElementById("button").setAttribute("onclick", "blackJack.getUserName()");
        Display.showUserInputButtonAndTextBox();
    }

    getUserName(){
        blackJackGame.blackJackPlayer.setName(UserInput.userInput.value);
        Display.print(blackJackGame.blackJackPlayer.getName() + " you currently have " + blackJackGame.blackJackPlayer.getMoney() + " dollars."
        +"<br/>How much would you like to bet?")
        UserInput.clearTextBox();
        document.getElementById("button").setAttribute("onclick", "blackJack.getUserBet()")
    }

    getUserBet(){
        blackJackGame.placeBet(UserInput.userInput.value);
        Display.print(blackJackGame.blackJackPlayer.getName()  + " your current bet is " + blackJackGame.getPot());
        UserInput.clearTextBox();
        this.play();
    }

    play() {
        Display.hideUserInputButtonAndTextBox();
        blackJackGame.dealBlackJackHand();
        Display.showHitStayButtons();
        Display.print("Your current hand is " + blackJackGame.blackJackPlayer.getHand());
        Display.print("Dealer is showing " + blackJackGame.dealer.hand[0]);
        Display.print("Would you like to hit or stay?");    
    }

    hitOrStay(){
            blackJackGame.hit();
            Display.print(blackJackGame.blackJackPlayer.getName() + " your hand is now " + blackJackGame.blackJackPlayer.getHand())
    }

    checkScores(){
        blackJackGame.dealerHitorStay();
        Display.print(blackJackGame.blackJackPlayer.getName() + " your score is " + blackJackGame.blackJackPlayer.getHandTotal());
        Display.print("Dealers hand is " + blackJackGame.dealer.getHand());
        Display.print("Dealer score is " + blackJackGame.dealer.getHandTotal());
        Display.hideHitStayButtons();
        if(blackJackGame.playerWins() === true){
            Display.print(blackJackGame.blackJackPlayer.getName() + " you win. You now have " + blackJackGame.blackJackPlayer.getMoney() + " dollars.")
            Display.print("Would you like to play again?")
        } else{
            Display.print("House wins. You now have " + blackJackGame.blackJackPlayer.getMoney() + " dollars.")
            Display.print("Would you like to play again?")            
        }
        Display.showPlayAgainBJ();
    }

    stayOrLeave(){
        Display.clearInnerHTMLDisplay();        
        switch(UserInput.leaveBJ.value){
            case"1":
                Display.print("What would you like to do now?<br/>Please choose from below.")
                Display.showCardGameMenu();
                Display.hidePlayAgainBJ();
                break;
            case"2":
                Display.print(blackJackGame.blackJackPlayer.getName() + " you have " + blackJackGame.blackJackPlayer.getMoney() + " dollars.")
                Display.print("How much would you like to bet?")
                Display.showUserInputButtonAndTextBox();
                document.getElementById("button").setAttribute("onclick", "blackJack.getUserBet()")
                Display.hidePlayAgainBJ();
                this.resetGame();                
                break;
        }
        UserInput.clearLeaveBJ();
    }

    resetGame(){
        blackJackGame.blackJackDeck.removeAllCards();
        blackJackGame.blackJackDeck.populate();
        blackJackGame.blackJackDeck.shuffle();
        blackJackGame.blackJackPlayer.removeAllCards();
        blackJackGame.dealer.removeAllCards();
    }
}
