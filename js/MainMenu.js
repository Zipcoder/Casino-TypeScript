class MainMenu {
    constructor() {
        this.getNameEvent = (e) => this.getName();
        this.getFundsEvent = (e) => this.getInitialFunds();
        this.gameChoice = (e) => this.getGameChoice();
    }
    profileSetup() {
        btn.addEventListener('click', this.getNameEvent, { once: true });
        addToDisplayText('Please enter your name');
    }
    getName() {
        this.name = userInput;
        clearInput();
        btn.addEventListener('click', this.getFundsEvent, { once: true });
        addToDisplayText('Hello  ' + this.name + '\nHow many chips would you like?');
    }
    getInitialFunds() {
        this.initialFunds = parseInt(userInput);
        clearInput();
        this.profile = new Profile(this.name, this.initialFunds);
        btn.addEventListener('click', this.gameChoice, { once: true });
        addToDisplayText('Alright, you\'ll start at ' + this.initialFunds);
        addToDisplayText('Which game would you like to play? We\'ve got\n - BlackJack\n - No Secret Text Adventures');
    }
    getGameChoice() {
        let choice = userInput;
        if (choice.toLowerCase() == 'blackjack') {
            this.blackJackTurn();
        }
        else if (choice.toLowerCase() == 'secret') {
            addToDisplayText('ah shit i forgot to add a text game');
            clearInput();
        }
        else {
            clearInput();
            addToDisplayText('Invalid input, please try again.');
            addToDisplayText('Which game would you like to play? We\'ve got\n - BlackJack');
            btn.addEventListener('click', this.gameChoice, { once: true });
        }
    }
    blackJackTurn() {
        let blackjack = new BlackJack(this.profile);
        clearInput();
        blackjack.updateInput();
        btn.addEventListener("click", (e) => blackjack.updateInput());
    }
}
//# sourceMappingURL=MainMenu.js.map