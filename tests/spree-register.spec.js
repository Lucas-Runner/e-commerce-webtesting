// @ts-check
const { test, expect } = require('@playwright/test');

/*

test('Browser Context Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demo.spreecommerce.org/");
    console.log(await page.title());

    await (page.locator('.pop-close-btn')).click();
    await (page.locator('._24EHh')).click();

    await (page.locator('.nav-user-account')).click();
    await (page.locator('.sign-btn')).click();
    await (page.locator("[id='fm-login-id']")).type("qualitytestingdummy@gmail.com");
    await (page.locator("[id='fm-login-password']")).type("Hazmat-Suit-1234");
    await (page.locator('.cosmos-btn.cosmos-btn-primary.cosmos-btn-large.cosmos-btn-block.login-submit')).click();

    await page.waitForLoadState('networkidle');
    const pageContent = await page.content();
    //const isTextPresent = pageContent.includes('olá, qualitytestingdummy!');
    expect(pageContent).toContain('olá, qualitytestingdummy!');


});

*/

test('Browser Context Test', async ({ browser }) => {

    const randomString = Math.random().toString(36).substring(2, 10);
    const baseUrl = "https://putsbox.com/random/inspect";
    const newUrl = baseUrl.replace("random", randomString);

    console.log(newUrl);

    /*

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demo.spreecommerce.org/");
    */


});