import {test} from '@playwright/test';

test.only("Our first playwright test" ,  async ({page})=>{

     await page.goto("https://www.saucedemo.com/");
    
     await page.locator("//input[@placeholder='Username']").fill("standard_user");
     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
     await page.locator("//input[@id='login-button']").click();
    

     // Validation is yet to be done


})



