class Startup {
    public static main(): void {
        var webElement = document.getElementById("display");
        webElement.innerText += "Hello World";
    }
}

Startup.main();