namespace Casino {
    export class MainMenu {
        displayElement: HTMLElement = document.getElementById("display");
        submitButton: HTMLElement = document.getElementById("submit_button");
        private userProfile: Profile;

        constructor(){
            this.menuStart = this.menuStart.bind(this);
            this.createProfile = this.createProfile.bind(this);
            this.gamePicker = this.gamePicker.bind(this);
        }

        public menuStart() {
            this.displayElement.innerHTML = "Please enter your name";
            this.submitButton.addEventListener("click",(e: Event) => this.createProfile(), {once: true});
        }

        private createProfile(){
            this.userProfile = new Profile(Input.getInput());
            this.displayElement.innerHTML += "<br>Hello " + this.userProfile.getuserName() +"!";
            this.displayElement.innerHTML += "<br>Please select a game. <br>1. Slots";
            this.submitButton.addEventListener("click",(e: Event) => this.gamePicker(), {once: true});
        }
        
        private gamePicker(){
            if(Input.getInput().toLowerCase() === 'slots'){
                var slotsGame = new SlotsGame();
                slotsGame.startGame();
            }
        }
    }
}