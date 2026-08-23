import {test,expect,request} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger'

test.beforeEach(async ({page})=>{
     logger.info("Test case execution started")
})
test.afterEach(async ({page})=>{
     logger.info("Test case execution completed")
})

test.beforeAll(()=>{
     logger.info("Test suite execution started")
})

test.afterAll(()=>{
     logger.info("Test suite execution completed")
})

// Test basic login functionality with username, password, and verify successful navigation to inventory page
test("@smoke TC 01: Our first playwright test" ,  async ({page})=>{

     await page.goto(process.env.BaseURL);
     console.log("our first log for our first playwright test")
     logger.info("our first log for our first playwright test")
     await expect(page).toHaveTitle("Swag Labs");
     
     await page.locator("//input[@placeholder='Username']").fill(process.env.user_name);
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue(process.env.user_name);
     await page.locator("//input[@placeholder='Password']").fill(process.env.password);
     await page.locator("//input[@id='login-button']").click();
     //await page.waitForTimeout(3000);
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     logger.warn("This is a warning ")
     
     // ctrl + Shift + k -- delete the line
  
     // Validation is yet to be done
     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();

     await expect(page.locator("//span[@data-test='title']")).toHaveText("Products");
    
     logger.info("TC 01 is successfully executed")
     logger.silly("I am a silly logger")


})


// Test product sorting dropdown functionality with different sort options (lohi, hilo, az, za)
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
     logger.info("TC 02 got executed successfully")
     logger.error("This is an error message")
})


// Test browser navigation methods (goBack, goForward, reload) on Playwright docs
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


// Test creating browser context and page manually to login and verify inventory page
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


// Test file upload functionality by selecting a file and submitting the form
test("TC 05: File upload", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("//input[@id='file-upload']").setInputFiles("testdata/sample.txt");
    await page.locator("//input[@id='file-submit']").click();
    await page.waitForTimeout(5000);

    // assertion 
    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");


})


// Test visual regression on Instagram page by capturing and comparing screenshot
test("TC 06: Visual testing in instagram" ,  async ({page})=>{
     await page.goto("https://www.instagram.com/");
     await expect(page).toHaveTitle("Instagram");
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("insta.png")

})


// Test visual regression on Playwright docs page by capturing and comparing screenshot
test("TC 07: Visual testing in playwright page" ,  async ({page})=>{
     await page.goto("https://playwright.dev/");
     
     await page.waitForTimeout(3000);
     expect(await page.screenshot()).toMatchSnapshot("playwright.png")

})


// Test handling JavaScript alert dialogs by accepting them
test("TC 08: Hanlding simple alert in playwright ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     page.on('dialog', async dialog=>{
          await dialog.accept();
     })

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Confirm']").click();

     await page.waitForTimeout(5000);
})


// Test handling JavaScript confirm dialogs by dismissing them
test("TC 09: Handling confirm box --- dismiss ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     page.on('dialog', async dialog=>{
          await dialog.dismiss();
     })

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Confirm']").click();

     await page.waitForTimeout(5000);
})


// Test handling JavaScript prompt dialogs by accepting with user input text
test("TC 10: Handling confirm box --- prompt alert ", async ({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
     
     
     

     //await page.locator("//button[text()='Click for JS Alert']").click();
     await page.locator("//button[text()='Click for JS Prompt']").click();


     page.on('dialog', async dialog=>{
          await dialog.accept("This is my input");
     })


   

     await page.waitForTimeout(5000);
})

// Test web table iteration by counting rows and logging each row's text content
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


// Test iframe handling by locating and clicking elements inside iframes
test("TC 12: Handling iframes in playwright ", async ({page})=>{
     await page.goto("https://www.w3schools.com/html/html_iframe.asp");
     await page.waitForTimeout(3000);
     //await page.pause();
     const iframe=page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']");
     await iframe.locator("//span[text()='Sign In']").click();
     page.locator("//span[text()='Sign In']").click();
     await page.waitForTimeout(3000);


})


// Test keyboard interactions like Tab, Backspace, and Enter key presses during login
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


// Test auto-suggestive dropdown by searching and selecting matching suggestion
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


// Test vertical scrolling and CSS selectors for element location during login
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

// Test horizontal scrolling on wide page content and verify scroll position changes
test("TC 16: Horizontal scroll from left to right" ,  async ({page})=>{

     await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
     await page.waitForTimeout(1000);
     await page.evaluate(() => window.scrollTo(0, 0));
     await page.waitForTimeout(1000);
     await page.evaluate(() => window.scrollBy(800, 0));
     await page.waitForTimeout(1000);
     await expect(await page.evaluate(() => window.scrollX)).toBeGreaterThan(0);

})



// Test mouse hover action on menu items to trigger dropdown display
test("TC 17: mouse hover" ,  async ({page})=>{

     await page.goto("https://paytm.com/");
     await page.locator("//body/div[@id='app']/header/div[@class='_3aL54']/ul[@class='_2o4VV']/li[4]").hover();
     await page.waitForTimeout(3000);

})


// Test HTTP basic authentication by creating context with credentials
test("TC 18: http authentication " ,  async ({browser})=>{

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


     // Test handling multiple browser tabs by opening new tab and switching between them
     test("TC 19: Multiple tabs handling" ,  async ({browser})=>{

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


     // Test drag and drop functionality by dragging source element to target location
     test("TC 20: drag and drop", async ({page})=>{

          await page.goto(process.env.demoqabaseurl);
          await page.pause();
          const source=await page.locator("#draggable");
          const target=await page.locator("//p[text()='Drop Here']");
          await source.dragTo(target);
          await page.waitForTimeout(3000);
     })

// Test various Playwright built-in locators (getByTitle, getByPlaceholder, getByRole, getByTestId, getByText)
test("TC 21: Playwright inbuilt locators", async ({page})=>{


     logger.info("Test suite exectuion started for TC 21")
      
      await page.goto(process.env.BaseURL)
   
      logger.info("we are using playwright inbuilt locators")
      logger.info("-------getByTitle------")
      //await expect(page.getByTitle("Swag Labs")).toBeVisible();


      logger.info("------ getbyplaceholder-----")

      await page.getByPlaceholder("Username").fill(process.env.user_name);
      await page.getByPlaceholder("Password").fill(process.env.password);


     
     logger.info("------- getByRole------")
     await page.getByRole('button',{name:'Login'}).click();
      await page.waitForTimeout(5000);
     
     logger.info("------ getby test id-------")
     await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
     await page.waitForTimeout(5000);
     //await page.getByTestId("shopping-cart-link").click();

     logger.info("------ getbyText------")
     await expect(page.getByText("Products")).toBeVisible();

     //await page.getByLabel('Password').fill('secret');
     //await page.getByAltText('playwright logo').click();
     logger.info("Test suite exectuion completed for TC 21")
})

// test api using playwright 
test.only("TC 22: API testing using playwright", async ({request})=>{
   //const apiContext=await request.newContext();
   const response=await request.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
   console.log("Status code is : "+response.status());
   console.log("Response text is : "+await response.statusText());


})


test.only("TC 23: API testing using playwright post request", async ({page})=>{

   const apiContext=await request.newContext();
   const response=await apiContext.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
   console.log("Status code is : "+await response.status());
   console.log("Response text is : "+await response.statusText());

   // launch the application only after doing the api testing
   await page.goto("https://www.saucedemo.com/");
   await page.locator("#user-name").fill("standard_user");
   await page.locator("#password").fill("secret_sauce");
   await page.locator("#login-button").click();
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


})



