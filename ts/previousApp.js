//IGNORE THIS FILE
// namespace commoname;
// // import { sumTwoNumbers } from "./sumTwoNumbers";
// // class Student {
// //     fullName: string;
// //     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
// //         this.fullName = firstName + " " + middleInitial + " " + lastName;
// //     }
// // }
// // interface Person {
// //     firstName: string;
// //     lastName: string;
// // }
// // function greeter(person: Person) {
// //     return "Hello, " + person.firstName +  " " + person.lastName;
// // }
// // let user: Student = new Student("Luis", "J.", "Romero");
// class UI {
//     static userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
//     static window: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
//     static button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
//     static _lastInput: any;
//     private static _instance: UI;
//     private constructor() {
//         UI.button.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
//         UI.button.addEventListener("click", (e:Event) => console.log(UI._lastInput));
//         UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });
//     }
//     static display(input: string): void {
//         this.window.innerText += input + '\n';
//     }
//     static clearScreen(): void {
//         this.window.innerText = '';
//     }
//     public static get Instance(): UI {
//         return this._instance || (this._instance = new UI());
//     }
//     public static get lastInput(): any {
//         return this._lastInput;
//     }
// }
// // let userInput0 = prompt("Please enter something: ", "type0");
// // let userInput1 = prompt("Please enter something: ", "type1");
// // console.log(userInput0);
// // console.log(userInput1);
// class Choose {
//     constructor(){
//         this.chooseGame = this.chooseGame.bind(this);
//     }
//     start() {
//         UI.display("What game do you want to play?");
//         UI.display("Black Jack or Go Fish?");
//     }
//         UI.button.addEventListener("click", (e:Event) => this.chooseGame);
//      chooseGame(): void {
//         UI.button.removeEventListener("click", (e:Event) => this.chooseGame);
//         if (UI.lastInput === "Black Jack") {
//             UI.display("Black Jack worked");
//         }
//         else if (UI.lastInput === "Go Fish") {
//             UI.display("Go Fish worked");
//         }
//         else {
//             UI.button.addEventListener("click", (e:Event) => this.chooseGame);
//         }
//     }
// }
// UI;
// UI.display("text from display method");
// let chooseGame: Choose = new Choose();
// // chooseGame.start();
// chooseGame.chooseGame();
// // let num: number = sumTwoNumbers(1, 2);
// // console.log(num);
