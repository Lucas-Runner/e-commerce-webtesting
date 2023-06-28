// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');


test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

    // formating address phase

    // Adding Adress and billing info

    const adressTitle = newTab.locator("[id='address_label']");
    const firstName = newTab.locator("[id='address_firstname']");
    const lastName = newTab.locator("[id='address_lastname']");
    const adddress = newTab.locator("[id='address_address1']");
    const adressContd = newTab.locator("[id='address_address2']");
    const city = newTab.locator("[id='address_city']");
    const zipCode = newTab.locator("[id='address_zipcode']");
    const phone = newTab.locator("[id='address_phone']")
    const state = newTab.locator("[id='address_state_id']");

    await newTab.locator('a[data-method="get"][href="/addresses/new"]').click();

    await adressTitle.type("Home");
    await firstName.type("Lucas");
    await lastName.type("Silva");
    await adddress.type("Billing Street 999");
    await adressContd.type("apartment n° 1040");
    await city.type("Columbus");
    await zipCode.type("0123456")
    await phone.type("555-0123456")

    // Click on the dropdown to expand the options

    await state.click();
    

    // end of address phase

/*
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
*/
    await page.waitForTimeout(5000);


});
