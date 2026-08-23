export class CheckoutStepTwo{

    //Region 1
    constructor(page){
        this.page=page;
        this.finishButton=page.locator("#finish");
    }

    // Region 2
    async clickFinishButton(){
        await this.finishButton.click();
    }
    
}