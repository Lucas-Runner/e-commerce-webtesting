// @ts-check
const { test, expect } = require('@playwright/test');
const { executeRegistration } = require('../helpers/registration');

test('Browser Context Test', async ({ browser }) => {
  const { email, newTab, numPassword, page } = await executeRegistration(browser);

  // Return to Home Page
  await newTab.goto('https://demo.spreecommerce.org/');

  // Clicking Shop Now, First Product and Add to Cart
  await newTab.locator('.btn.btn-primary.spree-btn.px-5').click();
  await newTab.locator('#product_65').click();
  await newTab.locator('#add-to-cart-button').click();

  // View Cart
  await newTab.locator('.btn.btn-outline-primary.w-100.font-weight-bold.text-uppercase.product-added-modal-button').click();

  // Performing Checkout and Purchase procedure
  await newTab.locator("[id='checkout-link']").click();

  // Billing Address filling procedure
  const billingAddressFields = {
    "[id='order_bill_address_attributes_firstname']": 'Lucas',
    lastName: 'Silva',
    address1: 'Billing Street 999',
    address2: 'apartment n° 1040',
    city: 'Columbus',
    zipcode: '44039',
    phone: '555-0123456',
    state_id: 'Ohio',
  };

  for (const field in billingAddressFields) {
    const locator = newTab.locator(field);
    await locator.type(billingAddressFields[field]);
  }

  await newTab.locator('input[type="submit"]').click();

  // End of Billing Address Filling Procedure

  // Shippment and Payment Options
  await newTab.locator('input[type="submit"]').click();

  const paymentFields = {
    card_number: '0123012301230123',
    card_expiry: '122025',
    card_code: '123',
  };

  for (const field in paymentFields) {
    const locator = newTab.locator(`[id='${field}']`);
    await locator.type(paymentFields[field]);
  }

  await newTab.locator('input[type="submit"]').click();

  // Check-Out Assertions
  const orderDetailsText = await newTab.textContent("[id='order_details']");

  for (const field in billingAddressFields) {
    expect(orderDetailsText).toContain(billingAddressFields[field]);
  }

  // Purchase Confirmation and Assertions
  await page.waitForTimeout(5000);
});
