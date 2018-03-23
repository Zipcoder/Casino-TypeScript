class Startup {
    public static main(): number {
        var webElement = document.getElementById("display");
        webElement.innerText += "Hello World";
        return 0;
    }
}

Startup.main();