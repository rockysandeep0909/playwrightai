import {test,expect} from '@playwright/test';

test("Our first playwright test" ,  async ({page})=>{

     await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     
     await page.locator("//input[@placeholder='Username']").fill("standard_user");
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
     await page.locator("//input[@id='login-button']").click();
     //await page.waitForTimeout(3000);
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     
     // ctrl + Shift + k -- delete the line
  
     // Validation is yet to be done
     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();

     await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");
    



})


test("@smoke Dropdown validation in saucedemo website" ,  async ({page})=>{

     await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     await page.locator("//input[@placeholder='Username']").fill("standard_user");
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
     await page.locator("//input[@id='login-button']").click();
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await page.waitForTimeout(3000);

     let dropdown=await page.locator("//select[@class='product_sort_container']");
     await dropdown.selectOption("lohi");
     await page.waitForTimeout(3000);
     await dropdown.selectOption("hilo");
     await page.waitForTimeout(3000);
     await dropdown.selectOption("az");
     await page.waitForTimeout(3000);
     await dropdown.selectOption("za");
     await page.waitForTimeout(3000);

     await expect(page.locator("//div[@class='inventory_item']")).toHaveCount(6);

     await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
     await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("1");

})


test("Navigation methods in paytm website" ,  async ({page})=>{

     await page.goto("https://playwright.dev/");
     await page.locator("//a[@class='getStarted_Sjon']").click();
     await page.goBack();
     await page.waitForTimeout(3000);
     await page.goForward();
     await page.waitForTimeout(3000);
     await page.reload();
     await page.waitForTimeout(3000);

})
// test.only("pan card validation in income tax website" ,  async ({page})=>{

//      await page.goto("https://eportal.incometax.gov.in/iec/foservices/#/login");
//      await expect(page.locator('//input[@name="panAdhaarUserId"]')).toBeDisabled();
//      await page.locator('//input[@name="panAdhaarUserId"]').fill("ABCDE1234F");
//      await expect(page.locator('//input[@name="panAdhaarUserId"]')).toHaveValue("ABCDE1234F");
//      await expect(page.locator('//input[@name="panAdhaarUserId"]')).toBeEnabled();



// })


