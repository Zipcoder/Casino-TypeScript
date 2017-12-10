class WebPage {
    public static getDisplayElement(): any {
        return WebPage.getElementById("display");
    }

    public static getUserInputElement(): any {
        return WebPage.getElementById("user_input");
    }

    public static getElementById(id: string):any {
        return document.getElementById(id);
    }

}

