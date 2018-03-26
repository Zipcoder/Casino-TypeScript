namespace Casino{ 
    export interface PlayerInterface{
    //is a contract to ensure that all players have reference to a profile, name and id 


    //needs 3 methods
    //Profile getProfile()
    //String getName()
    //Long getId()

    //how do you make a method in typescript 
        getProfile(): Profile;

        getName(): String;

        getId(): number;
    }
}