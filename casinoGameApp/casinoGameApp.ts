namespace Casino {
    window.addEventListener("DOMContentLoaded", (e:Event)=>loadMainMenu());

    export class Input {
        private static userinput: string;
        public static getInputEntered() {
            var element: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
            this.userinput = element.value;
            element.value = "";
        }

        public static getInput(): string {
            return this.userinput;
        }
    }

    document.getElementById("submit_button").addEventListener("click", (e: Event) => Input.getInputEntered);

    function loadMainMenu() {
        var menu: MainMenu = new loadMainMenu();
        menu.menuStart();
    }
}