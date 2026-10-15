import { expect, test } from '../../../fixture/sauce-demo/testbase'
import testdata from '../../../testdata/testData.json';
import { ErrorMessages } from '../../../utils/Messages';
import { InfoMessages } from '../../../utils/Messages';

test.describe('SauceDemo E2E Suite', () => {
  const username = process.env.EncryptedUSERID;
  const password = process.env.EncryptedPASSWORD;
  const lockedUsername = process.env.LockedUSERID;
  const lockedPassword = process.env.LockedPASSWORD;



  test('End to End checkout test', async ({ sauceDemoLoginPage, sauceDemoInventoryPage, sauceDemoCartPage, sauceDemoCheckoutInformationPage, sauceDemoCheckoutOverviewPage, sauceDemoCheckoutCompletePage

  }) => {

    await test.step('Attempt to login with locked out user', async () => {
      await sauceDemoLoginPage.goTo();

      await sauceDemoLoginPage.login(lockedUsername, lockedPassword);
      await sauceDemoLoginPage.assertErrorContains(ErrorMessages.LOCKED_OUT_USER);
    });

    await test.step('Login with Standard user successfully', async () => {

      await sauceDemoLoginPage.login(username, password);
      await sauceDemoInventoryPage.verifyInventoryPageDisplayed();
    });

    await test.step('Add items to cart and proceed to checkout', async () => {
      await sauceDemoInventoryPage.addItemToCart(testdata.backPack);
      await sauceDemoInventoryPage.addItemToCart(testdata.backlight);
      await sauceDemoInventoryPage.assertCartBadgeCount(2);
    });

    await test.step('Click on cart and verify the items', async () => {
      await sauceDemoInventoryPage.openCart();
      await sauceDemoCartPage.assertContainsItems([testdata.backPack, testdata.backlight]);

    });

    await test.step('Proceed to checkout and fill information', async () => {
      await sauceDemoCartPage.clickcheckout();
      await sauceDemoCheckoutInformationPage.fillInformation(testdata.firstName, testdata.lastName, testdata.postalCode);
    });

    await test.step('Validate checkout overview page', async () => {
      await sauceDemoCheckoutInformationPage.continue();

      await sauceDemoCheckoutOverviewPage.assertLoaded();
      const prices = await sauceDemoCheckoutOverviewPage.getItemPrices();
      const itemTotal = await sauceDemoCheckoutOverviewPage.getItemTotal();
      const tax = await sauceDemoCheckoutOverviewPage.getTax();
      const total = await sauceDemoCheckoutOverviewPage.getTotal();
      expect(prices).toHaveLength(2);
      expect(itemTotal).toBeCloseTo(prices.reduce((sum, price) => sum + price, 0), 2);
      expect(total).toBeCloseTo(itemTotal + tax, 2);

      await sauceDemoCheckoutOverviewPage.finish();
    });


    await test.step('Verify order confirmation', async () => {
      await sauceDemoCheckoutCompletePage.assertOrderCompleteMessageContains(InfoMessages.THANK_YOU_FOR_ORDER);

    });
  });

});
