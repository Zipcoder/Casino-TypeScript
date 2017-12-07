class Casino{
    
        displayEle:any;
        userInputEle:any;
        listener:any;
        name:string;
        money:number;
        player:any;
    
        constructor(){
            this.displayEle = document.getElementById("displayCasino");
            this.userInputEle = document.getElementById("user_inputCasino");
            this.listener = document.getElementById("submitCasino");
        }
    
        welcome(){
            this.displayEle.innerHTML += "<br/>Welcome To Chewy's Casino!!!<br/>What is your name?";        
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

        displayOptions(){
            this.displayEle.innerHTML += "Player: " + this.player.getName() + "<br/>Money: " + this.player.getBalance() + "<br/>" +
            "What would you like to do?";
            this.displayEle.innerHTML += "<br/><button> <a href = \"index.html\">Play BlackJack</a> </button>";

        }
    
    }