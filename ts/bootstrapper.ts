///<reference path="Casino.ts"/>
/// <reference path="craps.ts"/>
/// <reference path="Player.ts"/>

let brian = new Player("Brian",21,500);
let craps = new Craps(brian);
craps.init();
