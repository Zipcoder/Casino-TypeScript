export class Utilities {

  static displayEle : any = document.getElementById("display");
  static userInputEle : any = document.getElementById("user_input");
  static buttonEle : any = document.getElementById("my_button");
  static getNameButton : any = document.getElementById("get_name_button");
  static betAmountButton : any = document.getElementById("bet_amount_button");
  static passOrDontPassButton : any = document.getElementById("pass_or_dont_pass_button");

  static clearDisplay() {
    Utilities.displayEle.innerHTML = "";
  }
  static printLine(input: string) {
    Utilities.displayEle.innerHTML += input + "<br/>";
  }

  static printMenuName(menuName: string) {
    Utilities.printLine(menuName);
  }

  static printMenuOptions(menuOptions: string[]) {
    Utilities.displayEle.innerHTML += "[ " + menuOptions.join(" ] * [ ") + " ]" + "<br/>";
  }

  static getMenuInput(thePrompt: string, menuOptions: string[]) : string {
    Utilities.displayEle.innerHTML += thePrompt + "<br/>";
    var input = "";
    setTimeout(function(){
      var isValidInput = false;
      while(!isValidInput) {
          input = prompt(thePrompt);
          for(let optionKey in menuOptions) {
              if(menuOptions[optionKey].toLowerCase() === input.toLowerCase()) {
                  isValidInput = true;
                  break;
              }
          }
          if(!isValidInput) {
              alert("Invalid selection");
          }
      }
    }, 1000);
    return input;
  }

  static getUserInput(thePrompt: string) : string {
    Utilities.displayEle.innerHTML += thePrompt + "<br/>";
    var input = "";
    setTimeout(function(){
      input = prompt(thePrompt);
    }, 1000);
    return input;
  }

  static getIntegerInput(thePrompt: string) : number {
    var userIntegerInput = 0;
    setTimeout(function(){
      var isValidInput = false;
      while(!isValidInput) {
        let input = Utilities.getDoubleInput(thePrompt);
        if(Math.floor(input) - input === 0) {
          isValidInput = true;
        }
        else {
          alert("Invalid selection");
        }
      }
    }, 1000);
    return userIntegerInput;
  }

  static getDoubleInput(thePrompt: string) : number {
    var userDoubleInput = 0.0;
    setTimeout(function(){
      var isValidInput = false;
      while(!isValidInput) {
        let input = Utilities.getUserInput(thePrompt);
        if(typeof(input) === 'number') {
          isValidInput = true;
        }
        else {
          alert("Invalid selection");
        }
      }
    }, 1000);
    return userDoubleInput;
  }

  static getMoneyInput(thePrompt: string) : number {
    var userIntegerInput = 0;
    setTimeout(function(){
      var isValidInput = false;
      while(!isValidInput) {
        let input = Utilities.getDoubleInput(thePrompt);
        if(input >= 0) {
          if(Math.floor(input * 100) - input * 100 === 0) {
            isValidInput = true;
          }
          else {
            alert("Must enter an amount with up to two decimal places in accuracy");
          }
        }
        else {
          alert("Must enter a positive amount");
        }
      }
    }, 1000);
    return userIntegerInput;
  }

  static getYesOrNoInput(thePrompt: string) : boolean {
    var result = false;
    setTimeout(function(){
      var isValidInput = false;
      while(!isValidInput) {
        let input = Utilities.getUserInput(thePrompt);
        if("Y" === input.toUpperCase()) {
          result = true;
          isValidInput = true;
        }
        else if("N" === input.toUpperCase()) {
          result = false;
          isValidInput = true;
        }
        else {
          alert("Invalid selection, must enter Y or N");
        }
      }
    }, 1000);
    return result;
  }
}
