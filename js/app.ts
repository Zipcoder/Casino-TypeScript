document.getElementById("submit_button").addEventListener("click", getInput);
window.addEventListener("DOMContentLoaded", testFunction2); 
function getInput(): string{
    var element: HTMLInputElement = <HTMLInputElement> document.getElementById("user_input");
    var userInput: string = element.value;
    element.value = "";
    return userInput;
}
 function testFunction2(){
     var menu: MainMenu = new MainMenu;
     menu.menuStart();
 }