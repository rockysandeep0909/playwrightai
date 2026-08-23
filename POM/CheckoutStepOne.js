export class CheckoutStepOne{


    //Region 1
    constructor(page){
        this.page=page;
        this.firstName=page.locator("#first-name");
        this.lastName=page.locator("#last-name");
        this.postalCode=page.locator("#postal-code");
        this.continueButton=page.locator("#continue");
    }

    // Region 2
    async enterFirstName(){
        await this.firstName.fill("Sandeep");
    }

    async enterLastName(){
        await this.lastName.fill("Kumar");
    }

    async enterPostalCode(){
        await this.postalCode.fill("110092");
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }
}