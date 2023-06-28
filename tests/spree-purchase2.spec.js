// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');
const { executeBillingAddress } = require('../helpers/adress');


test('Browser Context Test', async ({ browser }) => {
    const { newTab, page } = await executeRegistration(browser);

    // Return to Home Page

    await newTab.goto("https://demo.spreecommerce.org/");

    // Clicking Shop Now, First Product and Add to Cart

    await newTab.locator('.btn.btn-primary.spree-btn.px-5').click();
    await newTab.locator("#product_65").click();
    await newTab.locator("#add-to-cart-button").click();

    // View Cart

    await newTab.locator('.btn.btn-outline-primary.w-100.font-weight-bold.text-uppercase.product-added-modal-button').click();

    // Performing Checkout and Purchase procedure

    await newTab.locator("[id='checkout-link']").click();

    // Billing Address filling procedure

    const { firstNameText, lastNameText, addressText, cityText, zipCodeText, phoneText, stateText } = await executeBillingAddress(newTab);

    // End of Billing Address Filling Procedure

    // Shippment and Payment Options

    const save = newTab.locator('input[type="submit"]');

    await save.click();

    const cardNumber = newTab.locator("[id='card_number']");
    const cardExpiry = newTab.locator("[id='card_expiry']");
    const cardCode = newTab.locator("[id='card_code']");

    await cardNumber.type("0123012301230123");
    await cardExpiry.type("122025");
    await cardCode.type("123");

    await save.click();

    // Check-Out Assertions

    const orderDetailsText = await newTab.textContent("[id='order_details']");

    expect(orderDetailsText).toContain(firstNameText);
    expect(orderDetailsText).toContain(lastNameText);
    expect(orderDetailsText).toContain(addressText);
    expect(orderDetailsText).toContain(cityText);
    expect(orderDetailsText).toContain(zipCodeText);

    // Purchase Confirmation and Assertions

    await page.waitForTimeout(5000);


});