document.getElementById("submit_button").addEventListener("click", testFunction);
document.getElementById("display").addEventListener("mouseover", testFunction2);
function testFunction() {
    document.getElementById("display").innerHTML = "Hello";
}
function testFunction2() {
    document.getElementById("display").innerHTML = "Press the button to start";
}
