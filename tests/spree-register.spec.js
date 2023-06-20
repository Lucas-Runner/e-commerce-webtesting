// @ts-check
const { test, expect } = require('@playwright/test');

test('Browser Context Test', async ({ browser }) => {

    const randomString = Math.random().toString(36).substring(2, 10);
    const baseUrl = "https://putsbox.com/random/inspect";
    const newUrl = baseUrl.replace("random", randomString);
    const email = `${randomString}@putsbox.com`

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(newUrl);
    const randomEmail = await page.getAttribute('#putsbox-token-input', 'value');
    console.log(randomEmail);

    const newContext = await browser.newContext();
    const newPage = await context.newPage();
    const newTab = await context.newPage();

    await newTab.goto("https://demo.spreecommerce.org/");
    await newTab.locator("#account-button").click();
    await newTab.locator('#link-to-account a[href="/signup"]').click();
    await newTab.locator("[id$='spree_user_email']").type(email);

    const numPassword = "123456789"

    await newTab.locator("[id$='spree_user_password']").type(numPassword);
    await newTab.locator("[id$='spree_user_password_confirmation']").type(numPassword);
    await newTab.locator(".btn.btn-primary.btn-block.spree-btn.mb-5").click();
    


    
    await page.waitForTimeout(5000);



});
