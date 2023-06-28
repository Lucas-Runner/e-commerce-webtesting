// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');


test('Browser Context Test', async ({ browser }) => {
    const { email, newTab, numPassword, page } = await executeRegistration(browser);

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

    const firstName = newTab.locator("[id='order_bill_address_attributes_firstname']");
    const lastName = newTab.locator("[id='order_bill_address_attributes_lastname']");
    const adddress = newTab.locator("[id='order_bill_address_attributes_address1']");
    const adressContd = newTab.locator("[id='order_bill_address_attributes_address2']");
    const city = newTab.locator("[id='order_bill_address_attributes_city']");
    const zipCode = newTab.locator("[id='order_bill_address_attributes_zipcode']");
    const phone = newTab.locator("[id='order_bill_address_attributes_phone']")
    const state = newTab.locator("[id='order_bill_address_attributes_state_id']");
    const save = newTab.locator('input[type="submit"]');

    await firstName.type("Lucas");
    await lastName.type("Silva");
    await adddress.type("Billing Street 999");
    await adressContd.type("apartment n° 1040");
    await city.type("Columbus");
    await zipCode.type("44039")
    await phone.type("555-0123456")
    await state.selectOption({ label: 'Ohio' });
    await save.click();

    // End of Billing Address Filling Procedure

    // Shippment and Payment Options

    await save.click(); 

    const cardNumber = newTab.locator("[id='card_number']");
    const cardExpiry = newTab.locator("[id='card_expiry']");
    const cardCode = newTab.locator("[id='card_code']");

    await cardNumber.type("0123012301230123");
    await cardExpiry.type("122025");
    await cardCode.type("123");

    await save.click(); 

    // Check-Out Assertions

    

    // Purchase Confirmation and Assertions

    await page.waitForTimeout(30000);


});
