import { test, expect } from '@playwright/test';
//const sauceDemoData = require('../testdata/saucedemo.json');

import sauceDemoData from '../testdata/saucedemo.json'

test('logs in to Sauce Demo with JSON test data', async ({ page }) => {
  await page.goto(sauceDemoData.url.staging);

  await page.getByTestId('username').fill(sauceDemoData.validUser.username);
  await page.getByTestId('password').fill(sauceDemoData.validUser.password);
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByTestId('title')).toHaveText('Products');
  await expect(page.getByTestId('inventory-item')).toHaveCount(6);
});