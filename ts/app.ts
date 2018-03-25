// import { sumTwoNumbers } from "./sumTwoNumbers";

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName +  " " + person.lastName;
}

let user = new Student("Luis", "J.", "Romero;");

let submitInput: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
let newString: string = submitInput.value;

let userInput0 = prompt("Please enter something: ", "type0");
let userInput1 = prompt("Please enter something: ", "type1");

console.log(userInput0);
console.log(userInput1);

document.getElementById("display").innerHTML = 
"<h3>Blackjack</h3><br>" +
user.fullName + 
"<h3>User input: " + userInput0 + "</h3>" +
"<h3>User input: " + userInput1 + "</h3>";


// let num: number = sumTwoNumbers(1, 2);
// console.log(num);