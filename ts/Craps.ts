class Craps{
            displayEle:any;
            userInputEle:any;
            betInput:any;
            point:number;
            bet:number;
            player:Player;

            constructor(player:Player){
                this.displayEle = document.getElementById("displayCraps");
                this.userInputEle = document.getElementById("user_input");
                this.betInput = document.getElementById("betAmount");
                this.player = player;
            }
        
            init(){
                this.welcomePlayer();
            }

            welcomePlayer(){
                this.displayEle.innerHTML +="<br/>Hello "+this.player.getName()+" you have $" + this.player.getBalance() +" in your account." ;
            }
            play(){
                (<HTMLInputElement> document.getElementById("roll")).disabled = false;
                (<HTMLInputElement> document.getElementById("rollTwo")).disabled = false;
                this.bet = parseInt(this.betInput.value);
                if(this.bet < this.player.getBalance() || this.betInput.value.length == 0){
                    if(this.betInput.value.length == 0){
                        this.displayEle.innerHTML +="</br> Please enter your bet amount </br>"
                    }
                    else{
                        this.displayEle.innerHTML +="</br> Your bet amount is "+this.bet+"</br";
                    }
                }
                else{
                    this.displayEle.innerHTML +="</br> You don't have enough balance </br>";
                }
                    
            }

            roll(){
                let rollOne = this.callRoll();
                if(rollOne == 2 || rollOne == 3 || rollOne == 12){ 
                    this.player.setBalance(this.player.getBalance()-this.bet);
                    this.displayEle.innerHTML += "</br>"+rollOne+" You lose and your balance is :"
                    +this.player.getBalance()+ "</br>";
                    (<HTMLInputElement> document.getElementById("roll")).disabled = true;
                    
                 }
                 else if(rollOne == 7 || rollOne == 11){
                    this.player.setBalance(this.player.getBalance()+this.bet);
                     this.displayEle.innerHTML += "</br>"+rollOne+" You Won and your balance is :"
                        +this.player.getBalance()+ "</br>";
                    (<HTMLInputElement> document.getElementById("roll")).disabled = true;
                 }
                 else{
                    this.displayEle.innerHTML += "</br>"+rollOne + "<br/>";
                    this.displayEle.innerHTML += "</br>"+"You need a " +rollOne +" to win the game .Press RollTwo <br/>";
                    this.point = rollOne;
                    (<HTMLInputElement> document.getElementById("roll")).disabled = true;
                 }
                 
                }
            setPoint(){
                let setPlayerpoint = this.point;
                return setPlayerpoint;
            }
            checkRollTwo(){
                let rollTwo = this.callRoll();
        
                console.log("next roll point "+rollTwo);
                if(rollTwo == 7){
                    this.player.setBalance(this.player.getBalance()-this.bet);
                    console.log("next roll point is Seven"+rollTwo);
                    this.displayEle.innerHTML += "</br>"+"You got "+rollTwo + " You lose the game and your balance is "+
                    this.player.getBalance()+"<br/>";
                    (<HTMLInputElement> document.getElementById("rollTwo")).disabled = true;
                }
                else if(rollTwo == this.point){
                    this.player.setBalance(this.player.getBalance()+this.bet);
                    this.displayEle.innerHTML += "</br>"+"You got "+ rollTwo+" You Won and your balance is "+
                    this.player.getBalance()+"<br/>";
                    (<HTMLInputElement> document.getElementById("rollTwo")).disabled = true;
                }
                else{
                    this.displayEle.innerHTML += "</br>You got  "+rollTwo+". You need "+this.point+" to win</br>"
                }
                
            }
            callRoll():number{
                let roll = Math.floor(Math.random()*(12-2+1)+2);
                return roll;
            }
        }

    