namespace Casino{
    export class SlotsGame{

        submitButton: HTMLElement = document.getElementById("submit_button");
        displayElement: HTMLElement = document.getElementById("display");
        private slotWheel1: number[] = [3,2,5,4,6,1];
        private slotWheel2: number[] = [6,3,1,2,5,4];
        private slotWheel3: number[] = [2,5,4,1,6,3];


        public startGame(){
            var slotMachine = this.createMultipleWheelOutput();
            this.displaySlotMachine(slotMachine);
            this.checkWinners(slotMachine);
            this.displayElement.innerHTML += "<br>Type exit to quit or anything else to play again."
            this.submitButton.addEventListener("click",(e: Event) => this.endGameChecker(), {once:true});
        }

        private endGameChecker(){
            if(Input.getInput().toLowerCase() != 'exit'){
                this.startGame();
            }
        }

        private createMultipleWheelOutput(): number[][]{
            var slotMachine: number[][] = [];
            slotMachine[0] = this.createSingleWheelOutput(this.slotWheel1);
            slotMachine[1] = this.createSingleWheelOutput(this.slotWheel2);
            slotMachine[2] = this.createSingleWheelOutput(this.slotWheel3);
            return slotMachine;
        }

        private createSingleWheelOutput(slotWheel: number[]): number[]{
            var newArray: number[] = [];
            var position: number = Math.floor(Math.random() * 6);
            for(var i = 0; i < 3; i++){
                if(position == 6){
                    position = 0;
                }
                newArray[i] = slotWheel[position];
                position++;
            }
            return newArray;
        }

        private displaySlotMachine(slotMachine: number[][]){
            this.displayElement.innerHTML += "<br>" + slotMachine[0][0] +" " + slotMachine[1][0] +" "+ slotMachine[2][0];
            this.displayElement.innerHTML += "<br>" + slotMachine[0][1] +" " + slotMachine[1][1] +" "+ slotMachine[2][1];
            this.displayElement.innerHTML += "<br>" + slotMachine[0][2] +" " + slotMachine[1][2] +" "+ slotMachine[2][2];
        }

        private checkWinners(slotMachine: number[][]){
            this.checkRowWinners(slotMachine);
            this.checkDiagonalWinners(slotMachine);
        }
        
        private checkRowWinners(slotMachine: number[][]){
            if(slotMachine[0][0] === slotMachine[1][0] && slotMachine[1][0]=== slotMachine[2][0]){
                this.displayElement.innerHTML += "<br>You have won on row 1!";
            }
            if(slotMachine[0][1] === slotMachine[1][1] && slotMachine[1][1]=== slotMachine[2][1]){
                this.displayElement.innerHTML += "<br>You have won on row 2!";
            }
            if(slotMachine[0][2] === slotMachine[1][2] && slotMachine[1][2]=== slotMachine[2][2]){
                this.displayElement.innerHTML += "<br>You have won on row 3!";
            }
        }

        private checkDiagonalWinners(slotMachine: number[][]){
            if(slotMachine[0][0] === slotMachine[1][1] && slotMachine[1][1]=== slotMachine[2][2]){
                this.displayElement.innerHTML += "<br>You have won on diagonal down!";
            }
            if(slotMachine[0][2] === slotMachine[1][1] && slotMachine[1][1]=== slotMachine[2][0]){
                this.displayElement.innerHTML += "<br>You have won on diagonal up!";
            }
        }
    }
}