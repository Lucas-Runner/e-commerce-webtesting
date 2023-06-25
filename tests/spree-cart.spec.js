// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');


test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

// Clicking Logo to Return Home Page

await newTab.goto("https://demo.spreecommerce.org/");

// Clicking Shop Now, First Product and Add to Cart

await newTab.locator('.btn.btn-primary.spree-btn.px-5').click();
await newTab.locator("#product_65").click();
await newTab.locator("#add-to-cart-button").click();

const clickedProductTitle = await newTab.locator(".product-component-name").textContent();
console.log(clickedProductTitle);
// View Cart

await newTab.locator('.btn.btn-outline-primary.w-100.font-weight-bold.text-uppercase.product-added-modal-button').click();


await page.waitForTimeout(5000);


});

