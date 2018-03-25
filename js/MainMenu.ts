namespace Casino {
    export class MainMenu {
        displayElement: HTMLElement = document.getElementById("display");
        submitButton: HTMLElement = document.getElementById("submit_button");
        private userPrfoile: Profile;
        
        public menuStart() {
            this.displayElement.textContent = "Please enter your name";
            this.submitButton.addEventListener("click", this.createProfile);
        }

        public createProfile(){
            this.displayElement.textContent = "Your name is ";
            this.submitButton.removeEventListener("click", this.createProfile);
            this.userPrfoile = new Profile(Input.getInput());
            this.displayElement.textContent = "Your name is " + this.userPrfoile.getuserName();
        }
    }
}