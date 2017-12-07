export class Utilities {

  static displayEle : any = document.getElementById("display");
  static userInputEle : any = document.getElementById("user_input");
  static buttonEle : any = document.getElementById("my_button");

  static printMenuName(menuName: string) {
    Utilities.displayEle.innerHTML += menuName;
  }

  static printMenuOptions(menuOptions: string[]) {

  }

  static getMenuInput(prompt: string, menuOptions: string[]) : string {
    return "";
  }
}
