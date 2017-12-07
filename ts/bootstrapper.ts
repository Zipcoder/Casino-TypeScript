///<reference path="Casino.ts"/>
/// <reference path="craps.ts"/>
/// <reference path="Player.ts"/>

let casino = new Casino();
casino.startCasino();

let craps = new Craps(casino.casinoPlayer);
