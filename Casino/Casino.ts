import BlackjackPlayer from "./BlackjackPlayer";

class Casino {
    isPlaying: Boolean = true;
    player: BlackjackPlayer;
    displayElement: HTMLElement = document.getElementById("display");
    submitButton: HTMLElement = document.getElementById("submitButton");

    start() {
        var firstName: string = document.getElementById("first").innerHTML;
        var lastName: string = document.getElementById("last").innerHTML;
        var balance: number = parseInt(document.getElementById("balance").innerHTML);
        this.submitButton.addEventListener("click", (e: Event) => this.setupUserProfile(firstName, lastName, balance), {once:true});
    }
    setupUserProfile(firstName: string, lastName: string, balance: number) {
        this.player = new BlackjackPlayer(firstName, lastName, balance);
        this.displayElement.innerHTML += "Hello " + this.player.getName();
    }
}