import {test,expect} from '@playwright/test';
import 'dotenv/config';

test("TC 01: Our first playwright test" ,  async ({page})=>{

     await page.goto(process.env.BaseURL);
     await expect(page).toHaveTitle("Swag Labs");
     
     await page.locator("//input[@placeholder='Username']").fill(process.env.user_name);
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue(process.env.user_name);
     await page.locator("//input[@placeholder='Password']").fill(process.env.password);
     await page.locator("//input[@id='login-button']").click();
     //await page.waitForTimeout(3000);
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     
     // ctrl + Shift + k -- delete the line
  
     // Validation is yet to be done
     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();

     await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");
    



})


test("TC 02: Dropdown validation in saucedemo website" ,  async ({page})=>{

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


test("TC 03: Navigation methods in paytm website" ,  async ({page})=>{

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


test("TC 04: test run using browser fixuture" ,  async ({browser})=>{
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


test("TC 05: File upload", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("testdata/sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);

    // assertion 
    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");


})


//visual testing 

test("TC 06: Visual testing in instagram" ,  async ({page})=>{
     await page.goto("https://www.instagram.com/");
     await expect(page).toHaveTitle("Instagram");
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("insta.png")

})


test("TC 07: Visual testing in playwright page" ,  async ({page})=>{
     await page.goto("https://playwright.dev/");
     
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("playwright.png")

})


// handle alerts in playwright 

test("TC 08: Hanlding simple alert in playwright ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     page.on('dialog', async dialog=>{
          await dialog.accept();
     })

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Confirm']").click();

     await page.waitForTimeout(5000);
})


test("TC 09: Handling confirm box --- dismiss ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     page.on('dialog', async dialog=>{
          await dialog.dismiss();
     })

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Confirm']").click();

     await page.waitForTimeout(5000);
})


test("TC 10: Handling confirm box --- prompt alert ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Prompt']").click();


     page.on('dialog', async dialog=>{
          await dialog.accept("This is my input");
     })


   

     await page.waitForTimeout(5000);
})

//handling webtables in playwright

test("TC 11: Handling webtables in playwright ", async ({page})=>{
     await page.goto("https://www.w3schools.com/html/html_tables.asp");
     await page.waitForTimeout(3000);
     let rows=await page.locator("//table[@id='customers']//tr");
     
     console.log("Total number of rows in the table are : "+await rows.count());

     for(let i=0;i<await rows.count();i++){
          let rowText=await rows.nth(i).textContent();
          console.log(rowText);
     }
})


// handling iframes in playwright

test("TC 12: Handling iframes in playwright ", async ({page})=>{
     await page.goto("https://www.w3schools.com/html/html_iframe.asp");
     await page.waitForTimeout(3000);
     //await page.pause();
     const iframe=page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']");
     await iframe.locator("//span[text()='Sign In']").click();
     page.locator("//span[text()='Sign In']").click();
     await page.waitForTimeout(3000);


})


test("TC 13: Keyboard events" ,  async ({page})=>{

     await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     
     await page.locator("//input[@placeholder='Username']").fill("standard_user");
     await page.keyboard.press("Tab");
     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
     await page.keyboard.press("Backspace");
     await page.keyboard.press("Enter");
     await expect(page).toHaveURL("https://www.saucedemo.com/iventory.html");

})


test("TC 14: auto suggestive dropdown" ,  async ({page})=>{

     await page.goto("https://www.wikipedia.org/");
     const searchBox=await page.locator("//input[@id='searchInput']");
     await searchBox.fill("Playwright");
     await page.waitForTimeout(3000);

     const suggestions=await page.locator("//div[@class='suggestions-dropdown']/a");
     const count=await suggestions.count();
     const expectedText="Playwright (software)End-to-end testing framework"
     console.log("Total number of suggestions are : "+count);

     for(let i=0;i<count;i++){
          const actualtext=await suggestions.nth(i).textContent();
          console.log(actualtext);

          if(actualtext==expectedText){
               await suggestions.nth(i).click();
               break;
          }
     }

     await page.waitForTimeout(3000);
     await page.locator("//span[normalize-space()='Further reading']").click();
     await page.waitForTimeout(3000);
})


test("TC 15: Handling scroll down in playwright and using css selectors" ,  async ({page})=>{

     await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     await page.locator("#user-name").fill("standard_user");
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
     await page.locator("#password").fill("secret_sauce");
     await page.locator(".submit-button").click();
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await page.waitForTimeout(3000);
     await page.evaluate(()=>window.scrollBy(0,600));
     await page.waitForTimeout(3000);
     await page.evaluate(()=>window.scrollBy(0,-300));
     await page.waitForTimeout(3000);
})

test("TC 16: Horizontal scroll from left to right" ,  async ({page})=>{

     await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
     await page.waitForTimeout(1000);
     await page.evaluate(() => window.scrollTo(0, 0));
     await page.waitForTimeout(1000);
     await page.evaluate(() => window.scrollBy(800, 0));
     await page.waitForTimeout(1000);
     await expect(await page.evaluate(() => window.scrollX)).toBeGreaterThan(0);

})



test("TC 17: mouse hover" ,  async ({page})=>{

     await page.goto("https://paytm.com/");
     await page.locator("//body/div[@id='app']/header/div[@class='_3aL54']/ul[@class='_2o4VV']/li[4]").hover();
     await page.waitForTimeout(3000);

})


test("http authentication " ,  async ({browser})=>{

     const context=await browser.newContext({
          httpCredentials:{
               username:'admin',
               password:'admin'
          }
     });
     const page =await context.newPage();


     await page.goto("https://the-internet.herokuapp.com/basic_auth");
     await page.waitForTimeout(3000);

     });


     test("Multiple tabs handling" ,  async ({browser})=>{

          const context=await browser.newContext();
          const page=await context.newPage();

          await page.goto("https://paytm.com/");
          await page.locator("//body/div[@id='app']/header/div[@class='_3aL54']/ul[@class='_2o4VV']/li[1]").hover();
          await page.waitForTimeout(3000);
        
          const waterBillLink=await page.locator("//a[normalize-space()='Water bill']");
              const [newPage]=   await Promise.all([
                    
                    context.waitForEvent('page'),
                     waterBillLink.click(),

                     //context.waitForEvent('page')  → returns the new Page object
                     //waterBillLink.click()          → triggers the new tab
                     //Promise.all() returns results in the same order as the promises.
                 ]);    
         

          // Promise concepts 
          await newPage.locator("//button[contains(@class,'_15qf _2qE6')]").click();
          await newPage.waitForTimeout(3000);
          await newPage.close();
          await page.waitForTimeout(3000);

          await page.locator("//div[normalize-space()='Paytm for Business']").click();
          



     })


     test.only("drag and drop", async ({page})=>{

          await page.goto(process.env.demoqabaseurl);
          await page.pause();
          const source=await page.locator("#draggable");
          const target=await page.locator("//p[text()='Drop Here']");
          await source.dragTo(target);
          await page.waitForTimeout(3000);
     })

