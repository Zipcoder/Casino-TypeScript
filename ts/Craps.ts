class Craps{
            displayEle:any;
            userInputEle:any;
            betInput:any;
            point:number;
            
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
                
                let bet:number = parseInt(this.betInput.value);
                this.displayEle.innerHTML +=bet+"</br";
            }

            roll(){
                let rollOne = this.callRoll();
                if(rollOne == 2 || rollOne == 3 || rollOne == 12){
                    this.displayEle.innerHTML += rollOne+" You lose </br>"; 
                    
                 }
                 else if(rollOne == 7 || rollOne == 11){
                     this.displayEle.innerHTML += rollOne+" You Won </br>";
                 }
                 else{
                    this.displayEle.innerHTML += rollOne + "<br/>";
                    this.displayEle.innerHTML += "You need a " +rollOne +" to win the game .Press RollTwo <br/>";
                    this.point = rollOne;
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
                    console.log("next roll point is Seven"+rollTwo);
                    this.displayEle.innerHTML += "You got "+rollTwo + " You lose the game<br/>";
                }
                else if(rollTwo == this.point){
                    this.displayEle.innerHTML += "You got "+ rollTwo+" You Won </br>";
                }
                else{
                    this.displayEle.innerHTML += "next roll point "+rollTwo+". You need "+this.point+" to win</br>"
                }
                
            }
            callRoll():number{
                let roll = Math.floor(Math.random()*(12-2+1)+2);
                return roll;
            }
        }

    