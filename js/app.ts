class Startup {
   
    public static main(): void {
        var input = <HTMLInputElement> document.getElementById("user_input");
        var window = <HTMLDivElement>document.getElementById('display');
        var button = <HTMLDivElement>document.getElementById('submit');
        
        
        button.addEventListener("click",(e:Event)=>{window.innerText += input.value + '\n'});
        

        
        
        
    }
}

Startup.main();