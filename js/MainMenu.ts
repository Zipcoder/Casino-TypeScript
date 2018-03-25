namespace Casino {
    export class MainMenu {
        displayElement: HTMLElement = document.getElementById("display");
        submitButton: HTMLElement = document.getElementById("submit_button");
        private userProfile: Profile;

        public menuStart() {
            this.displayElement.innerHTML = "Please enter your name";
            this.submitButton.addEventListener("click",(e: Event) => this.createProfile());
        }

        public createProfile(){
            this.submitButton.removeEventListener("click", (e: Event) => this.createProfile());
            this.userProfile = new Profile(Input.getInput());
            console.log("hello");
        }
    }
}