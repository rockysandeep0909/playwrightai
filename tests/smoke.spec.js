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


test("test run using browser fixuture" ,  async ({browser})=>{
     const context=await browser.newContext();
     const page =await context.newPage();
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


test('File upload', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("testdata/sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);

    // assertion 
    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");


})


//visual testing 

test("Visual testing in instagram" ,  async ({page})=>{
     await page.goto("https://www.instagram.com/");
     await expect(page).toHaveTitle("Instagram");
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("insta.png")

})


test("Visual testing in playwright page" ,  async ({page})=>{
     await page.goto("https://playwright.dev/");
     
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("playwright.png")

})


// handle alerts in playwright 

test.only('Hanlding simple alert in playwright ', async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     page.on('dialog', async dialog=>{
          await dialog.accept();
     })

     await page.locator("//button[text()='Click for JS Alert']").click();

     await page.waitForTimeout(5000);
})