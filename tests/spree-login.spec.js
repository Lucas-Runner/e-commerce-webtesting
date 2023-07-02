// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

    // Log-out Procedure / Log-in Test

    await newTab.locator("//button[@id='account-button']//*[name()='svg']").click();
    await newTab.locator('#link-to-account a[href="/logout"]').click();
    await newTab.goto("https://demo.spreecommerce.org/");
    await newTab.locator("#account-button").click();
    await newTab.locator('#link-to-account a[href="/login"]').click();
    await newTab.locator("[id$='spree_user_email']").type(email);
    await newTab.locator("[id$='spree_user_password']").type(numPassword);
    await newTab.locator(".btn.btn-primary.btn-block.spree-btn.mt-2").click();
        
    
    // Assertions
    const searchPage = 'My Account';
    expect(await newTab.locator(".text-uppercase.spree-mb-large.spree-mt-large.spree-header").textContent()).toContain(searchPage);
    expect(await newTab.locator(".account-page-user-info-item-definition").textContent()).toContain(email);
    
    const currentURL = newTab.url();
    expect(currentURL).toBe("https://demo.spreecommerce.org/account");
    

    await page.waitForTimeout(5000);



});
