class Casino {
    public static casinoPlayer : Player;
    private static displayHTMLElement : any;

    constructor() {
        Casino.displayHTMLElement = document.getElementById("display");
    }

    public startCasino(): void {
        Casino.displayHTMLElement.innerHTML = "Welcome to the Casino!";
    }

}