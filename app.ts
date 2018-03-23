class Startup {

    public static main(): void {

        

        var webElement = document.getElementById("display");
        var userInput = <HTMLInputElement>document.getElementById("user_input")
        var button = document.getElementById("submitButton");

        button.addEventListener("click", (e: Event) => addToDisplayText(userInput.value))

        function addToDisplayText(text: string) {
            webElement.innerText += '\n';
            webElement.innerText += text;
        }
    }
}

Startup.main();