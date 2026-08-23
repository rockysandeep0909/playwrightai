export class CartPage{


    //Region 1
    constructor(page){
        this.page=page;
        this.cartItems=page.locator(".cart_item");
        this.cartItemNames=page.locator(".inventory_item_name");
        this.checkoutButton=page.locator("#checkout");
    }


    // Region 2
    async getCartItemsCount(){
        return await this.cartItems.count();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
}