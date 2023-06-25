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

const productNameLocator = await newTab.locator('.mt-3.mt-md-0.text-center.text-md-left.product-details-title');
const productName = await productNameLocator.innerText();

await newTab.locator("#add-to-cart-button").click();

// View Cart

await newTab.locator('.btn.btn-outline-primary.w-100.font-weight-bold.text-uppercase.product-added-modal-button').click();

const cartItemLocator = await newTab.locator('.item-title');
const cartItemName = await cartItemLocator.innerText();

// Product Names Assertions

expect(productName).toBe(cartItemName);

await page.waitForTimeout(5000);


});

