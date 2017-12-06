class Display{

    static displayEle: any = document.getElementById("display");

    static print(input: String){
        this.displayEle.innerHTML += input + "<br/><br/>";
    }
}