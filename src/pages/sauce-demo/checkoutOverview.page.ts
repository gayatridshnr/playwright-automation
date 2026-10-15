import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoCheckoutOverviewPage {
    readonly page: Page;
    readonly itemTotal: Locator;
    readonly taxLabel: Locator;
    readonly totalLabel: Locator;
    readonly itemPrices: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator ;
    readonly summaryContainer: Locator;
    readonly itemTotalLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemTotal = page.locator('.summary_subtotal_label');
        this.taxLabel = page.locator('.summary_tax_label');
        this.totalLabel = page.locator('.summary_total_label');
        this.itemPrices = page.locator('.inventory_item_price');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.summaryContainer = page.locator('.checkout_summary_container');
        this.itemTotalLabel = page.locator('.summary_subtotal_label');
    }

    async assertLoaded() {
        await expect(this.summaryContainer).toBeVisible();
    }

    async getItemTotal() {
        const text = await this.itemTotalLabel.textContent();
        return Number(text?.replace('Item total: $', '') ?? '0');
    }

    async getTax() {
        const text = await this.taxLabel.textContent();
        return Number(text?.replace('Tax: $', '') ?? '0');
    }

    async getTotal() {
        const text = await this.totalLabel.textContent();
        return Number(text?.replace('Total: $', '') ?? '0');
    }

    async getItemPrices() {
        const values = await this.itemPrices.allTextContents();
        return values.map((value) => Number(value.trim().replace('$', '')));
    }

    async finish() {
        await this.finishButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }
}
