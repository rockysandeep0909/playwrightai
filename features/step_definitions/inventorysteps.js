import { When, Then } from '@cucumber/cucumber'
import { InventoryPage } from '../../POM/InventoryPage.js'

When('I click on add to cart button', async function () {
    this.inventoryPage = new InventoryPage(this.page);
    await this.inventoryPage.clickFirstItemAddToCartButton();
});

Then('item should be added to cart page', async function () {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await cartBadge.waitFor({ state: 'visible', timeout: 15000 });

    const badgeText = await cartBadge.textContent();
    if (!badgeText || Number.parseInt(badgeText, 10) < 1) {
        throw new Error(`Expected cart badge count to be at least 1 but found: ${badgeText ?? 'empty'}`);
    }
});
