import { test as base } from '@playwright/test';
import { SauceDemoLoginPage } from '../../pages/sauce-demo/login.page';
import { SauceDemoInventoryPage } from '../../pages/sauce-demo/inventory.page';
import { SauceDemoCartPage } from '../../pages/sauce-demo/cart.page';
import { SauceDemoCheckoutInformationPage } from '../../pages/sauce-demo/checkoutInformation.page';
import { SauceDemoCheckoutOverviewPage } from '../../pages/sauce-demo/checkoutOverview.page';
import { SauceDemoCheckoutCompletePage } from '../../pages/sauce-demo/checkoutComplete.page';


type hooksFixtures = {

   sauceDemoLoginPage: SauceDemoLoginPage;
   sauceDemoInventoryPage: SauceDemoInventoryPage;
   sauceDemoCartPage: SauceDemoCartPage;
   sauceDemoCheckoutInformationPage: SauceDemoCheckoutInformationPage;
   sauceDemoCheckoutOverviewPage: SauceDemoCheckoutOverviewPage;
   sauceDemoCheckoutCompletePage: SauceDemoCheckoutCompletePage;
};

export const test = base.extend<hooksFixtures>({

   sauceDemoLoginPage: async ({ page }, use) => {
      await use(new SauceDemoLoginPage(page));
      // const sauceDemoLoginPage=new SauceDemoLoginPage(page);
      // await use(sauceDemoLoginPage);

   },
   sauceDemoInventoryPage: async ({ page }, use) => {
      await use(new SauceDemoInventoryPage(page));
   },
   sauceDemoCartPage: async ({ page }, use) => {
      await use(new SauceDemoCartPage(page));
   },
   sauceDemoCheckoutInformationPage: async ({ page }, use) => {
      await use(new SauceDemoCheckoutInformationPage(page));
   },
   sauceDemoCheckoutOverviewPage: async ({ page }, use) => {
      await use(new SauceDemoCheckoutOverviewPage(page));
   },
   sauceDemoCheckoutCompletePage: async ({ page }, use) => {
      await use(new SauceDemoCheckoutCompletePage(page));
   }
});

export { expect } from '@playwright/test';
