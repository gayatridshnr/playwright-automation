import { Locator, Page, expect } from "@playwright/test";

export class SauceDemoCheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
    this.completeText = page.locator('.complete-text');
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async assertOrderCompleteMessageContains(expectedMessage: string) {
    await expect(this.completeHeader).toContainText(expectedMessage);
  }
  async backHome() {
    await this.backHomeButton.click();
  }
}
