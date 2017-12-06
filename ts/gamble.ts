interface Gamble{

  setPot(moneyBet: number);
  getPot():number;
  placeBet(moneyToBet: number);
  hasMoneyToMakeBet(moneyToBet: number):boolean;
  cashInWinnings();
}
