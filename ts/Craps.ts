/// <reference path="Gamble.ts"/>
/// <reference path="Game.ts"/>

class CrapPointPair {
    a:number;
    b:number;
    text:string;

    constructor(a:number, b:number, text:string) {
        this.a = a;
        this.b = b;
        this.text=text;
    }

    isInPair(passed:number):boolean {
        return (this.a==passed || this.b==passed);
    }

}

class Craps implements Gamble, Game {

    pointPairs:Array<CrapPointPair> =
        [new CrapPointPair(6, 8, "6-8"),
         new CrapPointPair(5, 9, "5-9"),
         new CrapPointPair(10, 4, "10-4")];
    pair:CrapPointPair;
    dice:Dice<number>;
    numberRolled:number;
    mainPot:MoneyContainer;
    sidePot:MoneyContainer;
    isPlayerTurn:boolean;
    point:number;

    constructor(){
        let twoToTwelve:Array<number>;
        for (let i:number=2; i<13; i++){
            twoToTwelve.push(i);
        }
        this.dice = new Dice(twoToTwelve);
        this.mainPot=new MoneyContainer();
        this.sidePot=new MoneyContainer();
        this.numberRolled=0;
        this.point=0;
        this.determineFirstRoller();
    }

    //Add to pot
    takeBet(bet:number):void {
        this.mainPot.addMoney(bet);
    }
    takeSideBet(bet:number):void{
        this.sidePot.addMoney(bet);
    }

    //remove some from pot
    settleBet(winnings:number):number {
        return (this.mainPot.takeOutMoney(winnings));
    }
    settleSideBet(winnings:number):number{
    return (this.sidePot.takeOutMoney(winnings));
    }

    //Take all from pot
    emptyPot():number{
        return this.mainPot.takeAllMoney();
    }
    emptySidePot():number{
        return this.sidePot.takeAllMoney();
    }


    determineFirstRoller():void{
        //Player vs House, highest goes first, house wins tie
        this.isPlayerTurn=(this.dice.rollDie()-this.dice.rollDie()>0);
    }
    changePlayerTurn():void{
        this.isPlayerTurn=!this.isPlayerTurn;
        this.resetTurn();
    }
    resetTurn():void{
        this.numberRolled=0;
        this.point=0;
    }

    getPlayerTurn():boolean{
        return this.isPlayerTurn;
    }

    getNumberRolled():number{
        return this.numberRolled;
    }
    getSidePot():MoneyContainer{
        return this.sidePot;
    }
    getMainPot():MoneyContainer{
        return this.mainPot;
    }

    initialThrow():number{
        //returns -1 if 2/3/12
        // 1 if 7/11,
        // 0 if point set
        this.numberRolled = this.dice.rollDie();

        switch (this.numberRolled){
            case  2:
            case  3:
            case 12:{
                return -1;
            }
            case  7:
            case 11:{
                return 1;
            }
            default:{
                this.point=this.numberRolled;

                for (let i=0; i<this.pointPairs.length; i++)
                {
                    if (this.pointPairs[i].isInPair(this.point)){
                        this.pair=this.pointPairs[i];
                        break;
                    }
                }
                return 0;
            }
        }

    }
    secondaryThrow():number{//returns -1 if crapped out,
        //returns 1 if point met
        //returns 0 if nothing met
        //returns any other number if pair met
        this.numberRolled=this.dice.rollDie();

        if (this.numberRolled==this.point){//Won round
            return 1;
        } else if (this.numberRolled==7)//Lost round
        {
            return -1;
        } else if (this.pair.isInPair(this.numberRolled)){//Won sideBet
            return this.numberRolled;
        } else{
            return 0;//Neutral.
        }
    }

    toString():string{

        let returnMe:string="";

        if (this.isPlayerTurn){
            returnMe+="It is your turn\n";
        } else{
            returnMe+="It is your opponent's turn\n";
        }

        if (this.point==0){
            returnMe+="Point has not been set, and so we do not have a pair to side bet on\n";
        } else{
            returnMe+="Point is "+this.point+" and we are making side bets on "+this.pair.text+"\n";
        }

        if (this.numberRolled!=0){
            returnMe+="Last roll was "+this.numberRolled+"\n";
        }
        else{
            returnMe+="Nobody has rolled yet\n";
        }

        returnMe+="Main pot is $"+this.mainPot.getMoney()+"\n";
        returnMe+="Side pot is $"+this.sidePot.getMoney()+"\n";

        return returnMe;
    }
    play(userInput:string):boolean {
        return ("Y"==userInput.toUpperCase());
    }
}