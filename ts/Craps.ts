/// <reference path="Gamble.ts"/>
/// <reference path="Game.ts"/>

class Craps implements Gamble, Game {

    private NumberFormat defaultFormat;
    private CrapPointPair pair;
    private Dice<Integer> dice;
    private int numberRolled;
    private MoneyContainer mainPot;
    private MoneyContainer sidePot;
    private boolean isPlayerTurn;
    private int point;

    public Craps(){
        ArrayList<Integer> twoToTwelve = new ArrayList<>();
        for (int i=2; i<13; i++){
            twoToTwelve.add(i);
        }
        defaultFormat=NumberFormat.getCurrencyInstance();
        dice = new Dice(twoToTwelve);
        mainPot=new MoneyContainer();
        sidePot=new MoneyContainer();
        numberRolled=0;
        point=0;
        determineFirstRoller();
    }

    //Add to pot
    @Override
    public void takeBet(Double bet) {
    takeBet(bet, mainPot);
}
private void takeBet(Double bet, MoneyContainer moneyContainer) {
    moneyContainer.addMoney(bet);
}
public void takeSideBet(Double bet){
    takeBet(bet, sidePot);
}

//remove some from pot
@Override
public Double settleBet(Double winnings) {
    return (settleBet(winnings, mainPot));
}
private Double settleBet(Double winnings, MoneyContainer moneyContainer){
    return (moneyContainer.takeOutMoney(winnings));
}
public Double settleSideBet(Double winnings){
    return (settleBet(winnings, sidePot));
}

//Take all from pot
public Double emptyPot(){
    return emptyPot(mainPot);
}
private Double emptyPot(MoneyContainer moneyContainer){
    return moneyContainer.takeAllMoney();
}
public Double emptySidePot(){
    return emptyPot(sidePot);
}


public void determineFirstRoller(){
    isPlayerTurn=(dice.rollDie()-dice.rollDie()>0);//Player vs House, highest goes first, house wins tie
}
public void changePlayerTurn(){
    isPlayerTurn=!isPlayerTurn;
    resetTurn();
}
public void resetTurn() {
    numberRolled=0;
    point=0;
}

public boolean getPlayerTurn(){return isPlayerTurn;}

public int getNumberRolled(){return numberRolled;}
public MoneyContainer getSidePot() {
    return sidePot;
}
public MoneyContainer getMainPot() {
    return mainPot;
}

public Integer initialThrow(){ //returns -1 if 2/3/12
    // 1 if 7/11,
    // 0 if point set
    numberRolled = dice.rollDie();

    switch (numberRolled){
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
            point=numberRolled;
            for (CrapPointPair p : CrapPointPair.values()){
                if (p.isInPair(point)){
                    pair=p;
                }
            }
            return 0;
        }
    }

}
public Integer secondaryThrow(){//returns -1 if crapped out,
    //returns 1 if point met
    //returns 0 if nothing met
    //returns any other number if pair met
    numberRolled=dice.rollDie();

    if (numberRolled==point){//Won round
        return 1;
    } else if (numberRolled==7)//Lost round
    {
        return -1;
    } else if (pair.isInPair(numberRolled)){//Won sideBet
        return numberRolled;
    } else{
        return 0;//Neutral.
    }
}

@Override
public String toString(){
    String returnMe="";

    if (isPlayerTurn){
        returnMe+="It is your turn\n";
    } else{
        returnMe+="It is your opponent's turn\n";
    }

    if (point==0){
        returnMe+="Point has not been set, and so we do not have a pair to side bet on\n";
    } else{
        returnMe+="Point is "+point+" and we are making side bets on "+pair.text+"\n";
    }

    if (numberRolled!=0){
        returnMe+="Last roll was "+numberRolled+"\n";
    }
    else{
        returnMe+="Nobody has rolled yet\n";
    }

    returnMe+="Main pot is "+defaultFormat.format(mainPot.getMoney())+"\n";
    returnMe+="Side pot is "+defaultFormat.format(sidePot.getMoney())+"\n";


    return returnMe;
}
@Override
public boolean play(String userInput) {
    return ("Y".equalsIgnoreCase(userInput));
}

private enum CrapPointPair {
    sixEight(6, 8, "6-8"),
    fiveNine(5, 9, "5-9"),
    tenFour(10, 4, "10-4");

int a;
int b;
String text;

CrapPointPair(int a, int b, String text) {
    this.a = a;
    this.b = b;
    this.text=text;
}

boolean isInPair(int passed) {
    return (this.a==passed || this.b==passed);
}

}



}