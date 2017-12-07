///<reference path="Casino.ts"/>
/// <reference path="craps.ts"/>
/// <reference path="Player.ts"/>
// let casino = new Casino();
// casino.startCasino();

let brian = new Player("brian",100,21);

let craps = new Craps(brian);
craps.init();
