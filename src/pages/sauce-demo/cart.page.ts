import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoCartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly cartItemNames: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.cartItemNames = page.locator('.inventory_item_name');
    this.checkoutButton = page.getByRole("button", { name: 'Checkout' });
    this.continueShoppingButton = page.getByRole("button", { name: 'Continue Shopping' });
  }



  async assertContainsItems(itemNames: string[]): Promise<void> {
    for (const itemName of itemNames) {
      await expect(this.cartItemNames.filter({ hasText: itemName })).toBeVisible();
    }
  }

  async getItemCount(): Promise<number> {
    return this.cartItems.count();
  }

  async removeItem(itemName: string) {
    await this.cartItems.filter({ hasText: itemName }).getByRole('button', { name: 'Remove' }).click();
  }

  async clickcheckout() {
    await this.checkoutButton.click();
  }
  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}


