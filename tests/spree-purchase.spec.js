// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');


test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

    // formating address phase

    // Adding Adress and billing info

    const adressTitle = newTab.locator("[id='adress_label']");
    const firstName = newTab.locator("[id='address_firstname']");
    const lastName = newTab.locator("[id='address_lastname']");
    const adress = newTab.locator("[id='address_address1']");
    const adressContd = newTab.locator("[id='address_address2']");
    const city = newTab.locator("[id='address_city']");
    const state = newTab.locator("[id='address_state_id']");

    await newTab.locator('a[data-method="get"][href="/addresses/new"]').click();

    const dropboxField = await newTab.locator("[id='address_state_id']");
    await dropboxField.click();

    // Wait for the dropdown options to be visible
    await newTab.waitForSelector('.select2-results__option');

    const desiredStateValue = '483'; // Replace with the desired state value

    // Select the desired state option by its value
    const stateOption = await newTab.locator('.select2-results__option[value="' + desiredStateValue + '"]').first();
    await stateOption.click();

    // end of address phase


    // Clicking Logo to Return Home Page

    await newTab.goto("https://demo.spreecommerce.org/");

    // Clicking Shop Now, First Product and Add to Cart

    await newTab.locator('.btn.btn-primary.spree-btn.px-5').click();
    await newTab.locator("#product_65").click();
    await newTab.locator("#add-to-cart-button").click();

    // View Cart

    await newTab.locator('.btn.btn-outline-primary.w-100.font-weight-bold.text-uppercase.product-added-modal-button').click();

    // Performing Checkout and Purchase procedure

    await newTab.locator("[id='checkout-link']").click();

    // Purchase Confirmation and Assertions

    await page.waitForTimeout(5000);


});
