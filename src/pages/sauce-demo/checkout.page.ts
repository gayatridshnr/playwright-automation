import {Locator,Page,expect} from '@playwright/test';

export class SauceDemoLoginPage {
    readonly page: Page;



    constructor(page:Page){
        this.page=page;

        
    }
}