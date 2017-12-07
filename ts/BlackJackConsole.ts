///<reference path="BlackJack.ts"/>
///<reference path="User.ts"/>

//import NumberFormat = Intl.NumberFormat;
import {BlackJack} from "./BlackJack";
import {User} from "./User";


public class BlackJackConsole {

    private game: BlackJack = new BlackJack();
    private player: User;
    private potBet: number;
    //private Random rando=new Random();
    //private defaultFormat: NumberFormat;

    public constructor(user) {
        this.player = user;
    }

    // public run() : void{
    //     welcomePlayer();
    //     do {
    //         game = new BlackJack();
    //         playerBets();
    //         System.out.println(game.toString());
    //         playerHitOrStayCycle();
    //         game.dealerHitUntilFinished();
    //         System.out.println(game.toString());
    //         determineWinOrLoss();
    //     }while(game.play(getStringInput("Continue playing? [Y/N] ")));
    //
    // }

    private determineWinOrLoss() : void{
        if (this.game.playerWins()){
            System.out.println("You win! ");
            System.out.println(this.game.finalTableDisplay());
            settlePlayerWon();
        }
        else{
            System.out.println("You lose. ");
            System.out.println(this.game.finalTableDisplay());
            settlePlayerLost();
        }
    }

    private settlePlayerLost() : void{
        this.potBet = this.game.emptyPot();
        System.out.println("You have " + this.player.getWallet().getMoney()+" " +
            "in your wallet.");
    }

    private settlePlayerWon() : void{
        this.player.getWallet().addMoney(game.emptyPot());
        System.out.println("You have "+defaultFormat.format(player.getWallet().getMoney())+" " +
            "in your wallet.");
    }

    private playerHitOrStayCycle() : void{
        while (this.game.getPlayerScore()<21 &&
        "Y".equalsIgnoreCase(getStringInput("Hit? [Y/N] "))){
            game.playerHit();
            System.out.println(game.toString());
        }
    }

    private void playerBets(){
        potBet=getPositiveDoubleInput("You have "+defaultFormat.format(player.getWallet().getMoney())+". " +
            " How much do you wish to bet? ");
        game.takeBet(player.getWallet().takeOutMoney(potBet));
        System.out.println("Your opponent matches your bet of "+defaultFormat.format(potBet)+". ");
        game.takeBet(potBet);
    }

    private void welcomePlayer(){
        System.out.println("Hello, "+player.getName()+". Welcome to the "+game.getClass().getSimpleName()+" table.");
    }
}
