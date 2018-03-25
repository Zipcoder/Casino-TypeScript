function id(first, last) {
    return first + last;
}
var fullname = id("Carolynn ", "Vansant");
console.log(fullname);
document.getElementById("display").innerHTML = fullname;
