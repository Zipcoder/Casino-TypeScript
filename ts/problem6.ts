/// <reference path="MilitaryConversionHelper.ts"/>

class Problem6 {

    initiate():void{
        let inputForm:any = document.getElementById("user_input");
        let outputBox:any = document.getElementById("display");
        outputBox.innerHTML=this.convertMilitaryNotationToPhraseology(inputForm.innerText);
    }

    convertStandardToMilitaryPhrase(input:string):string
    {
        return (this.convertMilitaryNotationToPhraseology(this.convertToMilitaryNotation(input)));
    }

    convertToMilitaryNotation(input: string):string
    {
        let isAM:boolean;
        isAM=("am"===(input.substring(input.length-2, input.length)).toLowerCase());

        input=input.substring(0, input.length-2);

        let time:string[];
        time = input.split(":");

        let hours:number;
        hours = +time[0];

        if (isAM){

            if (hours==12){
                return ("00:"+time[1]);
            }

            return (input);
        }
        hours+=12;
        time[0]=""+hours;
        return (time[0]+":"+time[1]);
    }

    convertMilitaryNotationToPhraseology(input: string):string
    {
        let time:string[] = input.split(":");
        let timePhrase:string ="";

        let militaryConversionHelper:MilitaryConversionHelper = new MilitaryConversionHelper();

        timePhrase+=militaryConversionHelper.convertToPhrase(+time[0]);
        timePhrase+=" Hundred and ";
        timePhrase+=militaryConversionHelper.convertToPhrase(+time[1]);

        timePhrase+=" Hours";
        return timePhrase;
    }
}
