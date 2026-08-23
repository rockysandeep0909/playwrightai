import 'dotenv/config'

export class InventoryPage{

    //Region 1
constructor(page){
    this.page=page;
    this.inventoryItems=page.locator(".inventory_item");
    this.inventoryItemNames=page.locator(".inventory_item_name");
    this.firstItemAddToCartButton=page.locator("#add-to-cart-sauce-labs-backpack");
    this.cartlink=page.locator(".shopping_cart_link");
}

    // Region 2
async getInventoryItemsCount(){
    return await this.inventoryItems.count();

}

async clickFirstItemAddToCartButton(){
    await this.firstItemAddToCartButton.click();

}

async clickCartLink(){
    await this.cartlink.click();
}








}