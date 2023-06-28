async function executeBillingAddress(browser) {

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
    const save = newTab.locator('input[type="submit"]');

    await newTab.locator('a[data-method="get"][href="/addresses/new"]').click();

    await adressTitle.type("Home");
    await firstName.type("Lucas");
    await lastName.type("Silva");
    await adddress.type("Billing Street 999");
    await adressContd.type("apartment n° 1040");
    await city.type("Columbus");
    await zipCode.type("0123456")
    await phone.type("555-0123456")
    await state.selectOption({ label: 'Ohio' });
    await save.click();


    return { email, newTab, numPassword };
}

module.exports = { executeBillingAddress };
