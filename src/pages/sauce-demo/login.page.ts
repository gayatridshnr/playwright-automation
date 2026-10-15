import {Locator,Page,expect} from '@playwright/test';

export class SauceDemoLoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly passWord: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('#user-name');
    this.passWord = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage=page.locator('h3[role="alert"]');
  }

  async goTo() {
    await this.page.goto('/');
  }

  async login(username: any, password: any) {
    if (username === undefined || password === undefined) {
  throw new Error('Username and password must be configured');
}
    await this.userName.fill(username);
    await this.passWord.fill(password);
    await this.loginButton.click();
  }

  async assertErrorContains(expectedError: string) {
    await expect(this.errorMessage).toHaveText(expectedError);
}

 async assertLoaded()  {
    await expect(this.userName).toBeVisible();
    await expect(this.passWord).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

}
