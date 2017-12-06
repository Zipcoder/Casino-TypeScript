class MilitaryConversionHelper {

    timeRepresentation: string ="";

    minuteMapping(passedMinute:number):void{
        switch (passedMinute)
        {
            case 0:{
                    this.timeRepresentation+="";
                    break;
                }
            case 1:{
                    this.timeRepresentation+=" One";
                    break;
                }
            case 2:{
                    this.timeRepresentation+=" Two";
                    break;
                }
            case 3:{
                    this.timeRepresentation+=" Three";
                    break;
                }
            case 4:{
                    this.timeRepresentation+=" Four";
                    break;
                }
            case 5:{
                    this.timeRepresentation+=" Five";
                    break;
                }
            case 6:{
                    this.timeRepresentation+=" Six";
                    break;
                }
            case 7:{
                    this.timeRepresentation+=" Seven";
                    break;
                }
            case 8:{
                    this.timeRepresentation+=" Eight";
                    break;
                }
            case 9:{
                    this.timeRepresentation+=" Nine";
                    break;
                }

        }

    }

    tensMapping(passedMinute:number):void
    {
        switch(passedMinute)
        {
            case 10:{
                this.timeRepresentation+="Ten";
                break;
            }
            case 11:{
                this.timeRepresentation+="Eleven";
                break;
            }
            case 12:{
                this.timeRepresentation+="Twelve";
                break;
            }
            case 13:{
                this.timeRepresentation+="Thirteen";
                break;
            }
            case 14:{
                this.timeRepresentation+="Fourteen";
                break;
            }
            case 15:{
                this.timeRepresentation+="Fifteen";
                break;
            }
            case 16:{
                this.timeRepresentation+="Sixteen";
                break;
            }
            case 17:{
                this.timeRepresentation+="Seventeen";
                break;
            }
            case 18:{
                this.timeRepresentation+="Eighteen";
                break;
            }
            case 19:{
                this.timeRepresentation+="Nineteen";
                break;
            }
        }
    }

    convertToPhrase(passedMinute:number):string
    {

        this.timeRepresentation="";

        switch (Math.floor(passedMinute/10)){
            case 0: {
                this.timeRepresentation += "Zero";
                this.minuteMapping(passedMinute%10);
                break;
            }
            case 1:{
                this.tensMapping(passedMinute);
                break;
            }
            case 2:{
                this.timeRepresentation+="Twenty";
                this.minuteMapping(passedMinute%10);
                break;
            }
            case 3:{
                this.timeRepresentation+="Thirty";
                this.minuteMapping(passedMinute%10);
                break;
            }
            case 4:{
                this.timeRepresentation+="Forty";
                this.minuteMapping(passedMinute%10);
                break;
            }
            case 5:{
                this.timeRepresentation+="Fifty";
                this.minuteMapping(passedMinute%10);
                break;
            }

        }
        console.log(this.timeRepresentation);
        return this.timeRepresentation;
    }
}
