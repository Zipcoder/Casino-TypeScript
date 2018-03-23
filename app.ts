class Casino {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    showGreeting() {
        return "Greeting: " + this.greeting;
    }
}