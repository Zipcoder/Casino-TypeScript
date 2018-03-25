document.getElementById("submit_button").addEventListener("click", getInput);
window.addEventListener("DOMContentLoaded", testFunction2);
function getInput() {
    var element = document.getElementById("user_input");
    var userInput = element.value;
    element.value = "";
    return userInput;
}
function testFunction2() {
    var menu = new MainMenu;
    menu.menuStart();
}
