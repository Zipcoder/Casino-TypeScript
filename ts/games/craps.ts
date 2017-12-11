class Craps{
    display: any
    input: any
    button: any

    constructor(player: Player){
        this.display = document.getElementById("display");
        this.input = document.getElementById("text_input");
        this.button = document.getElementById("submit"); 
    }
    init (){
        document.getElementById("display").innerHTML = "Welcome to Craps!";
        this.button.value="Roll The Dice"
        this.button.setAttribute("onclick", "casino.craps.wonRound()")
        //this.input.hidden = true;
    }
    wonRound() {
        var win: number = 0;
        var lose: number = 0;
        var diceValue = Dice.getRandomInt(2, 12);
        document.getElementById("display").innerHTML += "<br>"+diceValue;
    
        if (diceValue === 7 || diceValue === 11){
            win = 1; 
            var rollWin: string = "You rolled " + diceValue + ". <br>You Win!";
            document.getElementById("display").innerHTML += "<br>"+rollWin;
        }
        else if(diceValue === 2 || diceValue === 3 || diceValue === 12){
            lose = 1;
            var rollLose: string = "You rolled " + diceValue + ". You Lose.";
            document.getElementById("display").innerHTML += "<br>"+rollLose;
        } 
        else {
            document.getElementById("display").innerHTML +="<br>"+ "Keep rolling until you hit the point number.";
            var secondRoll = Dice.getRandomInt(2 , 12);
            while (secondRoll != diceValue && secondRoll != 7){
                secondRoll = Dice.getRandomInt(2, 12);
            }
            if (secondRoll === 7){
                document.getElementById("display").innerHTML +="<br>"+ "You rolled a 7. You Lost!";
                lose = 1;
            }
            else {
                document.getElementById("display").innerHTML += "<br>"+"You rolled the point number " + secondRoll +"<br>You Win!";
                win = 1;
            }
        }
        return win > lose;
    }
}
