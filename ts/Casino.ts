/// <reference path="Player.ts" />
/// <reference path="BlackJack.ts" />
/// <reference path="Craps.ts" />

class Casino{

        displayEle:any;
        userInputEle:any;
        listener:any;
        name:string;
        money:number;
        player:any;
        visibility:any;
        CasinoMain:any;
        BlackJackScreen: any;
        CrapsScreen: any;
        blackJack: BlackJack;
        craps: Craps;

        constructor(){
            this.displayEle = document.getElementById("displayCasino");
            this.userInputEle = document.getElementById("user_inputCasino");
            this.listener = document.getElementById("submitCasino");
            this.visibility = document.getElementById("buttonsArea");
            this.CasinoMain = document.getElementById("CasinoMain");
            this.BlackJackScreen = document.getElementById("blackJackMain");
            this.CrapsScreen = document.getElementById("mainCraps");
        }

        welcome(){
            this.displayEle.innerHTML += "Welcome To Grahmerro Casino!!!<br/>What is your name?";
        }

        getName(){
            this.name = this.userInputEle.value;
            if (this.name.length < 1){
                this.displayEle.innerHTML += "<br/>Invalid input. What is your name?";
                this.name = this.userInputEle.value;
            } else {
                this.displayEle.innerHTML += "<br/>Hello, " + this.name;
                this.listener.setAttribute("onClick", "casino.getMoney()");
                this.howMuchMoney();
            }
        }

        howMuchMoney(){
            this.displayEle.innerHTML += "<br/>How much money would you like to play with?";
        }

        getMoney(){
            this.money = this.userInputEle.value;
            this.createPlayer();
            this.displayOptions();
        }

        createPlayer(){
            this.player = new Player(this.name, this.money);
        }

        createBlackJackGame(){
            let dealer = new Player("Dealer", 1000);
            this.blackJack = new BlackJack(this.player, dealer);
            this.blackJack.init();
        }

        createCrapsGame(){
            this.craps = new Craps(this.player);
            this.craps.init();
        }

        displayOptions(){
            this.displayEle.innerHTML = "Player: " + this.player.getName() + "<br/>Money: " + this.player.getBalance() + "<br/>" +
                                         "<br/><br/><br/>What game would you like to play???<br/><br/><br/><br/><br/><br/>          <-------------------<br/>" +
                                         "<-------------------<br/>          <-------------------<br/>";

            this.changeButtonVisability();
        }

        changeButtonVisability(){
            this.visibility.removeAttribute("hidden");
            this.CrapsScreen.hidden = true;
            this.BlackJackScreen.hidden = true;
            this.CasinoMain.hidden = false;
        }

        callPlay(){
            this.craps.play();
        }

        callRoll(){
            this.craps.roll();
        }

        callRollTwo(){
            this.craps.checkRollTwo();
        }

        callPlaceBet(){
            this.blackJack.placeBet();
        }
        callHit(){
            this.blackJack.hit();
        }
        callStay(){
            this.blackJack.stay();
        }
        callBJPlayAgain(){
            this.blackJack.playAgain();
        }

    }
