namespace Casino {
    window.addEventListener("DOMContentLoaded", testFunction2);
    export class Input {
        private static userinput: string;
        public static getInputFromBox() {
            var element: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
            this.userinput = element.value;
            element.value = "";
        }

        public static getInput():string {
            return this.userinput;
        }
    }

    document.getElementById("submit_button").addEventListener("click", Input.getInputFromBox);

    function testFunction2() {
        var menu: MainMenu = new MainMenu;
        menu.menuStart();
    }
}