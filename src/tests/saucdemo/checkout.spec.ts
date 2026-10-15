import { expect, test } from '../../fixture/sauce-demo/testbase';
import testData from '../../testdata/testData.json';
import { InfoMessages ,ErrorMessages} from  '../../utils/Messages';


test.describe('SauceDemo Checkout Tests', () => {
    const username = process.env.EncryptedUSERID?.toString();
    const password = process.env.EncryptedPASSWORD?.toString();
/*
    test.beforeEach(async ({ sauceDemoLoginPage, sauceDemoInventoryPage }) => {
        await sauceDemoLoginPage.goTo();
        await sauceDemoLoginPage.login(username, password);
        await sauceDemoInventoryPage.assertLoaded();
    });
    test('completes checkout for a single item', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
        sauceDemoCheckoutOverviewPage,
        sauceDemoCheckoutCompletePage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.assertContainsItems([testData.backPack]);
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation(testData.firstName, testData.lastName, testData.postalCode);
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutOverviewPage.assertLoaded();
        const itemTotal = await sauceDemoCheckoutOverviewPage.getItemTotal();
        const tax = await sauceDemoCheckoutOverviewPage.getTax();
        const total = await sauceDemoCheckoutOverviewPage.getTotal();
        expect(total).toBeCloseTo(itemTotal + tax, 2);
        await sauceDemoCheckoutOverviewPage.finish();
        await sauceDemoCheckoutCompletePage.assertLoaded();
        await sauceDemoCheckoutCompletePage.backHome();
        await sauceDemoInventoryPage.assertLoaded();
    },
    );

    test('multi-item checkout sums line prices into the item total', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
        sauceDemoCheckoutOverviewPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.addItemToCart(testData.backlight);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.assertContainsItems([testData.backPack, testData.backlight]);
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation(testData.firstName, testData.lastName, testData.postalCode);
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutOverviewPage.assertLoaded();
        const lineTotals = await sauceDemoCheckoutOverviewPage.getItemPrices();
        const itemTotal = await sauceDemoCheckoutOverviewPage.getItemTotal();
        const tax = await sauceDemoCheckoutOverviewPage.getTax();
        const total = await sauceDemoCheckoutOverviewPage.getTotal();
        const sumOfLines = lineTotals.reduce((sum, value) => sum + value, 0);
        expect(lineTotals).toHaveLength(2);
        expect(itemTotal).toBeCloseTo(sumOfLines, 2);
        expect(total).toBeCloseTo(itemTotal + tax, 2);
    });


    test('checkout information with firstName is giving error message', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation('', '', '');
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutInformationPage.assertErrorContains(ErrorMessages.CHECKOUT_FIRST_NAME_REQUIRED);
    });
    
    test('checkout information with lastName is giving error message', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation(testData.firstName, '', '');
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutInformationPage.assertErrorContains(ErrorMessages.CHECKOUT_LAST_NAME_REQUIRED);
    });

    test('checkout information with postalCode is giving error message', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation(
            testData.firstName, testData.lastName, '');
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutInformationPage.assertErrorContains(ErrorMessages.CHECKOUT_POSTAL_CODE_REQUIRED);
    });


    test('cancel on information page returns to cart with items intact', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.cancel();
        await sauceDemoCartPage.assertContainsItems([testData.backPack]);
    });

    test('cancel on overview page returns to the inventory', async ({
        sauceDemoInventoryPage,
        sauceDemoCartPage,
        sauceDemoCheckoutInformationPage,
        sauceDemoCheckoutOverviewPage,
    }) => {

        await sauceDemoInventoryPage.addItemToCart(testData.backPack);
        await sauceDemoInventoryPage.openCart();
        await sauceDemoCartPage.clickcheckout();
        await sauceDemoCheckoutInformationPage.fillInformation(testData.firstName, testData.lastName, testData.postalCode);
        await sauceDemoCheckoutInformationPage.continue();
        await sauceDemoCheckoutOverviewPage.assertLoaded();
        await sauceDemoCheckoutOverviewPage.cancel();
        await sauceDemoInventoryPage.assertLoaded();
    });
*/
});