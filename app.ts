class Startup {
    public static main(): void {
        var button = document.getElementById("submit");
        var userInput: HTMLInputElement = <HTMLInputElement> document.getElementById("user_input");
        var button = document.getElementById("submit_button");
        button.addEventListener("click", (e:Event)=> putToDisplay(userInput.value));
    }
}
    var webElement = document.getElementById("display");
    function putToDisplay(text: string){
        webElement.innerText += "\n";
        webElement.innerText += text;
    }
    
Startup.main();