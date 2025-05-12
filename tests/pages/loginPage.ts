import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField : Locator;
  readonly passwordField : Locator;
  readonly loginButton : Locator;
  readonly loginStatus : Locator;
  readonly navvigationBar : Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[name="UserName"]');
    this.passwordField = page.locator('input[name="Password"]');
    this.loginButton = page.locator('button#login');
    this.loginStatus = page.locator('label#loginstatus');
  }

  async login(username: string, password: string) {
    await this.inputUserName(username);
    await this.inputPassword(password);
    await this.clickLoginButton();
  }

  async inputUserName(username: string) {
    await this.usernameField.fill(username);
  }
  
  async inputPassword(password: string) {
    await this.passwordField.fill(password);
  }
  
  async clickLoginButton() {
    await this.loginButton.click();
}
    async getLoginStatus() {
        return await this.loginStatus.textContent();
}

}