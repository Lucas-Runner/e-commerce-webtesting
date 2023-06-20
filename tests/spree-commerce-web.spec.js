// @ts-check
const { test, expect } = require('@playwright/test');

test('Browser Context Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://pt.aliexpress.com/");
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


    //const email = page.locator("[id='fm-login-id']");
    //const passWord = page.locator("[id='fm-login-password']");
    //const signInBtn = (page.locator('.sign-btn'));
    //const cardTitles = page.locator(".card-body b");

    //console.log(await cardTitles.first().textContent());
    //await page.waitForLoadState('networkidle');
    //console.log(await cardTitles.allTextContents());

    /*w
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //type -> fill method
    await userName.fill(""); // this blanks out the field under the userName locator
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent()); // this css returns 4 results -> uses .first method 
    console.log(await cardTitles.nth(1).textContent()); // similar but nth(0) method returns the nº0 of array
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    */


});