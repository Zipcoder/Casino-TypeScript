class Profile {
    constructor(name, chips) {
        this.name = name;
        this.chips = chips;
    }
    get getName() {
        return this.name;
    }
    get getChips() {
        return this.chips;
    }
    set setName(v) {
        this.name = v;
    }
    addChips(bet) {
        this.chips += bet;
    }
    subtractChips(bet) {
        this.chips -= bet;
    }
}
//# sourceMappingURL=Profile.js.map