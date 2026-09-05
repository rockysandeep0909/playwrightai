
import {test,expect} from "@playwright/test";
import 'dotenv/config'
import logger from "../utils/logger";
import {LoginPage} from "../POM/LoginPage";
import {InventoryPage} from "../POM/InventoryPage";
import {CartPage} from "../POM/CartPage";
import {CheckoutStepOne} from "../POM/CheckoutStepOne";
import {CheckoutStepTwo} from "../POM/CheckoutStepTwo";
import {CheckoutComplete} from "../POM/CheckoutComplete";





test("TC 01: Our first playwright test" ,  async ({page})=>{
    // initialize the page objects 
     let loginpage=new LoginPage(page);
     let inventorypage=new InventoryPage(page);
     let cartpage=new CartPage(page);
    let checkoutstepone=new CheckoutStepOne(page);
    let checkoutsteptwo=new CheckoutStepTwo(page);
    let checkoutcomplete=new CheckoutComplete(page);
     

     // launch the application
     logger.info("Going to login page");
     await loginpage.goToLoginPageURL();
     await loginpage.validLogin();
     logger.info("Login successful");

     logger.info("Getting inventory items count");
     // get the inventory items count
     await inventorypage.clickFirstItemAddToCartButton();
     await inventorypage.clickCartLink();
    
     
     await cartpage.clickCheckoutButton();
     logger.info("Clicking on checkout button");
     
     await checkoutstepone.enterFirstName();
     await checkoutstepone.enterLastName();
     await checkoutstepone.enterPostalCode();
     await checkoutstepone.clickContinueButton();

     await checkoutsteptwo.clickFinishButton(); 
     
     await checkoutcomplete.verifyCheckoutCompletePage();

     
})