// @ts-check
const { test, expect } = require('@playwright/test');

test('Browser Context Test', async ({ browser }) => {

    // Random character generator and e-mail creator with PutsBox
    const randomString = Math.random().toString(36).substring(2, 10);
    const baseUrl = "https://putsbox.com/random/inspect";
    const newUrl = baseUrl.replace("random", randomString);
    const email = `${randomString}@putsbox.com`

    // E-mail page execution
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(newUrl);
    console.log(email);

    // New tab for website navigation / Website Registration
    const newContext = await browser.newContext();
    const newTab = await context.newPage();

    await newTab.goto("https://demo.spreecommerce.org/");
    await newTab.locator("#account-button").click();
    await newTab.locator('#link-to-account a[href="/signup"]').click();
    await newTab.locator("[id$='spree_user_email']").type(email);

    const numPassword = "123456789"

    await newTab.locator("[id$='spree_user_password']").type(numPassword);
    await newTab.locator("[id$='spree_user_password_confirmation']").type(numPassword);
    await newTab.locator(".btn.btn-primary.btn-block.spree-btn.mb-5").click();

    // Log-out Procedure / Log-in Test

    await newTab.locator("#account-button").click();
    await newTab.locator('#link-to-account a[href="/logout"]').click();
    await newTab.goto("https://demo.spreecommerce.org/");
    await newTab.locator("#account-button").click();
    await newTab.locator('#link-to-account a[href="/login"]').click();
    await newTab.locator("[id$='spree_user_email']").type(email);
    await newTab.locator("[id$='spree_user_password']").type(numPassword);
    await newTab.locator(".btn.btn-primary.btn-block.spree-btn.mt-2").click();
    
    /*
    // Assertions
    const searchPage = 'My Account';
    expect(await newTab.locator(".text-uppercase.spree-mb-large.spree-mt-large.spree-header").textContent()).toContain(searchPage);
    expect(await newTab.locator(".account-page-user-info-item-definition").textContent()).toContain(email);
    
    const currentURL = newTab.url();
    //expect(currentURL).toBe("https://demo.spreecommerce.org/account");
    */

    await page.waitForTimeout(5000);



});
