import { Locator, Page, expect } from '@playwright/test';


export class SauceDemoCheckoutInformationPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly cancelButton: Locator;
    readonly continueButton: Locator;
    readonly errorBanner: Locator;

    constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input#first-name');
    this.lastNameInput = page.locator('input#last-name');
    this.postalCodeInput = page.locator('input#postal-code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.errorBanner = page.locator('.error-message-container');
  }
   async fillInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async assertErrorContains(text: string) {
    await expect(this.errorBanner).toContainText(text);
  }
}