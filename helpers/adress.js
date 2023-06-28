async function executeBillingAddress(newTab) {

    // Adding Adress and billing info

    const firstName = newTab.locator("[id='order_bill_address_attributes_firstname']");
    const lastName = newTab.locator("[id='order_bill_address_attributes_lastname']");
    const address = newTab.locator("[id='order_bill_address_attributes_address1']");
    const adressContd = newTab.locator("[id='order_bill_address_attributes_address2']");
    const city = newTab.locator("[id='order_bill_address_attributes_city']");
    const zipCode = newTab.locator("[id='order_bill_address_attributes_zipcode']");
    const phone = newTab.locator("[id='order_bill_address_attributes_phone']")
    const state = newTab.locator("[id='order_bill_address_attributes_state_id']");
    const save = newTab.locator('input[type="submit"]');

    const firstNameText = "Lucas";
    const lastNameText = "Silva";
    const addressText = "Billing Street 999"
    const adressContdText = "apartment n° 1040"
    const cityText = "Columbus"
    const zipCodeText = "44039"
    const phoneText = "555-0123456"
    const stateText = "Ohio"

    await firstName.type(firstNameText);
    await lastName.type(lastNameText);
    await address.type(addressText);
    await adressContd.type(adressContdText);
    await city.type(cityText);
    await zipCode.type(zipCodeText)
    await phone.type(phoneText)
    await state.selectOption({ label: stateText });
    await save.click();

    return { newTab, firstNameText, lastNameText, addressText, cityText, zipCodeText, phoneText, stateText };
}

module.exports = { executeBillingAddress };
