import {Given,When,Then} from '@cucumber/cucumber'
import playwright from 'playwright'
import 'dotenv/config';
import {LoginPage} from '../../POM/LoginPage.js'

Given('I am in login page of saucedemo', async function () {

this.browser=await playwright.chromium.launch({headless:false});
this.context=await this.browser.newContext();
this.page=await this.context.newPage();

this.loginPage=new LoginPage(this.page);
await this.loginPage.goToLoginPageURL();



});

When('I enter valid username', async function () {
    this.loginPage=new LoginPage(this.page);
    await this.loginPage.enterUsername();
});

When('I enter valid password', async function () {
    this.loginPage=new LoginPage(this.page);
    await this.loginPage.enterPassword();
});

When('I click on login button', async function () {
 this.loginPage=new LoginPage(this.page);
    await this.loginPage.clickLoginButton();
});

Then('user should be redirected to saucedemo inventory page', function () {
  console.log("inventory page redirection")
});

When('I enter invalid username', function () {
console.log("entering invalid username")
});

Then('user shoulde get error message', function () {
  console.log("erorr message")
});


When('i enter username {string} and password {string}', function (string, string2) {
  console.log("mulitple test data example")
});