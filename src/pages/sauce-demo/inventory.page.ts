import { expect, Locator, Page } from '@playwright/test';

export class SauceDemoInventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly inventoryItemNames: Locator;
  readonly inventoryItems: Locator;
  readonly inventoryItemPrices: Locator
  readonly shoppingCart: Locator;
  readonly shoppingCartBadge: Locator;
  readonly sortSelect: Locator;
  readonly shoppingCartLink: Locator;
  readonly addToCartButton: Locator;
  readonly removeFromCartButton: Locator;
  readonly inventoryItemsDescription: Locator;


  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('#inventory_container');
    this.inventoryItems = page.locator('.inventory_item_description');
    this.inventoryItemNames = page.locator('.inventory_item_name');
    this.inventoryItemPrices = page.locator('.inventory_item_price');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.sortSelect = page.locator('.product_sort_container');
    this.shoppingCartLink = page.getByTestId('shopping-cart-link');
    this.inventoryItemsDescription = page.locator("//ancestor::div[@class='inventory_item_description']");
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.removeFromCartButton = page.getByRole('button', { name: 'Remove' });
  }
  async verifyInventoryPageDisplayed() {
    //await expect(this.page).toHaveURL(/inventory\.html/);
    console.log('Inventory page URL:', this.page.url());
    await expect(this.inventoryContainer.first()).toBeVisible();
    await expect(this.inventoryItemNames).toHaveCount(6);
  }

  async sortProducts(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortSelect.selectOption(option);
  }

  async getProductNames() {
    return this.inventoryItemNames.allTextContents();
  }

  async getProductPrices() {
    const prices = await this.inventoryItemPrices.allTextContents();
    return prices.map((price) => Number(price.replace('$', '')));
  }

  async addItemToCart(itemName: string) {
    console.log('Adding item to cart:', itemName);
    const productNames = await this.inventoryItemNames.allTextContents();
    console.log("productNames+" + productNames);
    for (const name of productNames) {
      console.log('Checking item:', name);
      if (name === itemName) {
        const itemLocator = this.inventoryItemNames.filter({ hasText: itemName });
        console.log("itemLocator" + itemLocator);
        console.log('itemLocator:', await itemLocator.allTextContents());
        const getdescription = await itemLocator.locator(this.inventoryItemsDescription);
        console.log('getdescription:', await getdescription.allTextContents());
        await getdescription.locator(this.addToCartButton).click();
        break;                                                      
      }
    }
}

async removeItemFromCart(itemName: string) {
    console.log('Removing item from cart:', itemName);
    const productNames = await this.inventoryItemNames.allTextContents();
    console.log("productNames+" + productNames);
    for (const name of productNames) {
      console.log('Checking item:', name);
      if (name === itemName) {
        const itemLocator = this.inventoryItemNames.filter({ hasText: itemName });
        console.log("itemLocator" + itemLocator);
        console.log('itemLocator:', await itemLocator.allTextContents());
        const getdescription = await itemLocator.locator(this.inventoryItemsDescription);
        console.log('getdescription:', await getdescription.allTextContents());
        await getdescription.locator(this.removeFromCartButton).click();
        break;                                                      
      }
    }}

  async openCart() {
    await this.shoppingCart.click();
  }

  async getItemCount() {
    await this.inventoryItemNames.count();
  }
  async assertCartBadgeHidden() {
    await expect(this.shoppingCartBadge).toHaveCount(0);
  }
  async assertCartBadgeCount(count: number) {
    await expect(this.shoppingCartBadge).toHaveText(String(count));
  }
  async assertLoaded() {
    await expect(this.inventoryContainer.first()).toBeVisible();
    // await expect(this.shoppingCartLink).toBeVisible();
  }


}
