document.getElementById("submit_button").addEventListener("click", testFunction);
document.getElementById("display").addEventListener("mouseover", testFunction2);
function testFunction() {
    var element = document.getElementById("user_input");
    var test = element.value;
    document.getElementById("display").textContent = test;
    element.value = "";
}
function testFunction2() {
    document.getElementById("display").innerHTML = "Press the button to start";
}
