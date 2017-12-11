/// <reference path="User.ts"/>
/// <reference path="Craps.ts"/>
/// <reference path="CrapsConsole.ts"/>
/// <reference path="GoFishConsole.ts"/>

class Casino{

    craps: CrapsConsole;
    goFish: GoFishConsole;
    havePlayer:boolean=false;
////////
    inputElement:any;
    displayElement:any;
    nameInput:string;
    cashInput:number;

    initialize():void{
        this.displayElement=document.getElementById("display");
        updateDisplay("Create a player using the fields below");
        this.inputElement=document.getElementById("input");
        this.inputElement.innerHTML='<label>Name:</label><input type="text" name="name_input" id="name_input"></br>' +
                                    '<label>Cash:</label><input type="number" name="wallet_input" id="wallet_input"></br>' +
                                    '<input type="submit" value="Create Player" id="submit" onclick="casino.createPlayer()">';

    }
    finalize():void{
        this.inputElement.innerHTML= '<input type="text" name="user_input" id="user_input"> ' +
            '<input type="submit" value="Submit" onclick="craps.run()">';
        this.displayElement.innerText='';
    }
////////



    run():void{
        if (this.havePlayer){
            this.displayElement.innerHTML='';
            updateDisplay("Hello, "+user.name+". Welcome to the casino. You have $"+user.Wallet.getMoney().toFixed(2)+". Choose a game below.");
            this.inputElement.innerHTML='<input type="button" value="Craps" id="craps_button" onclick="casino.craps.run()"></br>'+
                                        '<input type="button" value="BlackJack" id="blackjack_button" onclick="casino.notImplemented()"></br>'+
                                        '<input type="button" value="GoFish" id="gofish_button" onclick="casino.notImplemented()"></br>';
                                        // '<input type="button" value="GoFish" id="gofish_button" onclick="casino.goFish.run()"></br>';
        }else{
            this.initialize();
        }
    }

    createPlayer():void{
        let nameAlias:any = document.getElementById("name_input");
        let cashAlias:any = document.getElementById("wallet_input");


        this.displayElement.innerText='';
        this.nameInput=nameAlias.value;
        this.cashInput=+(cashAlias.value);

        user=new User(this.nameInput, this.cashInput);
        this.havePlayer=true;
        this.craps=new CrapsConsole(user);
  //      this.goFish=new GoFishConsole(user);
        this.run();
    }

    notImplemented():void{
        updateDisplay("Sorry, that feature is not yet implemented");
    }

}