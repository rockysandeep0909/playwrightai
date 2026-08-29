export class CheckoutComplete{

    //Region 1
    constructor(page){
        this.page=page;
        this.completeHeader=page.locator(".complete-header");
    }


    // Region 2
    async getCompleteHeaderText(){
        return await this.completeHeader.textContent();
    }

    async verifyCompleteHeaderText(expectedText){
        const actualText=await this.completeHeader.textContent();
        if(actualText.trim()===expectedText){
            console.log("Complete header text is verified successfully");
        }
        else{
            console.log("Complete header text verification failed");
        }
    }


    async verifyCheckoutCompletePage(){
        await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
    }

}