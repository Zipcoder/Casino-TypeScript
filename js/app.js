var Student = (function () {
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
var submitInput = document.getElementById("user_input");
var newString = submitInput.value;
var userInput0 = prompt("Please enter something: ", "type0");
var userInput1 = prompt("Please enter something: ", "type1");
console.log(userInput0);
console.log(userInput1);
document.getElementById("display").innerHTML =
    "<h3>Blackjack</h3><br>" +
        user.fullName +
        "<h3>User input: " + userInput0 + "</h3>" +
        "<h3>User input: " + userInput1 + "</h3>";
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}
var num1 = 1;
var num2 = 2;
var sum = sumTwoNumbers(num1, num2);
console.log("My sum is: " + sum);
var test = prompt("type something: ", "");
//# sourceMappingURL=app.js.map