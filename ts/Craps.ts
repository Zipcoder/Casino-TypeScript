//needs to extend DicePlayer and implement Game and Gamble
//need to make a pot in Gamble
//
// class Craps{
//     private point: number;
//     private pot: number = 0.0;
//     //DicePlayer crapsPlayer = new DicePlayer();
//
//     constructor(){
//         this.point = 0;
//         //die.rollDice();
//     }
//
//     getPoint(): number{
//         return this.point;
//     }
//
//     setPoint(point: number){
//         this.point = point;
//     }
//
//     getPot(): number {
//         return this.pot;
//     }
//
//     setPot(moneyToBet: number){
//         this.pot = moneyToBet;
//     }
//
//     placeBet(moneyToBet: number): number{
//         if (hasMoneyToMakeBet(moneyToBet)) {
//             setPot(moneyToBet);
//             Double tempMoney = crapsPlayer.getMoney();
//             crapsPlayer.setMoney(tempMoney - moneyToBet);
//             return 0;
//         } else {
//             System.out.println("You do not have enough money to make a bet! Your current balance is " + crapsPlayer.getMoney());
//             return 1;
//         }
//     }
//
//     hasMoneyToMakeBet(moneyToBet: number): boolean{
//         if (crapsPlayer.getMoney() < moneyToBet) {
//             return false;
//         }
//         return true;
//     }
//
//     cashInWinnings(){
//         crapsPlayer.setMoney(crapsPlayer.getMoney() + getPot() * 2);
//     }
//
//     firstRoll(): number{
//         if (die.diceTotal() == 7 || die.diceTotal() == 11) {
//             cashInWinnings();
//             System.out.println("You win!" + die.diceTotal());
//             return 0;
//
//         } else if (die.diceTotal() == 2 || die.diceTotal() == 3 || die.diceTotal() == 12) {
//             setPot(0.0);
//             System.out.println("You lose!" + die.diceTotal());
//             return 0;
//
//         } else {
//             point = die.diceTotal();
//             System.out.println("New target roll" + die.diceTotal());
//             return 1;
//         }
//     }
//
//     secondRoll(){
//         do {
//             die.rollDice();
//             if (die.diceTotal() == getPoint()) {
//                 cashInWinnings();
//                 System.out.println("You win!" + die.diceTotal());
//                 break;
//             } else if (die.diceTotal() == 7 || die.diceTotal() == 11) {
//                 setPot(0.0);
//                 System.out.println("You lose!" + die.diceTotal());
//                 break;
//             } else {
//                 System.out.println("Rolling again" + die.diceTotal());
//             }
//         } while (die.diceTotal() != getPoint());
//     }
//
//     play(){
//         String playAgain;
//         Double bet;
//
//         do {
//             Craps crapsGame = new Craps();
//             System.out.println("================================================================\n" +
//                     "Greetings player! Welcome to Basic AF Casino's version of Craps!\n " +
//                     "\t\t\tLets get started!\n" +
//                     "================================================================");
//
//             do {
//                 bet = ConsoleInput.getDoubleInput("How much would you like to bet?");
//                 crapsGame.placeBet(bet);
//             }while (placeBet(bet) == 1);
//
//
//             System.out.println("Your current bet is " + bet);
//             System.out.println("Let's get the dice rolling!");
//
//             if (crapsGame.firstRoll() == 1) {
//                 crapsGame.secondRoll();
//             }
//             playAgain = ConsoleInput.getStringInput("Would you like to play again? Yes or No");
//         } while (!playAgain.equals("no"));
//     }
// }