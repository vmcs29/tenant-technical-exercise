import { test } from '../helper/fixtures';
import { expect } from '@playwright/test';
import { testData } from '../helper/testData';
import { appMessages } from '../helper/appMessages';

test.beforeEach(async ({ page }) => {
  await page.goto(testData.baseUrl);
});

test('Successful Login', async ({ loginPage }) => {
  await loginPage.login(testData.validUserName, testData.validPassword);
  await expect(loginPage.loginStatus).toHaveText(`Welcome, ${testData.validUserName}!`);
});

test('Login with Invalid Password', async ({ loginPage }) => {
  await loginPage.login(testData.validUserName, testData.invalidPassword);
  await expect(loginPage.loginStatus).toHaveText(appMessages.invalidLoginMessage);
});

test('Login with Empty Fields', async ({ loginPage }) => {
  // Test case for login with empty fields
  await loginPage.clickLoginButton();
  await expect(loginPage.loginStatus).toHaveText(appMessages.invalidLoginMessage);
});

test('Login with Only Username Filled', async ({ loginPage }) => {
  await loginPage.inputUserName(testData.validUserName);
  await loginPage.clickLoginButton();
  await expect(loginPage.loginStatus).toHaveText(appMessages.invalidLoginMessage);
});

test('Login with Only Password Filled', async ({ loginPage }) => {
  await loginPage.inputPassword(testData.validPassword);
  await loginPage.clickLoginButton();
  await expect(loginPage.loginStatus).toHaveText(appMessages.invalidLoginMessage);
});

test('Logout After Successful Login', async ({ loginPage }) => {
  await loginPage.login(testData.validUserName, testData.validPassword);
  await expect(loginPage.loginStatus).toHaveText(`Welcome, ${testData.validUserName}!`);
  await loginPage.clickLoginButton();
  await expect(loginPage.loginStatus).toHaveText(appMessages.logoutSuccessfulMessage);
});


