import { expect, test } from '../../fixture/sauce-demo/testbase';
import testData from '../../testdata/testData.json';

const username  = process.env.EncryptedUSERID?.toString();
const password  = process.env.EncryptedPASSWORD?.toString();

test.describe('SauceDemo Inventory Tests', () => {
  test.beforeEach(async ({ sauceDemoLoginPage ,sauceDemoInventoryPage}) => {
    await sauceDemoLoginPage.goTo();
    await sauceDemoLoginPage.login(username, password);
    await sauceDemoInventoryPage.assertLoaded();
  });

  test('displays the inventory after login', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.verifyInventoryPageDisplayed();
  });

  test('sorts products by name from A to Z', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.sortProducts('az');
    const names = await sauceDemoInventoryPage.getProductNames();
    expect(names).toEqual([...names].sort((first, second) => first.localeCompare(second)));
  });

  test('sorts products by name from Z to A', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.sortProducts('za');
    const names = await sauceDemoInventoryPage.getProductNames();
    expect(names).toEqual([...names].sort((first, second) => second.localeCompare(first)));
  });

  test('sorts products by price from low to high', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.sortProducts('lohi');
    const prices = await sauceDemoInventoryPage.getProductPrices();
    expect(prices).toEqual([...prices].sort((first, second) => first - second));
  });

  test('sorts products by price from high to low', async ({ sauceDemoInventoryPage }) => {
    await sauceDemoInventoryPage.sortProducts('hilo');
    const prices = await sauceDemoInventoryPage.getProductPrices();
    expect(prices).toEqual([...prices].sort((first, second) => second - first));
  });

  test('adds a product to the cart and displays it in the cart then removes a product from the cart and verifies it is removed ', async ({ sauceDemoInventoryPage, page }) => {
   
   await sauceDemoInventoryPage.addItemToCart(testData.backPack);
       await sauceDemoInventoryPage.assertCartBadgeCount(1);
        await sauceDemoInventoryPage.removeItemFromCart(testData.backPack);
    await sauceDemoInventoryPage.assertCartBadgeHidden();
  });


});
