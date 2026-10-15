import { expect, test } from '../../fixture/sauce-demo/testbase';
import testData from '../../testdata/testData.json';

test.describe('SauceDemo Cart Tests', () => {
const username  = process.env.EncryptedUSERID?.toString();
const password  = process.env.EncryptedPASSWORD?.toString();

 test.beforeEach(async ({ sauceDemoLoginPage, sauceDemoInventoryPage }) => {
    await sauceDemoLoginPage.goTo();
    await sauceDemoLoginPage.login(username, password);
    await sauceDemoInventoryPage.assertLoaded();
  });

  test('removes an item from the cart page and clears the badge', async ({
    sauceDemoInventoryPage, sauceDemoCartPage }) => {
   
    await sauceDemoInventoryPage.addItemToCart(testData.backPack);
    await sauceDemoInventoryPage.openCart();
    await sauceDemoCartPage.assertContainsItems([testData.backPack]);
    await sauceDemoCartPage.removeItem(testData.backPack);
    expect(await sauceDemoCartPage.getItemCount()).toBe(0);
    await sauceDemoInventoryPage.assertCartBadgeHidden();
  });

  test('continue shopping returns to the inventory with the cart intact', async ({
    sauceDemoInventoryPage,sauceDemoCartPage}) => {
    
    await sauceDemoInventoryPage.addItemToCart(testData.backPack);
    await sauceDemoInventoryPage.openCart();
    await sauceDemoCartPage.continueShopping();
    await sauceDemoInventoryPage.assertLoaded();
    await sauceDemoInventoryPage.assertCartBadgeCount(1);
  });
});
