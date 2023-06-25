// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

    // Assertions
    const searchPage = 'My Account';
    expect(await newTab.locator(".text-uppercase.spree-mb-large.spree-mt-large.spree-header").textContent()).toContain(searchPage);
    expect(await newTab.locator(".account-page-user-info-item-definition").textContent()).toContain(email);

    const currentURL = newTab.url();
    expect(currentURL).toBe("https://demo.spreecommerce.org/account");


    await page.waitForTimeout(5000);



});
