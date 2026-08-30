import { After, Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import playwright from 'playwright'
import 'dotenv/config';
import { LoginPage } from '../../POM/LoginPage.js'

setDefaultTimeout(20000);

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});

Given('I am in login page of saucedemo', async function () {
    this.browser = await playwright.chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goToLoginPageURL();
});

When('I enter valid username', async function () {
    await this.loginPage.enterUsername();
});

When('I enter valid password', async function () {
    await this.loginPage.enterPassword();
});

When('I click on login button', async function () {
    await this.loginPage.clickLoginButton();
});

Then('user should be redirected to saucedemo inventory page', async function () {
    await this.page.waitForURL(/.*\/inventory\.html/, { timeout: 15000 });
    //await this.page.locator('.inventory_list').waitFor({ state: 'visible', timeout: 15000 });
});

When('I enter invalid username', async function () {
    await this.loginPage.enterUsername('invalid_user');
});

Then('user shoulde get error message', async function () {
    const errorMessage = this.page.locator('[data-test="error"]');
    await errorMessage.waitFor({ state: 'visible', timeout: 15000 });

    const text = await errorMessage.textContent();
    if (!text || !text.toLowerCase().includes('do not match')) {
        throw new Error(`Expected login error message but found: ${text ?? 'empty text'}`);
    }
});

When('i enter username {string} and password {string}', async function (username, password) {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
});