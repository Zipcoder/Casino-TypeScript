// import { sumTwoNumbers } from "./sumTwoNumbers";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Luis", "J.", "Romero;");
var submitInput = document.getElementById("user_input").nodeValue;
var userInput0 = prompt("Please enter something: ", "type0");
var userInput1 = prompt("Please enter something: ", "type1");
console.log(userInput0);
console.log(userInput1);
document.getElementById("display").innerHTML =
    "<h3>Blackjack</h3><br>" +
        user.fullName +
        "<h3>User input: " + userInput0 + "</h3>" +
        "<h3>User input: " + userInput1 + "</h3>";
// let num: number = sumTwoNumbers(1, 2);
// console.log(num);
